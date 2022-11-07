<script>
	import About from './components/About.svelte';
	import Text from './components/Text.svelte';
	import Person from './components/Person.svelte';
	import Option from './components/Option.svelte';
	import Skills from './components/Skills.svelte';
	import Sculo from './components/Sculo.svelte'; 
	import Form from './components/Form.svelte';


	export let name;
	export let lastName = 'Pinguino'; 
	export let fulano = " "; 
	

	let penguLogo = 'https://i.ytimg.com/vi/pIAeUfvz9yI/mqdefault.jpg';
	function handleClick() {
	// intentar hacer un array y que recorra tomando los nombres 
	// y los apellidos y los muestre en el html	
		/*
		const lista = ['Ivana', 'Achu', 'Mayra']
		
		for (const name of lista 
		){
			console.log(name);
		}--> */ 
		name = fulano;
		
	}
	//crear un objeto con nombres y apellidos 

	const data = {
		name: 'Alexandra',
		lastName: 'Caceres',
		age: 26,
	}

</script>

<main>
	
	<h1>Hello {name} {lastName}!</h1>  


<button on:click={handleClick}> Cambiar nombre</button>


<h1>Hello {name} {lastName}!</h1>






<input type="text" bind:value={fulano} placeholder="Ingresa tu nombre"> 
<p>Hello {fulano || 'developer' }!</p>

<About/> 

<Text anotherText='Informacion sobre la Pagina Web de Pinguinos'/>

<Text/> 

<Option/> 

<Skills/> 
<Sculo/>

<h1> Agregar informacion para el Data Base</h1>

<Form/> 

<!-- Tomo los datos que quiero de mi objeto data y los visualizo en mi Html declaro mi age tambien -->

<Person name={data.name} lastName={data.lastName} age={data.age}/> 

<!-- Tomo los datos de mi objeto data y los visualizo en mi Html declaro mi age tambien -->
<Person {...data}/> 


<img src={penguLogo} alt="Svelte logo" width="500px"/>



</main>

<style>

/*crear estilos de modo global*/

	:global(body) {
		background: goldenrod;
	}
	:global(h1) {
		background-color: white;
	}
	
	:global(h2) {
		background-color: white;
	}

	:global(h3) {
		background-color: white;
	}
	:global(p) {
		color: white;
	}
	:global(body.dark-mode) {
		background: green;
		color: black; 
	}


/* establecer variables globales */ 
	:global(:root) 
	{
		--theme-color: purple;
		--theme-color-light: #f1f1f1;
	}

	
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: red;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
		/*background-color: grey; */ 
		/*para que no se vea el fondo blanco porque prevalece al global*/
		border: 5pt solid black;
	}

	p {
		color: var(--theme-color);
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>


