<script>
	const openPopover = () => {
		let button = document.getElementById('md');
		let popover = document.getElementById('mdp');

		button.addEventListener('click', toggle);

		function update_position() {
			const target_position = button.getBoundingClientRect();
			popover.style.inset = 'unset';
			popover.style.top = target_position.bottom + 'px';
			popover.style.left = target_position.right - target_position.width + 'px';
		}
		const resizeObserver = new ResizeObserver(update_position);
		resizeObserver.observe(popover);
		window.addEventListener('resize', update_position);
		window.addEventListener('scroll', update_position);

		// Animation
		function toggle() {
			const is_opening = !popover.matches(':popover-open');
			const translate = is_opening ? ['0 10px', '0 0'] : ['0 0', '0 10px'];
			const opacity = is_opening ? [0, 1] : [1, 0];

			if (is_opening) popover.showPopover();

			window.requestAnimationFrame(() => {
				let animation = popover.animate(
					{
						translate,
						opacity
					},
					{
						duration: 300,
						easing: 'ease-in-out',
						fill: 'forwards'
					}
				);
				animation.onfinish = () => {
					if (!is_opening) popover.hidePopover();
				};
			});
		}

		// In Manual mode, you need to trigger keyboard events yourself
		document.addEventListener('keydown', (event) => {
			if (
				event.key === 'Escape' &&
				popover.hasAttribute('popover') &&
				popover.matches(':popover-open')
			) {
				toggle();
			}
		});
	};
</script>

<svelte:window on:load={openPopover()} />

<button id="md" class="menu-button">***</button>
<!-- Note: Manual Mode Required -->
<div popover="manual" id="mdp" class="menu">
	<ul class="menu-demo">
		<li><a href="#">Settings</a></li>
		<li><a href="#">My Profile</a></li>
		<li><a href="#">Help</a></li>
		<li><a href="#">Logout</a></li>
	</ul>
</div>

<style>
	button {
		border: 1px solid #fff;
		padding: 8px;
		border-radius: 4px;
		align-self: self-start;
		margin-left: 20vw;
	}

	.menu {
		padding: 20px;
		border-radius: 16px;
		box-shadow:
			rgba(0, 0, 0, 0.25) 0px 54px 55px,
			rgba(0, 0, 0, 0.12) 0px -12px 30px,
			rgba(0, 0, 0, 0.12) 0px 4px 6px,
			rgba(0, 0, 0, 0.17) 0px 12px 13px,
			rgba(0, 0, 0, 0.09) 0px -3px 5px;

		& ul {
			display: flex;
			flex-direction: column;

			& li {
				display: block;
				padding: 10px 40px 10px 20px;
				color: var(--bg);
				text-decoration: unset;
				border-radius: 4px;
				font-size: var(--fs-xs);
			}
		}
	}
</style>
