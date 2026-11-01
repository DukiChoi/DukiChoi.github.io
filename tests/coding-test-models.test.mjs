import test from 'node:test';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {execFileSync} from 'node:child_process';
import {existsSync, mkdtempSync, rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import path from 'node:path';
const require = createRequire(import.meta.url);
const {floodFill, shortestPath, evacuationDistances, matchByDeadline, solveEvacuation} = require('../assets/js/coding-test-models.js');
const repo = path.resolve(import.meta.dirname, '..');

test('flood fill counts four-way components regardless of DFS/BFS order', () => {
  for (const mode of ['dfs', 'bfs']) {
    assert.deepEqual(floodFill(['00100','00111','11100','00100','00111'], '0', mode).sizes, [2,4,4,4]);
    assert.deepEqual(floodFill(['101','010','101'], '1', mode).sizes, [1,1,1,1,1]);
    assert.deepEqual(floodFill(['111','111'], '0', mode).sizes, []);
    assert.deepEqual(floodFill(['000','000'], '0', mode).sizes, [6]);
    const frames = floodFill(['000','000'], '0', mode).frames;
    const visits = frames.filter(frame => frame.event === 'visit').map(frame => frame.current.join(','));
    assert.equal(new Set(visits).size, 6);
  }
});

const shortestCases = [
  {rows:['10111','10101','10111','11101','00001'], answer:11},
  {rows:['10111','10101','10111','11100','00001'], answer:-1},
  {rows:['11100','00100','11110','10010','11111'], answer:9},
  {rows:['1111','0001'], answer:5}, {rows:['1'], answer:1}, {rows:['0'], answer:-1}
];
test('shortest paths count both endpoints, handle rectangles and preserve the map', () => {
  for (const {rows, answer} of shortestCases) {
    const snapshot = [...rows], result = shortestPath(rows);
    assert.equal(result.answer, answer);assert.deepEqual(rows, snapshot);
    assert.equal(result.path.length, Math.max(0, answer));
    for (let i = 1; i < result.path.length; i++) {
      const [r,c] = result.path[i], [pr,pc] = result.path[i-1];
      assert.equal(Math.abs(r-pr)+Math.abs(c-pc), 1);assert.equal(rows[r][c], '1');
    }
  }
});

function checkSchedule(model, result) {
  const occupied = new Set();let count = 0;
  result.schedule.forEach((slot, p) => {
    if (!slot) return;
    assert.ok(model.distances[slot.door][p] > 0);
    assert.ok(slot.time >= model.distances[slot.door][p] && slot.time <= result.deadline);
    const key = `${slot.door},${slot.time}`;assert.ok(!occupied.has(key));occupied.add(key);count++;
  });
  assert.equal(count, result.matched);
}
// Exhaustively choose slots, independently of the augmenting-path implementation.
function exhaustive(model, deadline, person = 0, occupied = new Set()) {
  if (person === model.people.length) return 0;
  let best = exhaustive(model, deadline, person + 1, occupied);
  for (let d = 0; d < model.doors.length; d++) for (let t = 1; t <= deadline; t++) {
    const key = `${d},${t}`, distance = model.distances[d][person];
    if (distance < 1 || distance > t || occupied.has(key)) continue;
    occupied.add(key);best = Math.max(best, 1 + exhaustive(model, deadline, person + 1, occupied));occupied.delete(key);
  }
  return best;
}
let seed = 3057;
function random(n) {seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;return (seed >>> 8) % n;}
test('matching can reassign an occupied door and agrees with exhaustive search', () => {
  const flexible = {people:[0,1], doors:[0,1], distances:[[1,1],[1,-1]]};
  assert.equal(matchByDeadline(flexible, 1).matched, 2);
  for (let i = 0; i < 80; i++) {
    const model = {people:Array(4).fill(0), doors:[0,1], distances:Array.from({length:2}, () => Array.from({length:4}, () => [-1,1,2,3][random(4)]))};
    let previous = 0;
    for (let t = 0; t <= 3; t++) {
      const result = matchByDeadline(model, t);
      assert.equal(result.matched, exhaustive(model, t));assert.ok(result.matched >= previous);
      checkSchedule(model, result);previous = result.matched;
    }
  }
});

const evacuationCases = [
  {rows:['XXDXX','X...X','D...X','X...D','XXXXX'], answer:3},
  {rows:['XXXXXXXXXXXX','X..........D','X.XXXXXXXXXX','X..........X','XXXXXXXXXXXX'], answer:21},
  {rows:['XDXXX','X.X.D','XX.XX','D.X.X','XXXDX'], answer:-1},
  {rows:['XXDXX','X...X','X.X.X','X...X','XXXXX'], answer:8},
  {rows:['XXDXX','X...X','D.X.X','X...X','XXXXX'], answer:4},
  {rows:['XXX','X.X','XXX'], answer:-1}, {rows:['XXX','XXX','XXX'], answer:0}
];
test('evacuation solves source samples, congestion and disconnected rooms', () => {
  for (const {rows, answer} of evacuationCases) {
    const result = solveEvacuation(rows);assert.equal(result.minimum, answer);
    if (answer > 0) {
      checkSchedule(result.model, {...result, matched:result.model.people.length, deadline:answer});
      assert.ok(matchByDeadline(result.model, answer - 1).matched < result.model.people.length);
    }
  }
  // Boundary doors terminate routes and cannot connect two interior regions.
  const model = evacuationDistances(['XDDX','X.XX','XX.X','XXXX']);
  assert.deepEqual(model.distances, [[1,-1],[-1,-1]]);
});

test('published Python solutions agree with known cases and independent visualizer results', () => {
  const grids = [['11011','11000','00011','11011','11000'], ['101','010','101'], ['11','11'], ['00','00']];
  const script = `import json,runpy,sys\ndata=json.load(sys.stdin)\nf=runpy.run_path('_includes/solutions/boj-2667.py')['component_sizes']\ns=runpy.run_path('_includes/solutions/programmers-1844.py')['solution']\nprint(json.dumps({'flood':[f(g) for g in data['flood']], 'shortest':[s([[int(c) for c in r] for r in g]) for g in data['shortest']]}))`;
  const actual = JSON.parse(execFileSync('python3', ['-c', script], {cwd:repo, input:JSON.stringify({flood:grids, shortest:shortestCases.map(c => c.rows)}), encoding:'utf8'}));
  assert.deepEqual(actual.flood, grids.map(g => floodFill(g, '1').sizes));
  assert.deepEqual(actual.shortest, shortestCases.map(c => c.answer));
});

test('published C++98 evacuation solution passes samples and deterministic generated maps', () => {
  const directory = mkdtempSync(path.join(tmpdir(), 'dukichoi-evacuation-'));
  try {
    const binary = path.join(directory, 'evacuation');
    const env = {...process.env};
    if (process.platform === 'darwin' && !env.CXX && !env.CPLUS_INCLUDE_PATH) {
      const sdk = execFileSync('xcrun', ['--show-sdk-path'], {encoding:'utf8'}).trim();
      const headers = path.join(sdk, 'usr/include/c++/v1');
      if (existsSync(headers)) env.CPLUS_INCLUDE_PATH = headers;
    }
    execFileSync(process.env.CXX || 'c++', ['-std=c++98', '-O2', path.join(repo, '_includes/solutions/poj-3057.cpp'), '-o', binary], {timeout:30000, env});
    const cases = [...evacuationCases];
    for (let i = 0; i < 50; i++) {
      const rows = Array.from({length:5}, (_,r) => Array.from({length:6}, (_,c) => (r === 0 || r === 4 || c === 0 || c === 5) ? (random(5) === 0 ? 'D' : 'X') : (random(4) === 0 ? 'X' : '.')).join(''));
      cases.push({rows, answer:solveEvacuation(rows).minimum});
    }
    const input = cases.length + '\n' + cases.map(({rows}) => `${rows.length} ${rows[0].length}\n${rows.join('\n')}`).join('\n') + '\n';
    const result = execFileSync(binary, [], {input, encoding:'utf8', timeout:10000}).trim().split('\n').map(s => s === 'impossible' ? -1 : Number(s));
    assert.deepEqual(result, cases.map(c => c.answer));
  } finally {rmSync(directory, {recursive:true, force:true});}
});
