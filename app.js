const container = document.querySelector('.container');
const btnBlack = document.createElement('button');
const btnGray = document.createElement('button');
const btnRGB = document.createElement('button');
const btnSize = document.createElement('button');
const btnReset = document.createElement('button');
const btnContainer = document.querySelector('.buttons');


function newGrid(col, row) {
    for(let i = 0; i < (col * row); i++) {
        const div = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${row}, 1fr)`;
        container.appendChild(div).classList.add('grid');
    }
}

newGrid(16,16);


function gray() {
    const grid = container.querySelectorAll('.grid');
    btnGray.textContent = 'Gray';
    btnGray.addEventListener('click', () => {
        grid.forEach(grid => grid.addEventListener('mouseover', () => {
            let rand = Math.floor(Math.random() * 255);
            grid.style.background = `rgb(${rand},${rand},${rand})`;
        }));
    });

    btnContainer.appendChild(btnGray).classList.add('btn');
};
gray();

function black() {
    const grid = container.querySelectorAll('.grid');
    btnBlack.textContent = 'Black';
    btnBlack.addEventListener('click', () => {
        grid.forEach(grid => grid.addEventListener('mouseover', () => {
            grid.style.background = `black`;
        }));
    });

    btnContainer.appendChild(btnBlack).classList.add('btn');
};
black();

function rgb() {
    const grid = container.querySelectorAll('.grid');
    btnRGB.textContent = 'RGB';
    btnRGB.addEventListener('click', () => {
        grid.forEach(grid => grid.addEventListener('mouseover', () => {
            let R = Math.floor(Math.random() * 255);
            let G = Math.floor(Math.random() * 255);
            let B = Math.floor(Math.random() * 255);
                grid.style.background = `rgb(${R},${G},${B})`;
        }));
    });

    btnContainer.appendChild(btnRGB).classList.add('btn');
};
rgb();

function clearGrid() {
    const grid = container.querySelectorAll('.grid');
    grid.forEach(grid => grid.remove());
};    

 
function resize() {
    btnReset.textContent = 'Reset';
    btnReset.addEventListener('click', () => {

    let user = prompt('What size grid? (enter a number between 1 and 100)');
    if (user > 0 && user < 101 ){
        clearGrid();
        newGrid(user, user);
        gray();
        black();
        rgb();
        } else {
            clearGrid();
            newGrid(16,16);
            gray();
            black();
            rgb();
    
            }   
    })
    btnContainer.appendChild(btnReset).classList.add('btn');
};
resize();