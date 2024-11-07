---
title: Capturing and Bubbling phases
subtitle: What did I just click?
type: 'demo'
order: 12
---

<script>
  import NestedClick from '$lib/demo/2024-11-07-hearNoEvil/NestedClick.svelte';
</script>

<div class="w-full text-center" id="4bubbling-mode">&nbsp;</div>

<NestedClick />

```html
<div id="div1">
	<div id="div2">
		<div id="div3"><div id="div4"></div></div>
	</div>
</div>

<script>
	declare function highlight(ev: Event): void;
	let div1: HTMLElement, div2: HTMLElement, div3: HTMLElement, div4: HTMLElement;
	// ...

	div1.addEventListener('click', highlight, { capture: true });
	div1.addEventListener('click', highlight);

	// div{n}.add...
</script>
```
