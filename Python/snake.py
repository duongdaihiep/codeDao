import pygame
import sys
import random

# Khai báo các biến cần thiết
pygame.init()
WIDTH, HEIGHT = 400, 400
GRID_SIZE = 20
FPS = 10

# Màu sắc
WHITE = (255, 255, 255)
RED = (255, 0, 0)

# Khởi tạo cửa sổ
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Snake Game")

# Khởi tạo rắn
snake = [(100, 100), (90, 100), (80, 100)]
snake_direction = (1, 0)

# Khởi tạo thức ăn
food = (random.randint(0, (WIDTH - GRID_SIZE) // GRID_SIZE) * GRID_SIZE,
        random.randint(0, (HEIGHT - GRID_SIZE) // GRID_SIZE) * GRID_SIZE)

# Vòng lặp chính
clock = pygame.time.Clock()

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

        # Xử lý sự kiện phím
        elif event.type == pygame.KEYDOWN:
            if event.key == pygame.K_UP and snake_direction != (0, 1):
                snake_direction = (0, -1)
            elif event.key == pygame.K_DOWN and snake_direction != (0, -1):
                snake_direction = (0, 1)
            elif event.key == pygame.K_LEFT and snake_direction != (1, 0):
                snake_direction = (-1, 0)
            elif event.key == pygame.K_RIGHT and snake_direction != (-1, 0):
                snake_direction = (1, 0)

    # Cập nhật vị trí của rắn
    new_head = ((snake[0][0] + snake_direction[0] * GRID_SIZE) % WIDTH,
                (snake[0][1] + snake_direction[1] * GRID_SIZE) % HEIGHT)

    # Kiểm tra va chạm
    if new_head in snake[1:]:
        pygame.quit()
        sys.exit()

    snake.insert(0, new_head)

    # Kiểm tra rắn ăn thức ăn
    if new_head == food:
        food = (random.randint(0, (WIDTH - GRID_SIZE) // GRID_SIZE) * GRID_SIZE,
                random.randint(0, (HEIGHT - GRID_SIZE) // GRID_SIZE) * GRID_SIZE)
    else:
        snake.pop()

    # Vẽ trạng thái mới
    screen.fill(WHITE)
    for segment in snake:
        pygame.draw.rect(screen, RED, (*segment, GRID_SIZE, GRID_SIZE))
    pygame.draw.rect(screen, RED, (*food, GRID_SIZE, GRID_SIZE))

    # Cập nhật màn hình
    pygame.display.flip()

    # Điều chỉnh tốc độ
    clock.tick(FPS)
