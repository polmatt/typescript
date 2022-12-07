
(function () {

function activar (quien: string, //obligatorio
    momento?: string,  // opcional
    objeto: string= 'batiseñal') { // por defecto
    

    if (momento){
        console.log(`${ quien } activó la ${ objeto } en la ${ momento }`);
    }
    else {
        console.log(`${ quien } activó la ${ objeto } `) }

}


activar('Gordon', 'tarde');
}) ();