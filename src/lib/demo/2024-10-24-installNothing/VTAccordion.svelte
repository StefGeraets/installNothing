<script>
	const toggleAccordion = () => {
		const details = document.querySelector('#demo-accordion-vt');
		const content = details.querySelector('#demo-accordion-vt .details-content');
		const summary = details.querySelector('#demo-accordion-vt summary');

		summary.addEventListener('click', async (e) => {
			e.preventDefault();
			let transition = document.startViewTransition(() => {
				if (details.open) {
					details.open = false;
				} else {
					details.open = true;
				}
			});
		});
	};
</script>

<svelte:window on:load={toggleAccordion()} />

<details id="demo-accordion-vt">
	<summary>Details</summary>
	<div class="details-content">
		<p>This is an accordion with more</p>
		<p>I'm adding more stuff here to make animation look nicer.</p>
	</div>
</details>

<style>
	details {
		align-self: flex-start;
		margin-left: 20vw;
		font-size: 24px;
		cursor: pointer;

		& p {
			padding: 8px 0;
		}
	}
</style>
