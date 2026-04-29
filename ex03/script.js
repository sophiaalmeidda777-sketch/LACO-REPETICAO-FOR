let  num1 = Number(prompt("Digite seu número"));
let mensagem = "";
for (let i = 1; i <= 10; i++){
    let resultado = num1 * i;
    mensagem += num1 + " x " + i + " = " + resultado + "\n";
}
alert(mensagem);