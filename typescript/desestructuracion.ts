
(() => {
    const avenger = {
        nombre: 'steve',
        clave: 'capitan america',
        poder: 'droga'
    }
 
    const extraer = ( {nombre, poder}: any) => { //desestructuramos con argumentos
        /* const { nombre, poder } = avenger  */       
        console.log(nombre)
        console.log(poder)
    }

   /*  extraer( avenger); */

   const avengers: string[] = ['thor', 'Ironman', 'Spiderman'];
   const [ , , arana] = avengers;

   //console.log(arana);

   const extraerArr = (avengers: string[] ) => { 
    console.log(avengers[0]);
    console.log(avengers[1]);
    console.log(avengers[2]);
   }

   extraerArr(avengers);

   


   




}) ();