<script lang="ts">
	import '../app.css';
	import { onNavigate, goto } from '$app/navigation';
	import { page } from '$app/stores';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	const navigate = (key: KeyboardEvent) => {
		switch (key.code) {
			case 'ArrowRight':
			case 'Space':
				if ($page.data.slides && $page.data.meta) {
					goto(`${$page.data.meta.presentation}/${$page.data.slides[0].slug}`);
				} else if ($page.data.latest) {
					goto($page.data.latest);
				} else if ($page.data.next) {
					goto($page.data.next);
				}
				break;
			case 'ArrowLeft':
				if ($page.data.previous) {
					goto($page.data.previous);
				} else {
					goto('/');
				}
				break;
			default:
				break;
		}
	};
</script>

<svelte:window on:keydown={navigate} />

<main class="w-screen h-screen relative overflow-hidden text-gray-100 bg-gray-950">
	<slot />
</main>
