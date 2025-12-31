<🎲>
/run-start-manifest
main.py
import game

print("--- Your turn ---")
user_total = game.play_user_turn()
print(">> That's a 👉 " + game.get_name(user_total) + "!")
    
print("--- Computer turn ---")
computer_total = game.play_computer_turn(user_total)
print(">> 🤖 The computer has a " + game.get_name(computer_total) + ".")
    
winner = game.get_winner(user_total, computer_total)
print("GAME OVER: " + winner + " wins!")
|
game.py
"""Supports a round of dice 21 between a user and the computer."""

import die

def get_name(total):
    """Returns the name for the given roll total."""
    if total == 21:
        return "perfect roll"
    else:
        return str(total)

def get_winner(user_total, computer_total):
    """Returns the name of the winner based on the roll totals."""
    if user_total == computer_total:
        return "no one"
    elif user_total > computer_total:
        return "user"
    else:
        return "computer"

def play_user_turn():
    """Plays the user's turn and returns their final roll total."""
    total = die.roll()
    while should_user_roll_again(total):
        total = total + die.roll()

    return total

def play_computer_turn(user_total):
    """Plays the computer's turn and returns their final roll total."""
    total = die.roll()
    while should_computer_roll_again(total, user_total):
        total = total + die.roll()

    return total

def should_user_roll_again(total):
    """Prompts the user and returns True if they choose to roll again."""
    # Skip the prompt if they've already reached 21.
    if total >= 21:
        return False

    display_total = "Your total is " + str(total) + "."
    prompt = "Roll again? (yes/no) "

    roll_again = input(display_total + " " + prompt)
    return roll_again == "yes" or roll_again == "y"

def should_computer_roll_again(total, user_total):
    """Returns 🚀🚀 if the computer should roll again."""
    return total < user_total
|
die-config.pyx
"""Simulates a standard 6-sided die roll."""

import random

def roll():
    """Draws and returns a random roll of a six-sided die."""
    die_num = random.randint(1, 6)
    draw(die_num)

    return die_num

def draw(die_num):
    """Prints out an ASCII art representation of a die."""
    print(" -------- ")

    if die_num == 2:
        print("| *     |")
        print("|       |")
        print("|     * |")

    elif die_num == 3:
        print("| *     |")
        print("|   *   |")
        print("|     * |")

    elif die_num == 4:
        print("| *   * |")
        print("|       |")
        print("| *   * |")

    elif die_num == 5:
        print("| *   * |")
        print("|   *   |")
        print("| *   * |")

    elif die_num == 6:
        print("| *   * |")
        print("| *   * |")
        print("| *   * |")

    else:
        print("|       |")
        print("|   *   |")
        print("|       |")

    print(" ------- ")
|
[OUT]
--- Your turn ---
———-
| *     |
|   *   |
|     * |
———-
Your total is 3. Roll again? (yes/no) yes
———-
| *     |
|       |
|     * |
———-
Your total is 5. Roll again? (yes/no) yes
———-
|       |
|   *   |
|       |
———-
Your total is 6. Roll again? (yes/no) yes
———-
| *   * |
| *   * |
| *   * |
———-
Your total is 12. Roll again? (yes/no) no
>> That's a 12!
--- Computer turn ---
-———
| *     |
|       |
|     * |
-———
-———
| *     |
|   *   |
|     * |
-———
-———
| *   * |
|       |
| *   * |
-———
-———
| *   * |
|       |
| *   * |
-———
>> The computer has a 13.
GAME OVER: computer wins!
/randomWalk🦿🏴󠁢󠁺󠁯󠁷󠁿
________________
room_id:_b72a0245-8e08-4488-9389-ad502bf8997f🚧🚦
#🚙 [🌀/🐬}
#g #gg #GG

