---
title: 'Custom event handling'
subtitle: Not a DOM target?
type: 'demo'
order: 52
---

```typescript
class Counter extends EventTarget {
	value = 0;

	emitChangeEvent() {
		this.dispatchEvent(new CustomEvent('valuechange', { detail: this.value }));
	}

	increment() {
		this.value++;
		this.emitChangeEvent();
	}
}

const counter = new Counter();
counter.addEventListener('valuechange', (ev) => console.log(event.detail));
```
