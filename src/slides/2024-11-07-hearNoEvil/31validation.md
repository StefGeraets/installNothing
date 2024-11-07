---
title: preventDefault
subtitle: Wait, not yet!
type: 'demo'
order: 31
---

<script>
  import InvalidForm from '$lib/demo/2024-11-07-hearNoEvil/InvalidForm.svelte'
</script>

<InvalidForm />

```html
<form>
	<input type="text" value="+31612345678" />
	<button type="submit">Submit</button>
</form>

<script>
	let form: HTMLFormElement,
	    field: HTMLInputElement;

	form.addEventListener('submit', (ev) => {
	  if (!field.value.includes('@')) {
	    ev.preventDefault();
	  }
	});
</script>
```
