async function shuffleDeck() {
  fetch('https://deckofcardsapi.com/api/deck/kivecc4vn854/shuffle/')
  .then((data) => data.json())
  .then((json) => {
    console.log(json)
  })
  .catch ((err) => {
    console.error('Error reshuffling:', err);
  })
}

export default shuffleDeck;