
//1 Leer el archivo
//2.2 Concatenar el contenido
//2.2 Creamos el archivo
const fs = require('fs');

let contenidoFinal = 'Inicial'
function appendFile(nombreArchivo, contenidoArchivo, callback){

    fs.readFile(nombreArchivo,
        'utf-8',
        (error, contenidoLeido) =>{
        if(error){
            //escribir el archivo
            const contenido = contenidoArchivo;
            fs.writeFile(nombreArchivo, contenido, (err) =>{
                if(err){
                    callback(error)
                }
                else {
                callback(undefined,contenido)                }
            })
        }
        else{
            //concatenar el archivo
            const contenido = contenidoLeido + contenidoArchivo;
            fs.writeFile(nombreArchivo, contenido, (err) =>{
                if(err){
                    callback(error)
                }
                else {
                    callback(undefined,contenido)
                }
            })
        }
    })
}

appendFile('07-texto.txt', '\nadios', (error, contenidoTexto) =>{
    console.log(contenidoTexto);
    if(error){
        console.log(error);

    }
    else {
        contenidoTexto
    }
});
console.log(contenidoFinal)

//aceptar un arreglo de strings ['a','b'.'c']
//crear un archivo por cada uno de ellos
// primera iteración : 0-a.txt; 'a'
//2da : 1-b.txt-- 'b'
//3ra: 2-c.txt --'c'

const respuesta = {
    nombreArchivo:'',
    contenidoArchivo:'a',
    error:undefined

}

//[respuesta,respuesta,respuesta]

function ejercicio(arregloStrings,
                   callback){
    const arregloRespuestas = [];
    arregloStrings.forEach(
        (string, indice) =>{
        const nombreArchivo = `${indice}-${string}.txt`;
        const contenidoArchivo = string;
        fs.writeFile(nombreArchivo, contenidoArchivo, (err)=>{
            const respuesta = {
                nombreArchivo:nombreArchivo,
                contenidoArchivo:'contenidoArchivo',
                error:err

            };
            arregloRespuestas.push(respuesta);
            const terminoElArreglo = arregloStrings.length == arregloRespuestas.length;
            if(terminoElArreglo){
                callback(arregloRespuestas);
            }
        })

        })
}
ejercicio(['a','b','c'], (arregloRespuestas) =>{
    console.log(arregloRespuestas)
})