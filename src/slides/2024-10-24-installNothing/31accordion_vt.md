---
title: Accordions
subtitle: Accordion View Transitions
type: 'demo'
order: 31
---

<script>
  import VTAccordion from '$lib/demo/2024-10-24-installNothing/VTAccordion.svelte'
</script>

<VTAccordion />

```html
<script>
	window.onload = function () {
		if (typeof window !== 'undefined') {
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
		}
	};
</script>

<details id="demo-accordion-vt">
	<summary>Details</summary>
	<div class="details-content">
		<p>This is an accordion with more</p>
		<p>I'm adding more stuff here to make animation look nicer.</p>
	</div>
</details>
```