<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';

	export let n = 1;
	export let nback = n + 1;

	export let top = true;
	export let bubblestopat: number | undefined = undefined;
	export let capturestopat: number | undefined = undefined;

	let nestedClick: HTMLDivElement;

	const dispatch = createEventDispatcher<{ increment: number; done: void }>();

	onMount(() => {
		nestedClick.dataset.n = n.toFixed(0);
		nestedClick.dataset.nback = nback.toFixed(0);

		nestedClick.addEventListener(
			'click',
			(ev) => {
				if (checkStop(ev, capturestopat, 'capture')) {
					return;
				}

				highlight(nestedClick, 'capture');
			},
			{ capture: true }
		);

		nestedClick.addEventListener(
			'click',
			(ev) => {
				if (checkStop(ev, bubblestopat, 'bubble')) {
					return;
				}

				highlight(nestedClick, 'bubble');
			},
			{ capture: false }
		);

		if (n >= 6) {
			dispatch('increment', 2);
		}
	});

	function checkStop(ev: Event, at: number | undefined, mode: 'capture' | 'bubble'): boolean {
		if (n === at) {
			ev.stopPropagation();
			setTimeout(() => {
				highlight(nestedClick, mode, 'stop');
				setTimeout(done, 2500);
			}, 0);
			return true;
		}

		return false;
	}

	function highlight(
		el: HTMLDivElement,
		mode: 'capture' | 'bubble',
		extra: 'stop' | '' = ''
	): void {
		setTimeout(() => {
			if (extra) {
				el.classList.add(`highlight-${extra}`);
			}

			el.classList.add(`highlight-${mode}`);
			document.getElementById('4bubbling-mode')!.textContent = `${extra} ${mode} phase`;

			if (top && mode === 'bubble') {
				setTimeout(done, 1500);
			}

			// Not faking execution 'order'.
			// This forces the main thread to wait.
			// Alternatively, using setTimeout with
			// an incrementing delay would result in the same.
			const d = Date.now() + 214;
			while (Date.now() < d) {
				/* - */
			}
		}, 0);
	}

	function increment({ detail: v }: { detail: number } = { detail: 1 }) {
		nback += v;
		nestedClick.dataset.nback = nback.toFixed(0);
		dispatch('increment', v + 2);
	}

	function done() {
		for (const t of ['capture', 'bubble', 'stop']) {
			const bels = document.getElementsByClassName(`highlight-${t}`);
			while (bels.item(0)) {
				bels.item(0)!.classList.remove(`highlight-${t}`);
			}
		}

		document.getElementById('4bubbling-mode')!.innerHTML = '&nbsp;';
	}
</script>

<div class="nested-click" bind:this={nestedClick}>
	{#if n < 6}
		<svelte:self top={false} n={n + 1} on:increment={increment} {bubblestopat} {capturestopat}
		></svelte:self>
	{:else}
		&nbsp;
	{/if}
</div>

<style>
	:global(div:not(.nested-click).flex:has(> .nested-click)) {
		align-items: start;
		container-type: inline-size;
		container-name: main;

		& > pre {
			align-self: center;
		}
	}

	:global(div:not(.nested-click) > .nested-click) {
		view-transition-name: nested-click-vt;
	}

	.nested-click {
		cursor: pointer;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: center;
		flex: 1 1 auto;

		margin-top: 3cqb;
		padding: 0.7cqb 0.3cqi 0.3rem 0.5rem;
		min-height: clamp(
			23%,
			clamp(4em, 4rem, 100cqb),
			100cqb
		); /* clamp(40%, clamp(4em, */ /* 10dvh */ /* 10rem, 100cqb), 100cqb) */
		min-width: 20cqi;

		outline: #fff solid 1px;
		outline-offset: 0;
		border-radius: 4px;
		background: rgb(3 7 18 / var(--tw-bg-opacity));

		transition:
			outline-style 0.25s allow-discrete,
			outline-offset 0.25s,
			outline-width 0.25s,
			background 0.2s;

		&.highlight-capture {
			background: darkgoldenrod;
		}

		&.highlight-bubble {
			background: rebeccapurple;
		}

		&.highlight-stop {
			outline-color: darkred;
			outline-width: 3px;
		}

		&:before {
			content: attr(data-n);
			position: absolute;
			left: 0;
			top: 0;
			padding: 0.5rem;
		}

		&:after {
			content: attr(data-nback);
			position: absolute;
			left: 0;
			bottom: 0;
			padding: 0.5rem;
		}

		& > & {
			transform: translateX(8dvw);
		}
	}
</style>
