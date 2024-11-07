---
title: Capturing and Bubbling phases
subtitle: Cancel culture /s
type: 'demo'
order: 13
---

<script>
  import NestedClick from '$lib/demo/2024-11-07-hearNoEvil/NestedClick.svelte';
</script>

<div class="w-full text-center" id="4bubbling-mode">&nbsp;</div>

<NestedClick bubblestopat={3} />

```html
<div id="div1">
	<div id="div2">
		<div id="div3"><div id="div4">...</div></div>
	</div>
</div>

<script>
	declare function highlight(ev: Event): void;
	let div1: HTMLElement, div2: HTMLElement /* , ... */;
	// ...

	div3.addEventListener('click', highlight, { capture: true });
	div3.addEventListener('click', (ev) => {
	  ev.stopPropagation();
	  highlight(ev);
	});
	// div{n}.add...
</script>
```
