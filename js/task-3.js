document.querySelector('#name-input').addEventListener('input', handleOutput);

function handleOutput() {
    const nameInput = document.querySelector('#name-input');
    const nameOutput = document.querySelector('#name-output');
    const trimmedValue = nameInput.value.trim();
    nameOutput.textContent = trimmedValue || "Anonymous";
}















