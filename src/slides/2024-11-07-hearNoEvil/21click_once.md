---
title: once
subtitle: No more spam, please!
type: 'demo'
order: 21
---

<script>
  import SingleButton from '$lib/demo/2024-11-07-hearNoEvil/SingleButton.svelte'
</script>

<SingleButton once>No more spam, please!</SingleButton>

```html
<button id="surprise-button">No more spam, please!</button>

<script>
	declare function createSurpriseElement();

	const trigger: HTMLButtonElement = document.getElementById('surprise-button');

	trigger.addEventListener('click', createSurpriseElement, { once: true });
</script>
```
