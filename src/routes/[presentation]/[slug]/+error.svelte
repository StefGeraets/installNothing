<script>
	import { page } from '$app/stores';
</script>

<div class="flex flex-col items-center justify-center w-3/4 h-full gap-20 mx-auto">
	<a
		href={`/${($page.error && 'presentation' in $page.error && $page.error?.presentation) || ''}`}
		class="w-2/3 mb-16"><img src="/Lunchables.svg" alt="Lunchables" class="w-full" /></a
	>

	<aside role="alert">
		<h2>Failed to load slide</h2>
		<p>
			<span class="text-gray-600">{$page.status}: </span>{$page.error?.message || 'Unknown error'}
		</p>
	</aside>
</div>
