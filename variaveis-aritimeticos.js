let x = 10, y = 2;

let resultado = x + y;
//resultadoFinal = "A soma de " + x + " e " + y + " é " + resultado;
console.log(`A soma de ${x} e ${y} é ${resultado}`); //A soma de 10 e 2 é 12

resultado = x - y;
//resultadoFinal = "A subtração de " + x + " e " + y + " é " + resultado;
console.log(`A subtração de ${x} e ${y} é ${resultado}`); //8

resultado = x * y;
//resultadoFinal = "A multiplicação de " + x + " e " + y + " é " + resultado;
console.log(`A multiplicação de ${x} e ${y} é ${resultado}`); //20

resultado = x / y;
//resultadoFinal = "A divisão de " + x + " e " + y + " é " + resultado;
console.log(`A divisão de ${x} e ${y} é ${resultado}`); //5

// += -= *= /= %resto x++ ++x
{
    let x = 10;
    let y = x++;
    let z = ++x;
    console.log("X: ", x);
    console.log("Y: ", y);
    console.log("Z: ", z);
}