const { guardarDB, leerDB } = require("./helpers/guardarArchivo.js");
const { inquirerMenu, pause, leerInput } = require("./helpers/inquirer.js");
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
            case "1":

            const descripcion = await leerInput("Descripcion: ")
            tareas.crearTarea(descripcion);

            break;

            case "2":
                tareas.listadoCompleto();
            break;

            case "3":
            tareas.listarTareasPorEstados(true);
            break;
            
            case "4":
            tareas.listarTareasPorEstados(false);
            break;

            case "0":
                
            break;
        }

        guardarDB(tareas.listadoArray)

        await pause()
        
    } while ( opt !== "0");

    console.clear();
    console.log("Hasta luego");

}

main()