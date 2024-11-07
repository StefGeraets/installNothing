---
title: class extends
subtitle: EventTarget
type: 'ship'
order: 53
---

<script>
  import ShipScore from '$lib/components/ShipScore.svelte'
</script>

<ShipScore chrome="64" firefox="59" safari="14" globalScore="98.46%!" shipIt>
  <small>Without event propagation... (e.g. capturing, bubbling, ...)</small>
</ShipScore>
