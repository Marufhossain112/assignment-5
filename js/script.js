const selectBtn = document.getElementsByClassName("select-btn");
for (let i = 0; i < selectBtn.length; i++) {
  const playerList = document.getElementById("selected-players-list");
  const noSelection = document.getElementById("no-selection");
  const buttons = selectBtn[i];
  // console.log(buttons);

  buttons.addEventListener("click", function () {
    noSelection.style.display = "none";
    const playerText = buttons.parentNode.children[0].innerText;
    const playerElement = document.createElement("li");
    playerElement.innerText = playerText;
    playerList.append(playerElement);

    const elementLength = playerElement.parentNode.children.length;
    // console.log(elementLength);
    if (elementLength > 7) {
      alert("You can't add more players.");
    playerElement.innerText = "";
      return alert ("I am gone");
    } 
  });
}
