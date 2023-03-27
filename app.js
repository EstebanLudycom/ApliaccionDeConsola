const { guardarDB, leerDB } = require("./helpers/guardarArchivo.js");
const { inquirerMenu, pause, leerInput, listadoTareasBorrar } = require("./helpers/inquirer.js");
const Tarea = require("./models/tarea.js");
const Tareas = require("./models/Tareas.js");

// console.clear();


const main = async() => {

    let opt = "";
    const tareas = new Tareas();


    
    try {
        const tareasBD = leerDB();
        if (tareasBD){
            tareas.cargarTareasFromArray(tareasBD);
        }
        
    } catch (error) {
       
    }
    
    



    do {
        opt = await inquirerMenu();

        switch (opt) {
            case "1": //Crear tarea
                const descripcion = await leerInput("Descripcion: ")
                tareas.crearTarea(descripcion);

            break;

            case "2": //Completar tarea

            break;
            
            case "3": //listar tareas
                tareas.listadoCompleto();

            break;
            
            case "4": //listar tareas completadas
                tareas.listarTareasPorEstados(true);

            break;
            
            case "5": //listar tareas pendeintes
                tareas.listarTareasPorEstados(false);
                
            break;

            case "6": //Borrar
                
            const id = await listadoTareasBorrar(tareas.listadoArray);
            console.log({id});

            break;

            case "0": //Salir
                console.log("Hasta luego");
                
            break;
        }

        guardarDB(tareas.listadoArray)
        
        await pause()
        
    } while ( opt !== "0");
    
    console.clear();

}

main()