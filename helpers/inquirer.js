const inquirer = require("inquirer");
require("colors");


const preguntas = [
    {
        type: "list",
        name: "Opcion",
        message: "¿Qué desea hacer?",
        choices: [
            {
                value: "1",
                name: `${"1.".green} Crear tarea`
            },
            {
                value: "2",
                name: `${"2.".green} Completar tareas`
            },
            {
                value: "3",
                name: `${"3.".green} Listar tareas`
            },
            {
                value: "4",
                name: `${"4.".green} Lista de tareas completadas`
            },
            {
                value: "5",
                name: `${"5.".green} Lista de tareas pendientes`
            },
            {
                value: "6",
                name: `${"6.".green} Borrar`
            },
            {
                value: "0",
                name: `${"0.".green} Salir`
            },
        ]
    },
]






const inquirerMenu = async() => {

    console.clear();
    console.log("==========================".green);
    console.log("  Seleccione una opcion".green);
    console.log("==========================\n".green);


    const {Opcion} = await inquirer.prompt(preguntas);
    return Opcion; 
}

const pause = async() =>{

    const pausar=[
        {
            type: "input",
            name: "Pausa",
            message: `Presione ${"Enter".green} para continuar`
            
        }
    ]

    await inquirer.prompt(pausar);
    return pausar
}

const listadoTareasBorrar = async(tareas = []) => {

    const choices = tareas.map((tarea, i) => {

        const idx = `${i+1}`.green 
        return{
            value: tarea.id,
            name: `${idx}. ${tarea.descripcion}`
        }


    })
        const preguntas = [
            {
                type: "list",
                name: "id",
                message: "Borrar",
                choices
            }
        ]

        const {id} = await inquirer.prompt(preguntas);
        return id;


}

const leerInput = async(message) =>{

    const question = [
        {
            type: "input",
            name: "descripcion",
            message,
            validate( value ){
            if(value.length === 0){
                return "Ingrese un valor";
            }
            return true;
            
            }

        }
    ];

    const {descripcion} = await inquirer.prompt(question);
    return descripcion;

}

module.exports = {
    inquirerMenu,
    pause,
    leerInput,
    listadoTareasBorrar
}
// inquirerMenu();
// pause();