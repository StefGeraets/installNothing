<script lang="ts">
	import { onMount } from 'svelte';
	import { createSurpriseElement } from '$lib/demo/2024-11-07-hearNoEvil/surpriseElement';

	export let stop: boolean = false;
	export let stopNow: boolean = false;
	export let singleButton: HTMLButtonElement;
	export let singleButtonParent: HTMLDivElement;

	export const setStop = (ev: InputEvent) => {
		if ((ev.target! as unknown as { checked: boolean }).checked) {
			stopNow = false;
		}
	};

	export const setStopNow = (ev: InputEvent) => {
		if ((ev.target! as unknown as { checked: boolean }).checked) {
			stop = false;
		}
	};

	onMount(() => {
		const wrapper = document.getElementsByTagName('main')[0];

		for (let i = 0; i < 20; i++) {
			singleButton.addEventListener('click', (ev) => {
				if (stopNow) {
					ev.stopImmediatePropagation();
				} else if (stop) {
					ev.stopPropagation();
				}

				createSurpriseElement(wrapper, 'monkeys');
			});

			singleButtonParent.addEventListener('click', () => {
				console.log('PARENT');
				createSurpriseElement(wrapper, 'bananas');
			});
		}
	});
</script>

<div class="flex flex-row">
	<div class="flex flex-col pr-10">
		<label>
			<input type="checkbox" bind:checked={stop} on:change={setStop} />
			<code class="text-sm">&nbsp;&nbsp;ev.stopPropagation()</code>
		</label>

		<label>
			<input type="checkbox" bind:checked={stopNow} on:change={setStopNow} />
			<code class="text-sm">&nbsp;&nbsp;ev.stopImmediatePropagation()</code>
		</label>
	</div>

	<div bind:this={singleButtonParent}>
		<button bind:this={singleButton}><slot /></button>
	</div>
</div>

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
