#include <algorithm>
#include <iostream>
#include <queue>
#include <string>
#include <utility>
#include <vector>
using namespace std;

struct Evacuation {
    vector<pair<int, int> > people, doors;
    vector<vector<int> > distance, edges;
    vector<int> owner, seen;
    int stamp;

    bool augment(int person) {
        for (int i = 0; i < (int)edges[person].size(); ++i) {
            int slot = edges[person][i];
            if (seen[slot] == stamp) continue;
            seen[slot] = stamp;
            if (owner[slot] == -1 || augment(owner[slot])) {
                owner[slot] = person;
                return true;
            }
        }
        return false;
    }

    bool feasible(int limit) {
        int p = people.size(), d = doors.size();
        edges.assign(p, vector<int>());
        for (int person = 0; person < p; ++person)
            for (int door = 0; door < d; ++door)
                if (distance[door][person] != -1)
                    for (int t = distance[door][person]; t <= limit; ++t)
                        edges[person].push_back((t - 1) * d + door);
        owner.assign(d * limit, -1);
        seen.assign(d * limit, 0);
        stamp = 0;
        for (int person = 0; person < p; ++person) {
            ++stamp;
            if (!augment(person)) return false;
        }
        return true;
    }

    int solve(const vector<string>& grid) {
        int h = grid.size(), w = grid[0].size();
        for (int r = 0; r < h; ++r) for (int c = 0; c < w; ++c) {
            if (grid[r][c] == '.') people.push_back(make_pair(r, c));
            if (grid[r][c] == 'D') doors.push_back(make_pair(r, c));
        }
        int p = people.size(), d = doors.size();
        if (p == 0) return 0;
        if (d == 0) return -1;
        distance.assign(d, vector<int>(p, -1));
        int dr[] = {-1, 0, 1, 0}, dc[] = {0, 1, 0, -1};
        for (int door = 0; door < d; ++door) {
            vector<vector<int> > dist(h, vector<int>(w, -1));
            queue<pair<int, int> > q;
            q.push(doors[door]);
            dist[doors[door].first][doors[door].second] = 0;
            while (!q.empty()) {
                int r = q.front().first, c = q.front().second;
                q.pop();
                for (int k = 0; k < 4; ++k) {
                    int nr = r + dr[k], nc = c + dc[k];
                    if (nr < 0 || nr >= h || nc < 0 || nc >= w) continue;
                    if (grid[nr][nc] != '.' || dist[nr][nc] != -1) continue;
                    dist[nr][nc] = dist[r][c] + 1;
                    q.push(make_pair(nr, nc));
                }
            }
            for (int person = 0; person < p; ++person)
                distance[door][person] = dist[people[person].first][people[person].second];
        }
        int farthest = 0;
        for (int person = 0; person < p; ++person) {
            int nearest = h * w + 1;
            for (int door = 0; door < d; ++door)
                if (distance[door][person] != -1)
                    nearest = min(nearest, distance[door][person]);
            if (nearest == h * w + 1) return -1;
            farthest = max(farthest, nearest);
        }
        int low = max(farthest, (p + d - 1) / d), high = farthest + p - 1;
        while (low < high) {
            int mid = low + (high - low) / 2;
            if (feasible(mid)) high = mid;
            else low = mid + 1;
        }
        return low;
    }
};

int main() {
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    int cases;
    cin >> cases;
    while (cases--) {
        int h, w;
        cin >> h >> w;
        vector<string> grid(h);
        for (int r = 0; r < h; ++r) cin >> grid[r];
        Evacuation solver;
        int answer = solver.solve(grid);
        if (answer < 0) cout << "impossible\n";
        else cout << answer << '\n';
    }
}
