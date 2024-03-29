let rows = 16; 
let columns = 16;
const gridContainer = document.querySelector('#container');
const resetButton = document.querySelector('#reset-button');
createGrid();

function createGrid() {
  resetButton.addEventListener('click', resetGame);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const gridItem = document.createElement('div');
      gridItem.className = 'grid-item';
      gridItem.style.flex = `${100 / columns}%`;
      gridContainer.appendChild(gridItem);
      gridItem.addEventListener('mouseover', () => {
        randomColor = randomRgbColor();
        gridItem.style.backgroundColor = randomColor;
        gridItem.style.opacity = '0.6';
      });
    }
  }
};

// function to reset game with new grid size
function resetGame() {
  while (gridContainer.hasChildNodes()) {
    gridContainer.removeChild(gridContainer.children[0]);
  }
  let newSize = prompt('What size grid do you want next?', '');
  rows = newSize;
  columns = newSize;
  createGrid();
};

function randomRgbColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  return "rgb(" + x + "," + y + "," + z + ")";
};
