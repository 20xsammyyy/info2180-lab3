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
    //PART THREE - Change the style when you move your mouse over a square
    function handleMouseOver() {
        this.classList.add("hover");
    }

    function handleMouseLeave() {
        this.classList.remove("hover");
    }
    });