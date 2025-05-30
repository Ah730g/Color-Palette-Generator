let generateButton = document.getElementById('generate-btn');
let ColorPaletteContainer = document.querySelector('.color-palette');
let colorBoxes = document.querySelectorAll('.color-box');

generateButton.addEventListener('click', generateColorPalette);
ColorPaletteContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-copy')) {
    let hexText = e.target.previousElementSibling.textContent;
    navigator.clipboard.writeText(hexText).then(successCopy(e.target));
  } else if (e.target.classList.contains('color')) {
    let hexText = e.target.nextElementSibling.querySelector('span').textContent;
    navigator.clipboard
      .writeText(hexText)
      .then(successCopy(e.target.nextElementSibling.querySelector('.fa-copy')));
  }
});

function generateColorPalette() {
  let colors = [];

  for (let i = 0; i < 5; i++) {
    colors.push(generateColor());
  }
  updateUl(colors);
}
function generateColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function updateUl(colors) {
  colorBoxes.forEach((box, index) => {
    box.querySelector('.color').style.backgroundColor = colors[index];
    box.querySelector('.color-info span').textContent = colors[index];
  });
}
function successCopy(copyBtn) {
  copyBtn.classList.remove('fa-solid', 'fa-copy');
  copyBtn.classList.add('fas', 'fa-check');

  copyBtn.style.color = '#48bb78';

  setTimeout(() => {
    copyBtn.classList.remove('fas', 'fa-check');
    copyBtn.classList.add('fa-solid', 'fa-copy');
    copyBtn.style.color = '';
  }, 1500);
}

generateColorPalette();
