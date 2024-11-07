<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>{data.meta?.title || 'Lunchable'}</title>
</svelte:head>

<div class="flex flex-col items-center justify-center w-3/4 h-full gap-20 mx-auto">
	<a href={data.href} class="w-2/3 mb-16"
		><img src="/Lunchables.svg" alt="Lunchables" class="w-full" /></a
	>

	{#if data.meta}
		<h1 class="font-black tracking-tighter text-center uppercase text-9xl">
			{@html data.meta.description}
		</h1>
	{/if}

	{#if data.error}
		<aside role="alert">
			<h2>Failed to load presentation</h2>
			<p>{data.error}</p>
		</aside>
	{/if}
</div>

<style>
</style>
