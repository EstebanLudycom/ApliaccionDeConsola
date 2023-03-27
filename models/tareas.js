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

    borrarTarea( id = "" ){

        if (this._listado[id]){
            delete this._listado[id];
        }

    }

    cargarTareasFromArray(tareas = []){
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        })
        
    }

    listadoCompleto(){


        this.listadoArray.forEach( (tarea,i) =>{


            const idx = `${i+1}.`.green
            const estado = (tarea.completado)
                                ? "Tarea completada".green
                                : "Tarea Pendiente".red 
            
            console.log(`${idx} ${tarea.descripcion} :: ${estado}` )
        })
    }

    listarTareasPorEstados(completadas){
        
        let idx = 0;
        this.listadoArray.forEach( (tarea) =>{

            const estado = (tarea.completado)
                                ? "Tarea completada".green
                                : "Tarea Pendiente".red 
            if (completadas == true) {
                idx +=1;
                if (tarea.completado) {
                    console.log(`${idx.toString().green} ${tarea.descripcion} :: ${estado} En la fecha: ${tarea.completado}. `)

                }
            }else{

                if (!tarea.completado) {
                idx +=1;
                console.log(`${idx.toString().red} ${tarea.descripcion} :: ${estado}.`)

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