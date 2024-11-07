---
title: 'Custom events'
subtitle: Add some creativity
type: 'demo'
order: 51
---

```typescript
const catFound = new CustomEvent('animalfound', { detail: { name: 'cat' } });
const dogFound = new CustomEvent('animalfound', { detail: { name: 'dog' } });

const element = document.createElement('div'); // create a <div> element

// add an appropriate event listener
element.addEventListener('animalfound', (e) => console.log(e.detail.name));

// dispatch the events
element.dispatchEvent(catFound);
element.dispatchEvent(dogFound);
```
