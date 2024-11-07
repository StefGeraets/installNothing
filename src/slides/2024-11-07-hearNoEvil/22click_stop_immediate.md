---
title: stopImmediatePropagation
subtitle: No more spam, please!
type: 'demo'
order: 22
---

<script>
  import OneClickButton from '$lib/demo/2024-11-07-hearNoEvil/OneClickButton.svelte'
</script>

<OneClickButton once>Try me, I dare you!</OneClickButton>

```html
<div id="parent"><button id="surprise-button">Try me, I dare you!</button></div>

<script>
	declare function createSurpriseElement();
	const parent: HTMLDivElement = document.getElementById('parent');
	const trigger: HTMLButtonElement = document.getElementById('surprise-button');
	let stopImmediate: boolean = false;

	for(let i = 0; i < 20; i++) {
	  trigger.addEventListener('click', (ev) => {
	    stopImmediate && ev.stopImmediatePropagation();
	    createSurpriseElement('monkeys');
	  });

	  parent.addEventListener('click', () => createSurpriseElement('bananas'));
	}
</script>
```
