const Tarea = require("./tarea")


class Tareas{

    _listado = {}
    
    constructor(){
        this._listado = {}
    }
    
    get listadoArray(){
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        })

        return listado;
    }

    cargarTareasFromArray(tareas = []){
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        })
        
    }

    listadoCompleto(){

        // console.log(this._listado)
        // console.log(this.listadoArray)

        this.listadoArray.forEach( (tarea,i) =>{


            const idx = `${i+1}.`.green
            const estado = (tarea.completado)
                                ? "Tarea completada".green
                                : "Tarea Pendiente".red 
            
            console.log(`${idx} ${tarea.descripcion} :: ${estado}` )
        })
    }

    listarTareasPorEstados(completadas){

        this.listadoArray.forEach( (tarea) =>{


            let idx = 0;
            const estado = (tarea.completado)
                                ? "Tarea completada".green
                                : "Tarea Pendiente".red 
            if (completadas == true) {
                idx +=1;
                if (tarea.completado) {
                    console.log(`\n${idx.toString().green} ${tarea.descripcion} :: ${estado} En la fecha: ${tarea.completado}. `)

                }
            }else{

                if (!tarea.completado) {
                idx +=1;
                console.log(`\n${idx.toString().red} ${tarea.descripcion} :: ${estado}. \n`)

                }
            }
            
        })

    }

    crearTarea( descripcion ){

        const tarea = new Tarea(descripcion);
        this._listado[tarea.id] = tarea;

    }



}

module.exports = Tareas