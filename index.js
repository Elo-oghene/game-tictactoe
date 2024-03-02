document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".box");
    let resultParagraph = document.querySelector(".result")
    let currentPlayer = "X"; // Initial player
    let moves = 0;
    let maxMoves = 9;



    // boxes.forEach(box => {
    //     box.addEventListener("click", () => {
    //         if (!box.innerText.trim()) {
    //             box.innerText = currentPlayer;
    //             currentPlayer = currentPlayer === "X" ? "Y" : "X";
    //         }
    //     });
    // });

    // script.js

// ... (previous code)

function checkForWin() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]             
    ];

    for (const combo of winningCombinations) {
        const [a, b, c] = combo;
        if (boxes[a].innerText && boxes[a].innerText === boxes[b].innerText && boxes[a].innerText === boxes[c].innerText) {
            boxes[a].classList.add("winning-box");
            boxes[b].classList.add("winning-box");
            boxes[c].classList.add("winning-box");
            resultParagraph.innerText = `${currentPlayer} wins!`;
            return true;
        }
    }

    return false;
}

function checkForTie() {
    return moves === maxMoves;
}

function handleClick(event) {
    let box = event.target;

    if (box.innerText === "") {
        box.innerText = currentPlayer;
        moves++;

        if (checkForWin()) {
        } else if (checkForTie()) {
            resultParagraph.innerText = "It's a tie!";
        } else {
            currentPlayer = currentPlayer === 'X' ? 'Y' : 'X';
        }
    }
}

boxes.forEach(box => box.addEventListener('click', handleClick));
});