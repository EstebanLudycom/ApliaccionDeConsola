const { rejects } = require('assert');
const { resolve } = require('path');

require('colors');

const mostrarMenu = () =>{

    return new Promise( (resolve) => {

    console.clear();
    console.log("======================".green);
    console.log("Seleccione una opción".green);
    console.log("======================\n".green);

    console.log(`${"1".green}. Crear una tarea`);
    console.log(`${"2".green}. Listar tareas`);
    console.log(`${"3".green}. Listar tareas completadas`);
    console.log(`${"4".green}. Listar tareas incompletas`);
    console.log(`${"5".green}. Completar tareas`);
    console.log(`${"6".green}. Borrar Tareas`);
    console.log(`${"0".green}. Salir\n`);

    const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,

    });


    readline.question("Seleccione una opción: ", (opt)=>{
        readline.close();
        resolve(opt);
    })

    })

}

const pausa = () => {

    return new Promise((resolve) => {

        const readline = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout,
    
        });
    
    
        readline.question(`Presione ${"ENTER".green} PARA CONTINUAR`, (opt) => {
            readline.close();
            resolve();
        })

    })

};


module.exports = {
    mostrarMenu,
    pausa
}