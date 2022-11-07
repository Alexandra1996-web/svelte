<script>


import {addDoc, doc} from 'firebase'; // importamos la funcion addDoc de firebase para agregar documentos a la base de datos y doc para crear un documento en la base de datos de firebase 
import {db} from './firebase'; // importamos el archivo firebase.js 




let task = {
    title: '',
    description: '', 
}; // this is a variable que es un objeto con dos propiedades 

const handleSubmit = (e) => {
    e.preventDefault(); // esto es para que no se recargue la pagina que es el comportamiento por default de un formulario 
    addDoc(collection("tasks")), task; // esto es para agregar un documento a la coleccion de tareas
    console.log(task); // esto es para que se muestre en la consola el objeto task
}



</script>


<main> 

<div class="Form">

<!--en una linea hacemos lo mismo que es evitar que envie el formulario-->

<form on:submit|preventDefault={handleSubmit}> 
<label for="title"> Title </label>
<input 
bind:value={task.title}
type="text" placeholder="Write a title"> 

<label for="description"> Description </label>
<br>
<input
bind:value={task.description}
type="text" placeholder="Write a description"> 

<!-- 
<label for="description"> Description </label>

<textarea id="description" rows="3" placeholder="Write a description"> </textarea>
-->

<br>

<button type="submit"> Send </button> 


</form>

</div>


</main>

<style>


form {

    color: white; 
    font-size: 40px; 
}



</style>


