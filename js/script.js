const selectBtn1 = document.getElementsByClassName("select-btn");
for (const button of selectBtn1) {
  const playerList = document.getElementById("selected-players-list");
  const noSelection = document.getElementById("no-selection");
  button.addEventListener("click", function () {
    noSelection.style.display = "none";
    const parentElementLength = playerList.childNodes.length;
    if (parentElementLength > 4) {
      alert("You can't add more players.");
    } else {
      const playerText = button.parentNode.children[0].innerText;
      const playerElement = document.createElement("li");
      playerElement.innerText = playerText;
      playerList.append(playerElement);
      button.setAttribute("disabled", true);
      if (button.disabled == true) {
        button.style.background = "gray";
      }
    }
    const selectedPlayersNumber = playerList.childNodes.length;
    const calculateBtn = document.getElementById("calculate-btn");
    const playerExpenses = document.getElementById("player-expenses");
    calculateBtn.addEventListener("click", function (event) {
      event.preventDefault();
      const playerExpensesAmount = perPlayer(selectedPlayersNumber);
      playerExpenses.innerText = playerExpensesAmount;
    });
  });
}
