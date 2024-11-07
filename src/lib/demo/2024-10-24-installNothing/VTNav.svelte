<script>
	const setDialog = () => {
		const button = document.querySelector('button[popovertarget=demo-mobile-nav-vt]');
		const popover = document.querySelector('#demo-mobile-nav-vt');

		button.addEventListener('click', toggle);

		function toggle(e) {
			const is_opening = !popover.matches(':popover-open');
			e.preventDefault();
			document.startViewTransition(() => {
				if (is_opening) {
					return popover.showPopover();
				}
				return popover.hidePopover();
			});
		}

		document.addEventListener('keydown', (e) => {
			if (
				e.key === 'Escape' &&
				popover.hasAttribute('popover') &&
				popover.matches(':popover-open')
			) {
				toggle(e);
			}
		});
	};
</script>

<svelte:window on:load={setDialog()} />

<button popovertarget="demo-mobile-nav-vt">NAV</button>

<nav popover id="demo-mobile-nav-vt">
	<button class="demo-button" popovertarget="demo-mobile-nav-vt" popovertargetaction="hide">
		X
	</button>
	<ul>
		<li><a href="#">Home</a></li>
		<li><a href="#">About</a></li>
		<li><a href="#">Store</a></li>
		<li><a href="#">Contact</a></li>
	</ul>
</nav>

<style>
	#demo-mobile-nav-vt[popover] {
		margin: 0;
		block-size: 100vb;
		inline-size: 40vw;
		inset-inline-start: unset;
		inset-inline-end: 0;
		view-transition-name: slide-nav;
		background: rgba(0, 0, 0);
		color: #fff;
		padding: 20px;

		& button {
			position: absolute;
			right: 20px;
			top: 20px;
			width: 40px;
			aspect-ratio: 1;
		}

		& ul {
			display: flex;
			flex-direction: column;

			& li {
				display: block;
				padding: 10px 40px 10px 20px;
				text-decoration: unset;
				border-radius: 4px;
				text-transform: uppercase;
				font-size: 24px;
			}
		}
	}

	@keyframes slide-toggle {
		from {
			translate: 100vi;
		}
	}

	:global(::view-transition-old(slide-nav)) {
		animation: 300ms ease-in reverse forwards slide-toggle;
	}

	:global(::view-transition-new(slide-nav)) {
		animation: 300ms ease-out forwards slide-toggle;
	}

	button {
		border: 1px solid #fff;
		padding: 8px;
		border-radius: 4px;
	}
</style>
