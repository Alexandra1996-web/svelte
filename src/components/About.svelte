<script>
    let someText = 'Fronted Developers Emperor Team'; // this is a variable
    let count = 0; 
    let styles = {darkMode: false}

    function handleClick() {
        count += 1;
    }

// efecto toggle de cuando esta en modo oscuro false toma lo lo hace True 

    function toggle() {
        styles.darkMode = !styles.darkMode;
        window.document.body.classList.toggle('dark-mode'); // toggle es para que se active y desactive, si esta activo lo desactiva y si esta desactivado lo activa, es como un interruptor, con svelte se accede directo al DOM y se le agrega la clase dark-mode al body
    }



</script>

<style>
    p {
        color: var(--theme-color);
    }


</style>

<div class="About">

    {#if !styles.darkMode}
    <p>{someText}</p> 
    {:else}
    <p>Hello modo oscuro</p>
    {/if} 




    
    <button on:click={toggle}> Cambio de Color </button>
    <button on:click={handleClick}> Contador de Like {count === 0 ? '' : count}</button>
</div>