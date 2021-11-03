const textNumber = document.getElementById('text-number');
const button = document.getElementById('button1');

const addNumber = () => {
    textNumber.innerHTML = Number(textNumber.innerHTML) + 1;
    textNumber.style.color = 'blue';
};

// button.onclick = addNumber;
