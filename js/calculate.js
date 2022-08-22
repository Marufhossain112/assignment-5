function perPlayer(selectedPlayersNumber) {
    const playerPrice = document.getElementById('player-price').value;
    const perPlayerTotal = selectedPlayersNumber * playerPrice; 
    return perPlayerTotal;
}
function getValueFromId(elementId) {
    const elementValueString = document.getElementById(elementId).value;
    const elementValueNumber = parseInt(elementValueString);
    return elementValueNumber;
}
