const form = document.getElementById('formulario');
// Escuchamos el evento submit y ejecutar la funcion.
form.addEventListener('submit', guardarTarea);
// Creamos la funcion y que no se refresque la pagina.

function guardarTarea(e) {   
    // obtenemos el valor de los imputs
    let task = document.getElementById('tarea').value;
    let description = document.getElementById('description').value;
    
    if (task === '') {
        alert('Debes ingresar una tarea!')
        return false;
    }
    insertarTarea();

    limpiarDatos();

    e.preventDefault();

};

function insertarTarea(){

    const tasksList = document.getElementById('task-list');

    let task = document.getElementById('tarea').value;
    let description = document.getElementById('description').value;
    let list = document.createElement("li");
    list.textContent = task +" - "+description;

    tasksList.appendChild(list);

};
function limpiarDatos(){
    document.getElementById('tarea').value='';
    document.getElementById('description').value = '';
   
}