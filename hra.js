let currentPlayer = 'circle';
const imgPlayer = document.querySelector('.game__player--symbol');

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
  .addEventListener('click', addSymbol);

/* --- GAME BONUS --- */
