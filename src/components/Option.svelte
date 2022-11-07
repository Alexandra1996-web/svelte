<script>
    let scoops = 1;
	let flavours = ['Mint choc chip'];

	let menu = [
		'Cookies and cream',
		'Mint choc chip',
		'Raspberry ripple'
	];

	function join(flavours) {
		if (flavours.length === 1) return flavours[0];
		return `${flavours.slice(0, -1).join(', ')} and ${flavours[flavours.length - 1]}`;
	}

</script>

<h2>Listado de opciones</h2>

<label>
	<input type=radio bind:group={scoops} value={1}>
	Producto 1
</label>

<label>
	<input type=radio bind:group={scoops} value={2}>
	Producto 2
</label>

<label>
	<input type=radio bind:group={scoops} value={3}>
	Producto 3
</label>

<h2>Menu de paquetes</h2>

{#each menu as flavour}
	<label>
		<input type=checkbox bind:group={flavours} value={flavour}>
		{flavour}
	</label>
{/each}

{#if flavours.length === 0}
	<p>Please select at least one flavour</p>
{:else if flavours.length > scoops}
	<p>Can't order more flavours than scoops!</p>
{:else}
	<p>
		You ordered {scoops} {scoops === 1 ? 'scoop' : 'scoops'}
		of {join(flavours)}
	</p>
{/if} 

