from collections import deque


def solution(maps):
    rows, cols = len(maps), len(maps[0])
    if maps[0][0] == 0 or maps[-1][-1] == 0:
        return -1
    distance = [[-1] * cols for _ in range(rows)]
    distance[0][0] = 1
    queue = deque([(0, 0)])
    while queue:
        r, c = queue.popleft()
        if r == rows - 1 and c == cols - 1:
            return distance[r][c]
        for dr, dc in ((-1, 0), (0, 1), (1, 0), (0, -1)):
            nr, nc = r + dr, c + dc
            if (0 <= nr < rows and 0 <= nc < cols
                    and maps[nr][nc] == 1 and distance[nr][nc] == -1):
                distance[nr][nc] = distance[r][c] + 1
                queue.append((nr, nc))
    return -1
