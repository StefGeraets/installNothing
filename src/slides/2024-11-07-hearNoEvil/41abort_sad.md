---
title: 'el.removeEventListener(..., handler)'
subtitle: Repeat, repeat, repeat...
type: 'demo'
order: 41
---

```typescript
elA.addEventListener('click', handlerA);
elA.addEventListener('click', handlerB);
elB.addEventListener('click', handlerA);
elB.addEventListener('click', handlerB);
// ...

onDestroy(() => {
	elA.removeEventListener('click', handlerA);
	elA.removeEventListener('click', handlerB);
	elB.removeEventListener('click', handlerA);
	elB.removeEventListener('click', handlerB);
	// ...
});
```

<h1 style="font-size:4rem;">or ...</h1>
