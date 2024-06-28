function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

    const input = document.querySelector('#controls input');
    const createBtn = document.querySelector('[data-create]');
    const destroyBtn = document.querySelector('[data-destroy]');
    const boxesContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', handleClick);

function handleClick() {
      const amount = Number(input.value);
      if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
        input.value = '';
      }
}
    
    function createBoxes(amount) {
      const fragment = document.createDocumentFragment();
      
      let size = 30;

      for (let i = 0; i < amount; i += 1) {
        const divBox = document.createElement('div');
        divBox.style.width = `${size}px`;
        divBox.style.height = `${size}px`;
        divBox.style.backgroundColor = getRandomHexColor();
        fragment.appendChild(divBox);
        size += 10;
      }
      boxesContainer.appendChild(fragment);
    }

    destroyBtn.addEventListener('click', destroyBoxes);

    function destroyBoxes() {
      boxesContainer.innerHTML = '';
    }
