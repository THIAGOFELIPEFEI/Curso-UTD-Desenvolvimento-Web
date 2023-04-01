


const painel = document.getElementById('painel');

let texto = "";
let texto2 = "";

let numero1 = 30, numero2 = 10;

//função com parâemetro e com retorno
function soma(variavel1,variavel2){
    return variavel1 + variavel2;
}

//função sem parâmetro e com retorno
function endereco(){
    return ("Av. beira mar 212");
}
//função sem parâmetro e sem retorno
function olaMundo(){
    console.log("Olá Mundo!");
}

olaMundo();

texto = soma(numero1,numero2);
texto2 = endereco();

const resultado = document.createTextNode(texto);
const resultado2 = document.createTextNode(texto2);
painel.appendChild(resultado);
painel.appendChild(resultado2);