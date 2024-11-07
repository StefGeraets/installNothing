<script lang="ts">
	import { onMount } from 'svelte';

	export let demoDrawer: HTMLDialogElement;
	export let closeTrigger: HTMLButtonElement;
	export let openTrigger: HTMLAnchorElement;
	export let presentations: string[] = [];

	onMount(() => {
		openTrigger.addEventListener('click', () => demoDrawer.showModal());
		closeTrigger.addEventListener('click', () => demoDrawer.close());
	});
</script>

<a
	id="presentations-list-trigger"
	bind:this={openTrigger}
	class="absolute bottom-0 cursor-pointer m-4">Show other presentations</a
>

<dialog
	id="presentations-list"
	bind:this={demoDrawer}
	class="flex flex-col items-center justify-start"
>
	<button class="close self-start" bind:this={closeTrigger}>🗙&nbsp;&nbsp;&nbsp;Close</button>

	<div class="flex flex-col items-center justify-center w-screen flex-grow">
		{#each presentations as presentation}
			<a href={`/${presentation}`} class="my-3 text-3xl">{presentation}</a>
		{/each}
	</div>
</dialog>

<style>
	#presentations-list {
		transition:
			display 0.5s allow-discrete,
			overlay 0.5s allow-discrete,
			translate 0.5s,
			opacity 0.2s 0.4s;
		opacity: 0;
		translate: 0 100vh;
		height: 58vb;
		width: 100vi;
		padding: 1rem;
		border-radius: 25px 25px 0 0;
		border: none;
		background-color: rgb(3, 7, 18);
		color: rgb(243, 244, 246);
		max-width: 100%;
		box-shadow:
			rgba(0, 0, 0, 0.25) 0px 54px 55px,
			rgba(0, 0, 0, 0.12) 0px -12px 30px;
		inset-block-start: unset;

		&::backdrop {
			transition:
				display 0.5s allow-discrete,
				overlay 0.5s allow-discrete,
				opacity 0.2s 0.4s,
				filter 0.2s 0.4s;
			opacity: 0;
			background: rgba(0, 0, 0, 0.3);
			backdrop-filter: blur(0.5em);
		}

		&[open],
		&[open]::backdrop {
			opacity: 1;
			transition:
				display 0.5s allow-discrete,
				overlay 0.5s allow-discrete,
				translate 0.5s,
				opacity 0.2s,
				filter 0.2s 0.4s;
		}

		&[open] {
			translate: 0 0;
		}

		@starting-style {
			&[open],
			&[open]::backdrop {
				opacity: 0;
				filter: blur(0);
			}
			&[open] {
				translate: 0 100vh;
			}
		}
	}

	body:has([open]) {
		overflow: hidden;
	}

	/* UI Code */
	button[type='submit'] {
		position: absolute;
		inset-inline-end: 1rem;
		inset-block-start: 1rem;
	}
	button {
		border: 1px solid #fff;
		padding: 8px;
		border-radius: 4px;
	}
	dialog {
		padding: 16px;
		border-radius: 16px;
		width: 35%;

		&[open]::backdrop {
			background: rgba(0, 0, 0, 0.7);
			backdrop-filter: blur(0.5em);
		}

		& button {
			background: #000;
			color: #fff;
			text-transform: uppercase;
		}
	}
</style>
