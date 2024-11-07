<script lang="ts">
	import { onMount } from 'svelte';

	export let form: HTMLFormElement;
	export let field: HTMLInputElement;

	function markNotOK() {
		field.classList.add('nok');

		setTimeout(() => field.classList.remove('nok'), 800);
	}

	function validate(ev: Event) {
		if (!field.value.includes('@')) {
			ev.preventDefault();
			markNotOK();
		}
	}

	onMount(() => {
		form.addEventListener('submit', validate);
	});
</script>

<form class="form31" bind:this={form}>
	<label>
		Email
		<input class="input" type="text" value="+31612345678" bind:this={field} />
	</label>

	<button type="submit">Submit</button>
</form>

<style>
	:global(.nok) {
		outline-color: darkred !important;
	}

	button,
	input {
		outline: #fff solid 1px;
		outline-offset: 0;
		background: transparent;
		padding: 8px;
		border-radius: 4px;
		transition:
			outline-style 0.25s allow-discrete,
			outline-offset 0.25s;

		&:focus {
			outline-style: dashed;
			outline-offset: 5px;
		}
	}
</style>
