import sys


def component_sizes(grid):
    n = len(grid)
    seen = [[False] * n for _ in range(n)]
    sizes = []
    for r in range(n):
        for c in range(n):
            if grid[r][c] != '1' or seen[r][c]:
                continue
            stack = [(r, c)]
            seen[r][c] = True
            size = 0
            while stack:
                y, x = stack.pop()
                size += 1
                for dy, dx in ((-1, 0), (0, 1), (1, 0), (0, -1)):
                    ny, nx = y + dy, x + dx
                    if (0 <= ny < n and 0 <= nx < n
                            and grid[ny][nx] == '1' and not seen[ny][nx]):
                        seen[ny][nx] = True
                        stack.append((ny, nx))
            sizes.append(size)
    return sorted(sizes)


if __name__ == '__main__':
    n = int(sys.stdin.readline())
    grid = [sys.stdin.readline().strip() for _ in range(n)]
    sizes = component_sizes(grid)
    print(len(sizes))
    print(*sizes, sep='\n')
