(() => {

const sumar = (a: number, b:number): number => a + b

const nombre = ():string => 'Hola Pablo';

const obternerSalario = ():Promise<string> => {
    return new Promise( (resolve, reject) => {
        resolve('Fernando')

    })

    obternerSalario()
                    .then(a => console.log(a.toUpperCase() ) )
}


}) ();