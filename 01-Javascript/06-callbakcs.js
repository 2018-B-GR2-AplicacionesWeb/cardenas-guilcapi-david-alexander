const fs = require('fs')
console.log('Inicio');



fs.readFile(
    '06-texto.txt',
    'utf-8',
    (error, textoLeidoDelArchivo)=>{
if(error) {
    try {
        throw new Error(error)
    }
    catch (e) {
console.log(e)
    }
}else {
    fs.writeFile('06-texto.txt',
        textoLeidoDelArchivo + 'Mundo',
        (err)=> {
        if (err) console.log('Error')
        console.log('Archivo actualizado')

    })
}});


console.log('Fin');
