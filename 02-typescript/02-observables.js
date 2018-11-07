const rxjs = require('rxjs');
const map = require('rxjs/operators').map;
const distinct = require('rxjs/operators').distinct;
const concat = require('rxjs/operators').concat;
const numeros$ = rxjs.of(1, true, 1, 4, 5, 6);
console.log(numeros$);
numeros$
    .pipe(distinct(), map((valorActual) => {
    return {
        data: valorActual
    };
})).subscribe((ok) => {
    console.log('En ok', ok);
}, (error) => {
    console.log('Error:', error);
}, () => {
    console.log('Complete');
});
const promesita = (funciona) => {
    return new Promise((resolve, reject) => {
        if (funciona) {
            resolve(' :) ');
        }
        else {
            reject(' :( ');
        }
    });
};
const promesita$ = rxjs.from(promesita(true));
promesita$
    .subscribe((ok) => {
    console.log('Promesita bien', ok);
}, (error) => {
    console.log('Promesita mal', error);
}, () => {
    console.log('completado');
});
const observableConcatenado$ = numeros$.pipe(distinct(), concat(promesita$), map((valorActual) => {
    return {
        data: valorActual
    };
}));
observableConcatenado$.subscribe((ok) => {
    console.log('Promesita bien', ok);
}, (error) => {
    console.log('Promesita mal', error);
}, () => {
    console.log('completado');
});
