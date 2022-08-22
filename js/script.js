// get all buttons
const selectBtn = document.getElementsByClassName("select-btn");
for (const button of selectBtn) {
  const noSelection = document.getElementById("no-selection");
  const playerList = document.getElementById("selected-players-list");

  button.addEventListener("click", function () {
    noSelection.style.display = "none";
    const parentElementLength = playerList.childNodes.length;
    // if you try to add more than five players it will show an error
    if (parentElementLength > 4) {
      alert("You can't add more players.");
    } else {
      const playerText = button.parentNode.children[0].innerText;
      const playerElement = document.createElement("li");
      playerElement.innerText = playerText;
      playerList.append(playerElement);
      // make button disabled after selecting and change the disabled button color
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
      // calculate player expenses
      const playerExpensesAmount = perPlayer(selectedPlayersNumber);
      playerExpenses.innerText = playerExpensesAmount;
      const totalCalculateBtn = document.getElementById("total-calculate-btn");
      const totalExpensesText = document.getElementById("total-expenses");
      totalCalculateBtn.addEventListener("click", function (event) {
        event.preventDefault();
        // calculate manager expenses
        const managerPrice = getValueFromId("manager-price");
        // calculate coach expenses
        const coachPrice = getValueFromId("coach-price");
        // total calculation of expenses
        const totalExpenses = playerExpensesAmount + managerPrice + coachPrice;
        totalExpensesText.innerText = totalExpenses;
      });
    });
  });
}
