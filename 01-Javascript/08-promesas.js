
const fs = require ('fs');
/*
const promesa = (nombreArchivo) =>{
    return new Promise(
    (resolve, reject) => {
       fs.readFile(
           nombreArchivo,'utf-8',
           (error, contenidoArchivo)=>{
               if(error){
                   reject(error)
               }
               else {
                   resolve(contenidoArchivo)
               }
           }
       );
    }
)};

console.log(promesa);

promesa('07-texto.txt')
    .then(
        (contenido) => {
            console.log('ok', contenido)
            return promesaEscritura('07-text.txt', contenido + 'Nuevo Contenido');
        }
    )
    .then((contenidoCompleto) =>{
        console.log(contenidoCompleto)
    })
    .catch(
        (error) => {
            console.log('mal', error)
        }
    );


const promesaEscritura = (nombreArchivo,
                          contenidoArchivo) =>{
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                nombreArchivo,contenidoArchivo,
                (error)=>{
                    if(error){
                        reject(error)
                    }
                    else {
                        resolve(contenidoArchivo)
                    }
                }
            );
        }
    )};

const appendFile = (nombreArchivo, contenidoArchivo) => {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                nombreArchivo,
                'utf-8',
                (error, contenidoLeidoDelArchivo) => {
                    if (error) {
                        fs.writeFile(
                            nombreArchivo,
                            contenidoLeidoDelArchivo,
                            (err) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    // Devolver el contenido
                                    resolve(contenidoLeidoDelArchivo)
                                }
                            }
                        );
                    } else {
                        fs.writeFile(
                            nombreArchivo,
                            contenidoLeidoDelArchivo,
                            (err) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    // Devolver el contenido
                                    resolve(contenidoLeidoDelArchivo + 'nuevo contenido')
                                }
                            }
                        )
                    }
                }
            );
        }
    )

}


appendFile('09-texto.txt', 'nuevoContenido' )
    .then(
        (contenido) => {
            console.log(contenido);
            return promesaEscritura('09-texto.txt', contenido + 'Adios amigos');
        }
    )
    .catch(
        (error) => {
            console.log('Catch',error);
        }
    );
*/
const ejercicio = (arreglo) =>{
    const arregloRespuestas = [];
    return new Promise ((resolve, reject )=>{
        arreglo.forEach(
            (string, indice)=>{
            const nombreArchivo = `${indice}-${string}.txt`;
            const contenidoArchivo = string;
            fs.writeFile(nombreArchivo, contenidoArchivo, (err)=>{

                if(err){
                    reject(err)
                }
                else{
                    const respuesta = {
                        nombreArchivo:nombreArchivo,
                        contenidoArchivo:contenidoArchivo,
                        error:err

                    };
                    arregloRespuestas.push(respuesta);
                    resolve(arregloRespuestas)
                }

            })
        });

    })

}



ejercicio( ['h','i','j','k'])
    .then(
        (arregloRespuestas) => {
            console.log(arregloRespuestas);
            return ejercicio(['h','i','j','k']);
        }
    )
    .catch(
        (error) => {
            console.log('Catch',error);
        }
    );