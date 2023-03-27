const { guardarDB, leerDB } = require("./helpers/guardarArchivo.js");
const { 
    inquirerMenu,
    pause,
    leerInput,
    listadoTareasBorrar,
    confirmar ,
    mostrarListadoChecklist
} = require("./helpers/inquirer.js");

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

            case "2": //Cambiar estado de tareas

                ids = await mostrarListadoChecklist(tareas.listadoArray);
                tareas.toggleComlpletadas(ids);

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
            if(!id === 0){
                const ok = await confirmar("¿Estás Seguro?");
                if (ok) {
                    tareas.borrarTarea(id);
                    console.log("Tarea borrada")
                }
            } 

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