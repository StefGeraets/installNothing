---
title: Mobile Nav x Drawer
subtitle: CSS only Drawer
type: 'demo'
order: 24
---

<script>
  import CSSDrawer from '$lib/demo/CSSDrawer.svelte'
</script>

<CSSDrawer />

```html
<script>
	window.onload = function () {
		if (typeof window !== 'undefined') {
			const dialog = document.querySelector('#demo-drawer-css');
			const open = document.querySelector('#trigger');
			const close = document.querySelector('#demo-drawer-css .close');
			open.addEventListener('click', () => dialog.showModal());
			close.addEventListener('click', () => dialog.close());
		}
	};
</script>

<button id="trigger">Open Dialog</button>
<dialog id="demo-drawer-css">
	<button class="close">Cancel</button>
	<h3>Create a new issue</h3>
	<form method="dialog">
		<input type="text" placeholder="Title" />
		<textarea placeholder="Write a message"></textarea>
		<button type="submit">Submit</button>
	</form>
</dialog>

<style>
	#demo-drawer-css {
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
		background: black;
		max-width: 100%;
		box-shadow:
			rgba(0, 0, 0, 0.25) 0px 54px 55px,
			rgba(0, 0, 0, 0.12) 0px -12px 30px;
		inset-block-start: unset;

		&::backdrop {
			transition:
				display 0.5s allow-discrete,
				overlay 0.5s allow-discrete,
				opacity 0.2s 0.4s;
			opacity: 0;
			background: rgba(0, 0, 0, 0.3);
		}

		&[open],
		&[open]::backdrop {
			opacity: 1;
			transition:
				display 0.5s allow-discrete,
				overlay 0.5s allow-discrete,
				translate 0.5s,
				opacity 0.2s;
		}

		&[open] {
			translate: 0 0;
		}

		@starting-style {
			&[open],
			&[open]::backdrop {
				opacity: 0;
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
</style>
```
