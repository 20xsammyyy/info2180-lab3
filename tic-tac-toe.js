//PART ONE - Layout the Board
document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#game-board div");

    squares.forEach(square => {
        square.classList.add("square");
    });
});