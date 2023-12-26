#lỗi
def print_board(board):
    for row in board:
        print(" ".join(row))
    print()

def check_winner(board, player):
    # Kiểm tra hàng và cột
    for i in range(3):
        if all(board[i][j] == player for j in range(3)) or all(board[j][i] == player for j in range(3)):
            return True
    # Kiểm tra đường chéo
    if all(board[i][i] == player for i in range(3)) or all(board[i][2 - i] == player for i in range(3)):
        return True
    return False

def is_board_full(board):
    return all(board[i][j] != ' ' for i in range(3) for j in range(3))

def caro_game():
    board = [[' ' for _ in range(3)] for _ in range(3)]
    players = ['X', 'O']
    turn = 0

    while True:
        print_board(board)
        player = players[turn % 2]
        move = input(f"Player {player}, enter your move (row col): ").split()

        if len(move) != 2 or not move[0].isdigit() or not move[1].isdigit():
            print("Invalid input. Please enter row and column as numbers.")
            continue

        row, col = map(int, move)

        if 0 <= row < 3 and 0 <= col < 3 and board[row][col] == ' ':
            board[row][col] = player
            if check_winner(board, player):
                print_board(board)
                print(f"Player {player} wins!")
                break
            elif is_board_full(board):
                print_board(board)
                print("It's a tie!")
                break
            turn += 1
        else:
            print("Invalid move. Please try again.")

if __name__ == "__main__":
    caro_game()
