var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const inquirer = require('inquirer');
const fs = require('fs');
const rxjs = require('rxjs');
const mergeMap = require('rxjs/operators').mergeMap;
const map = require('rxjs/operators').map;
const preguntaMenu = {
    type: 'list',
    name: 'opcionMenu',
    message: 'Que quieres hacer',
    choices: [
        'Crear',
        'Borrar',
        'Buscar',
        'Actualizar',
    ]
};
const preguntaUsuario = [
    {
        type: 'input',
        name: 'id',
        message: 'Cual es tu id'
    },
    {
        type: 'input',
        name: 'nombre',
        message: 'Cual es tu nombre'
    },
];
const preguntaUsuarioBusquedaPorNombre = [
    {
        type: 'input',
        name: 'nombre',
        message: 'Escribe el nombre del usuario a buscar'
    }
];
const preguntaUsuarioNuevoNombre = [
    {
        type: 'input',
        name: 'nombre',
        message: 'Escribe tu nuevo nombre'
    }
];
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Empezo');
        inicializarBase()
            .subscribe((respuesta) => {
            console.log(respuesta);
        }, (error) => {
        }, () => {
        });
        try {
            yield inicializarBase();
            const respuesta = yield inquirer.prompt(preguntaMenu);
            switch (respuesta.opcionMenu) {
                case 'Crear':
                    const respuestaUsuario = yield inquirer.prompt(preguntaUsuario);
                    yield anadirUsuario(respuestaUsuario);
                    main();
                    break;
                case 'Actualizar':
                    const respuestaUsuarioBusquedaPorNombre = yield inquirer.prompt(preguntaUsuarioBusquedaPorNombre);
                    const existeUsuario = yield buscarUsuarioPorNombre(respuestaUsuarioBusquedaPorNombre.nombre);
                    if (existeUsuario) {
                        const respuestaNuevoNombre = yield inquirer.prompt(preguntaUsuarioNuevoNombre);
                        yield editarUsuario(respuestaUsuarioBusquedaPorNombre.nombre, respuestaNuevoNombre.nombre);
                    }
                    else {
                        console.log('El usuario no existe');
                        main();
                        break;
                    }
            }
        }
        catch (e) {
            console.log('Hubo un error');
        }
    });
}
function inicializarBase() {
    const bddLeida$ = rxjs.from(leerBDD());
    bddLeida$.pipe(mergeMap((respuestaBDD) => {
        if (respuestaBDD.bdd) {
            return rxjs.of(respuestaBDD);
        }
        else {
            return rxjs.from(crearBDD());
        }
    }));
}
function leerBDD() {
    return new promise((resolve, reject) => {
        fs.readFile('bdd.json', 'utf-8', (error, contenidoArchivo) => {
            if (error) {
                resolve({
                    mensaje: 'No existe la base de datos', bdd: null
                });
            }
            else
                resolve({
                    mensaje: 'Base de datos leída',
                    bdd: JSON.parse(contenidoArchivo)
                });
        });
    });
}
function crearBDD() {
    const contenido = '{"usuarios" :[], "" mascotas":[]}';
    return new Promise((resolve, reject) => {
        fs.writeFile('bdd.json', contenido, (error) => {
            if (error) {
                reject({ mensaje: 'Error creando bdd', error: 500 });
            }
            else {
                resolve({
                    mensaje: 'base creada '
                });
            }
        });
    });
}
function anadirUsuario(usuario) {
    return new Promise((resolve, reject) => {
        fs.readFile('bdd.json', 'utf-8', (err, contenido) => {
            if (err) {
                reject({ mensaje: 'Error leyendo' });
            }
            else {
                const bdd = JSON.parse(contenido);
                bdd.usuarios.push(usuario);
                fs.writeFile('bdd.json', JSON.stringify(bdd), (err) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve({ mensaje: 'Usuario Creado' });
                    }
                });
            }
        });
    });
}
function editarUsuario(nombre, nuevoNombre) {
    return new Promise((resolve, reject) => {
        fs.readFile('bdd.json', 'utf-8', (err, contenido) => {
            if (err) {
                reject({ mensaje: 'Error leyendo' });
            }
            else {
                const bdd = JSON.parse(contenido);
                const indiceUsuario = bdd.usuarios
                    .findIndex((usuario) => {
                    return usuario.nombre = nombre;
                });
                bdd.usuarios[indiceUsuario].nombre = nuevoNombre;
                fs.writeFile('bdd.json', JSON.stringify(bdd), (err) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve({ mensaje: 'Usuario Editado' });
                    }
                });
            }
        });
    });
}
function buscarUsuarioPorNombre(nombre) {
    return new Promise((resolve, reject) => {
        fs.readFile('bdd.json', 'utf-8', (err, contenido) => {
            if (err) {
                reject({ mensaje: 'Error leyendo' });
            }
            else {
                const bdd = JSON.parse(contenido);
                const respuestaFind = bdd.usuarios
                    .find((usuario) => {
                    return usuario.nombre === nombre;
                });
                resolve(respuestaFind);
            }
        });
    });
}
main();
