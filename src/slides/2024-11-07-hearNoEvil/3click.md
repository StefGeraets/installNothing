---
title: click
subtitle: SPAM
type: 'demo'
order: 3
---

<script>
  import SingleButton from '$lib/demo/2024-11-07-hearNoEvil/SingleButton.svelte'
</script>

<SingleButton>DO NOT SPAM THIS BUTTON!!!</SingleButton>

```html
<button id="surprise-button">DO NOT SPAM THIS BUTTON!!!</button>

<script>
	declare function createSurpriseElement();

	const trigger: HTMLButtonElement = document.getElementById('surprise-button');

	trigger.addEventListener('click', createSurpriseElement);
</script>
```
