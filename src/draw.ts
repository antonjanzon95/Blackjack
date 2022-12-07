async function drawCard() {
    return fetch('https://deckofcardsapi.com/api/deck/kivecc4vn854/draw/?count=2')
      .then((data) => data.json())
      .then((json) => json)
      .catch((err) => {
        console.error('Error drawing:', err);
        return null;
      })
  }

const draw = await drawCard();

export default draw;