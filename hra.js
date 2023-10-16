import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';
let currentPlayer = 'circle';
const imgPlayer = document.querySelector('.game__player--symbol');
const buttons = document.querySelectorAll('.game-panel__buton');

const addSymbol = (event) => {
  if (currentPlayer === 'circle') {
    currentPlayer = 'cross';
    imgPlayer.src = 'img/circle.svg';
    event.target.classList.add('game-panel__buton--circle');
    event.target.disabled = true;
  } else {
    currentPlayer = 'circle';
    event.target.classList.add('game-panel__buton--cross');
    imgPlayer.src = 'img/cross.svg';
    event.target.disabled = true;
  }
};

/* --- HERNÍ POLE --- */

const herniPole = Array.from(buttons).map((button) => {
  if (button.classList.contains('game-panel__buton--circle')) {
    return 'o';
  } else if (button.classList.contains('game-panel__buton--cross')) {
    return 'x';
  }
  return '_';
});

const vitez = findWinner(herniPole);
if (vitez === 'o' || vitez === 'x') {
  const winnerIs = () => {
    alert(`Vyhrál hráč se symbolem ${vitez}.`);
    window.location.reload();
  };
  setTimeout(winnerIs, 500);
} else if (vitez === 'tie') {
  const tieIs = () => {
    alert(`Remíza. Musíte začít znovu`);
    window.location.reload();
  };
  setTimeout(tieIs, 500);
}

buttons.forEach((button) => {
  button.addEventListener('click', addSymbol);
});

/* --- RESTART --- */
const restart = (event) => {
  const alert = confirm('Opravdu chceš začít znovu?');
  if (alert === false) {
    event.preventDefault();
  }
};

document
  .querySelector('.game__buttons--restart')
  .addEventListener('click', restart);

/* --- odložené ---
document
  .querySelector('button:nth-child(1)')
  .addEventListener('click', addSymbol);

document
  .querySelector('button:nth-child(2)')
  .addEventListener('click', addSymbol);

document
  .querySelector('button:nth-child(3)')
  .addEventListener('click', addSymbol);

document
  .querySelector('button:nth-child(4)')
  .addEventListener('click', addSymbol);

document
  .querySelector('button:nth-child(5)')
  .addEventListener('click', addSymbol);

document
  .querySelector('button:nth-child(6)')
  .addEventListener('click', addSymbol);

document
  .querySelector('button:nth-child(7)')
  .addEventListener('click', addSymbol);

document
  .querySelector('button:nth-child(8)')
  .addEventListener('click', addSymbol);

document
  .querySelector('button:nth-child(9)')
  .addEventListener('click', addSymbol);

document
  .querySelector('button:nth-child(10)')
  .addEventListener('click', addSymbol);*/
