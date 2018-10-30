function sumarDosNumeros(numeroUno, numeroDos) {
    var numeroUnoEsNumber = typeof numeroUno == "number"
    var numeroDosEsNumber = typeof numeroDos == "number"
    if (numeroUnoEsNumber && numeroDosEsNumber) {

    return numeroUno + numeroDos;
}
else {
    return 0;
    }
}

console.log(sumarDosNumeros('a', null));

console.log(sumarDosNumeros(1,2,3,4,5));
console.log(sumarDosNumeros(3,4));

function saludar(){
    console.log('hola');
}
console.log(saludar());
sumarNumeros(1,2,3,4,5,6,7)


function sumarNumeros(...parametros){
    console.log(parametros)

}


function saludar2(nombre, funcionMensajeria){
    var saludo =  `hola ${nombre.toUpperCase()}`;
    funcionMensajeria(saludo);
    return saludo;

}
saludar2("david", imprimirEnConsola)
function imprimirEnConsola(texto){
    console.log(texto)
}
