function perPlayer(selectedPlayersNumber) {
    const playerPrice = document.getElementById('player-price').value;
    const perPlayerTotal = selectedPlayersNumber * playerPrice; 
    return perPlayerTotal;
}
