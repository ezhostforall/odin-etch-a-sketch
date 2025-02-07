document.addEventListener("DOMContentLoaded", function() {
    const chooseSquaresButton = document.querySelector('#choose-squares');
    const container = document.createElement('div');

    container.id = 'container';

    document.body.appendChild(container);

    chooseSquaresButton.addEventListener('click', () => {
        let noOfSquare = parseInt(prompt('How many squares do you want to create? 100 MAX'));
        if (noOfSquare > 100) {
            noOfSquare = 100;
        }
        const gridSize = noOfSquare * noOfSquare;
        const squareSize = container.clientWidth / noOfSquare;
        
        container.innerHTML = '';
        for (let i = 0; i < gridSize; i++) {
            const square = document.createElement('div');

            square.className = 'square';
            square.style.opacity = 0;
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;

            const squareHoverBackgroundStyle = () => {
                square.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
                let currentOpacity = parseFloat(square.style.opacity);
                if (currentOpacity < 1) {
                    square.style.opacity = (currentOpacity + 0.1).toString();
                }
            }

            square.style.border = '1px solid #ddd';

            container.appendChild(square);

            square.addEventListener('mouseover', squareHoverBackgroundStyle);
        }
    });
});
