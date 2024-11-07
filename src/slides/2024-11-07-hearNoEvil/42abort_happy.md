---
title: 'el.addEventListener(..., { signal })'
subtitle: Repeat, repeat, repeat...
type: 'demo'
order: 42
---

<h1 style="font-size:4rem;">... clean</h1>

```typescript
const controller = new AbortController();

elA.addEventListener('click', handlerA, { signal: controller.signal });
elA.addEventListener('click', handlerB, { signal: controller.signal });
elB.addEventListener('click', handlerA, { signal: controller.signal });
elB.addEventListener('click', handlerB, { signal: controller.signal });
// ...

onDestroy(() => controller.abort());
```
