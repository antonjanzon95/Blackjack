function newDeck() {
  fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then((data) => data.json())
    .then((json) => {
      console.log(json)
    })
    .catch((err) => {
      console.error('Error fetching:', err)
    })
}

export default newDeck;