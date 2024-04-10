const diceElement = document.getElementById("dice");
const rollButton = document.getElementById("rollDice");
const rollHistory = document.getElementById("rollHistory");

let rollHistoryList = [];

function rollDice () {
    result = Math.floor(Math.random()*6) + 1;
    face = getDiceFace(result);

    rollHistoryList.push(face);
    updateRollHistoryList();
    return face;
}

function updateRollHistoryList () {
    rollHistory.innerHTML = "";

    for (let i = 0; i < rollHistoryList.length; i++) {
        listElement = document.createElement("li");
        listElement.innerHTML = `Roll ${i+1}: <span class="rollHistoryDice"> ${rollHistoryList[i]} </span>`;
        rollHistory.appendChild(listElement);
    }
}

function getDiceFace (result) {
    switch (result) {
        case 1:
            return "⚀";
        case 2:
            return "⚁";
        case 3:
            return "⚂";
        case 4:
            return "⚃";
        case 5:
            return "⚄";
        case 6:
            return "⚅";
        default:
            "";
            break;
    }
}

rollButton.addEventListener(("click") , (e) => {
    e.preventDefault();
    rollButton.setAttribute("disabled", "disabled");
    diceElement.classList.add("roll-Animation");
    
    setTimeout(() => {
        roll = rollDice();
        diceElement.classList.remove("roll-Animation");
        diceElement.innerText = roll;
        rollButton.removeAttribute("disabled");
    }, 1100);
    
});