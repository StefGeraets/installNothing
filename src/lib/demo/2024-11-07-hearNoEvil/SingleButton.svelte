<script lang="ts">
	import { onMount } from 'svelte';
	import { createSurpriseElement } from '$lib/demo/2024-11-07-hearNoEvil/surpriseElement';

	export let once = false;

	onMount(() => {
		const trigger = document.getElementById('single-button');
		const wrapper = document.getElementsByTagName('main')[0];

		trigger?.addEventListener(
			'click',
			() => {
				createSurpriseElement(wrapper);
			},
			{ once }
		);
	});
</script>

<button id="single-button"><slot /></button>

<style>
	button {
		outline: #fff solid 1px;
		outline-offset: 0;
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
