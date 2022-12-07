import './style.css'
import newDeck from './newDeck.js'
import draw from './draw.js'
import shuffleDeck from './reshuffle'

const app = document.querySelector<HTMLDivElement>('#app');

app!.innerHTML = `
  <div>
    <h1>Blackjack!</h1>

    <button id="newDeck">New Deck</button>
    <button id="draw">Draw Card</button>
    <button id="shuffle">Shuffle Cards</button>
  </div>
`

function drawCards() {
  draw.cards.forEach((element: { image: any }) => {
    app!.innerHTML += `<img src="${element.image}">`
  });
}


// console.log(shuffleDeck());


document.querySelector<HTMLButtonElement>('#draw')!.addEventListener('click', drawCards);
document.querySelector<HTMLButtonElement>('#newDeck')!.addEventListener('click', newDeck);
document.querySelector<HTMLButtonElement>('#shuffle')!.addEventListener('click', shuffleDeck);