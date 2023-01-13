const btn = document.querySelector('button');

function calcular() {
    const weight = document.querySelector('#weight').value;
    const height = document.querySelector('#height').value;
    const resultado = document.querySelector('span');
    let result = weight / (height * height);
    resultado.textContent = `Seu IMC é: ${result.toFixed(2)}`;
}

btn.addEventListener('click', calcular);