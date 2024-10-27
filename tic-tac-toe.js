//PART ONE - Layout the Board
document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board div");
    let currentPlayer = "X";
    let isGameOver = false;
    const status = document.getElementById("status");
    
    const newGameButton = document.querySelector(".btn");

    //PART TWO - Add an X or O to a square when clicked
    function handleSquareClick() {
        //PART SIX: Disallow Cheating
        if (!isGameOver && !this.classList.contains("X") && !this.classList.contains("O")) {
            this.classList.add(currentPlayer);
            this.textContent = currentPlayer;
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            checkWinner();
        }
    }
    //PART FOUR - Check for the winner and update the status
    function checkWinner() {
        const winningCombination = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (const combination of winningCombination) {
            const [a, b, c] = combination;
            if (
                squares[a].classList.contains("X") &&
                squares[b].classList.contains("X") &&
                squares[c].classList.contains("X")
            ) {
                isGameOver = true;
                status.classList.add("you-won");
                status.textContent = "Congratulations! X is the Winner!";
                return;
            } else if (
                squares[a].classList.contains("O") &&
                squares[b].classList.contains("O") &&
                squares[c].classList.contains("O")
            ) {
                isGameOver = true;
                status.classList.add("you-won");
                status.textContent = "Congratulations! O is the Winner!";
                return;
            }
        }
    }
    //PART THREE - Change the style when you move your mouse over a square
    function handleMouseOver() {
        this.classList.add("hover");
    }

    function handleMouseLeave() {
        this.classList.remove("hover");
    }

    //PART FIVE - Restart the game
    function resetGame() {
        squares.forEach((square) => {
            square.classList.remove("X", "O");
            square.textContent = "";
        });

        currentPlayer = "X";
        isGameOver = false;
        status.classList.remove("you-won");
        status.textContent = "Move your mouse over a square and click to play an X or an O.";
    }

    squares.forEach((square) => {
        square.addEventListener("mouseover", handleMouseOver);
        square.addEventListener("mouseleave", handleMouseLeave);
    });

    squares.forEach((square) => {
        square.classList.add("square");
        square.addEventListener("click", handleSquareClick);
    });

    newGameButton.addEventListener("click", resetGame);
});