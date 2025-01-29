const btn = document.querySelector('[data-play]');

btn.addEventListener('click', () => {
  const all = document.querySelector('[data-all] input').value;
  const maf = document.querySelector('[data-maf] input').value;
  const ui = document.querySelector('[data-ui]');
  const gamePanel = document.querySelector('[data-game]');

  ui.style.display = 'none';
  gamePanel.style.display = 'block';
});