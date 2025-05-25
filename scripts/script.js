const container = document.getElementById('grid-container');
const button = document.getElementById('resize-button');

function createGrid(size) {
    container.innerHTML = ''; // limpa grade antiga
    const squareSize = 600 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });

        container.appendChild(square);
    }
}

button.addEventListener('click', () => {
    let newSize = prompt('Tamanho da grade (máximo 100):');
    newSize = parseInt(newSize);
    if (newSize && newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert('Por favor, digite um número entre 1 e 100.');
    }
});

// Grade inicial
createGrid(16);
