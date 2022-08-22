const selectBtn = document.getElementsByClassName("select-btn");
for (let i = 0; i < selectBtn.length; i++) {
  const playerList = document.getElementById("selected-players-list");
  const noSelection = document.getElementById("no-selection");
  const button = selectBtn[i];
  // console.log(buttons);

  button.addEventListener("click", function () {
    noSelection.style.display = "none";

    // const elementLength = playerElement.parentNode.childNodes.length;
    const parentElementLength = playerList.childNodes.length;
    // console.log(parentElementLength);
    // console.log(button);

    if (parentElementLength > 4) {
      alert("You can't add more players.");
    } else {
      const playerText = button.parentNode.children[0].innerText;
      const playerElement = document.createElement("li");
      playerElement.innerText = playerText;
      playerList.append(playerElement);
      // console.log(button);
      button.setAttribute("disabled",true);
      if (button.disabled==true) {
        button.style.background = 'gray';
      }
    }
  });
}
