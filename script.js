

const modeToggleBtn = document.getElementById('mode-toggle');
const container = document.querySelector('.container');

modeToggleBtn.addEventListener('click', () => {
  container.classList.toggle('dark-mode');
});

