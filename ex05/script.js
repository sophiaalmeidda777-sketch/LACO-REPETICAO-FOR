let num1 = Number(prompt("Digite um número:"));
let num2 = Number(prompt("Digite outro número:"));
let resultado = "";
for (let i = num1; i <= num2; i++) {
    if (i % 2 === 0) {
    resultado += i + " ";
}
}

alert("Números pares: " + resultado);