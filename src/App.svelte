<script lang="ts">
	let firstName: string = "Balázs";
	let lastName: string = "Almády";
	let color: string = "blue";
	let showText: boolean = false;
	let users: Array<{id: number, name: string}> = [
		{id: 1, name: 'Sarah'},
		{id: 2, name: 'Ben'},
		{id: 3, name: 'Kevin'},
		{id: 4, name: 'Vera'},
	]

	$: name = firstName + " " + lastName;

	const toggle = () => {
		color = color === "blue" ? "red" : "blue";
		showText = !showText;
		users = [...users, {id: users.length + 1, name: 'newGuy'}]
	};
</script>

<main>
	<h1 style="color: {color}">Hello {name}!</h1>
	<p>
		Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
		how to build Svelte apps.
	</p>

	<button on:click={toggle}>Click</button>
	{#each users as user (user.id) }
		<h3>{user.id}: {user.name}</h3>
	{/each}

	{#if showText}
		<p>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime hic
			voluptate iusto repellat laboriosam eum voluptates aliquam,
			consequatur veritatis mollitia ad rem repudiandae a corporis commodi
			in. Libero, totam eos.
		</p>
	{:else}
		<p>No text</p>
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
