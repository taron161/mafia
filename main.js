const btn = document.querySelector('[data-play]');
let players = [];
let all;
let maf;

const createPlayer = (count) => {
  const player = document.createElement('div');
  player.classList.add('player');
  const text = document.createElement('p');
  text.innerHTML = `Игрок <span>${count}</span>`;
  const playersContainer = document.createElement('div');
  playersContainer.classList.add('player__teamates');
  for (let i = 1; i <= all; i++) {
    const playersItem = document.createElement('button');
    playersItem.textContent = i;
    playersItem.classList.add('player-item');
    playersContainer.appendChild(playersItem);
  }
  player.appendChild(text);
  player.appendChild(playersContainer);
  return player;
}

btn.addEventListener('click', () => {
  all = document.querySelector('[data-all] input').value;
  maf = document.querySelector('[data-maf] input').value;
  const ui = document.querySelector('[data-ui]');
  const gamePanel = document.querySelector('[data-game]');

  ui.style.display = 'none';
  gamePanel.style.display = 'flex';
  gamePanel.innerHTML = '';
  for (let i = 1; i <= all; i++) {
    gamePanel.appendChild(createPlayer(i));
  }
  players = gamePanel.querySelectorAll('.player-item');

  players.forEach((player) => {
    let count  = 0;
    player.addEventListener('click', () => {
      
      if (count === 0) {
        count ++;
        player.style.backgroundColor = 'tomato';
      } else if (count === 1) {
        count ++;
        player.style.backgroundColor = 'blue';
      } else {
        count = 0;
        player.style.backgroundColor = 'white';
      }
    });
  });
});
