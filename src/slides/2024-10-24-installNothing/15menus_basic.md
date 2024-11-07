---
title: Menus x Popovers
subtitle: Basic Popover
type: 'demo'
order: 15
---

<script>
  import BasicPopover from '$lib/demo/2024-10-24-installNothing/BasicPopover.svelte'
</script>

<BasicPopover />

```html
<button popovertarget="menu-demo-popover">Menu</button>
<div popover id="menu-demo-popover" class="menu">
	<ul class="menu-demo">
		<li><a href="#">Settings</a></li>
		<li><a href="#">My Profile</a></li>
		<li><a href="#">Help</a></li>
		<li><a href="#">Logout</a></li>
	</ul>
</div>
```
