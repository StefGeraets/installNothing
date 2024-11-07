<script lang="ts">
	import { fly, scale, slide } from 'svelte/transition';

	export let chrome: string = '';
	export let firefox: string = '';
	export let safari: string = '';
	export let shipIt: boolean = false;
	export let tryIt: boolean = false;
	export let checkIt: boolean = false;

	export let globalScore: string = '';
	export let inUse: boolean = false;

	let showScore: boolean = false;
</script>

<button class="relative" on:click={() => (showScore = !showScore)}>
	<h1 class="mt-12 text-5xl font-bold">🚢 ship score 🚢</h1>
	{#if showScore}
		<div
			class="absolute inset-x-0 p-4 font-mono text-6xl font-black rounded-lg shadow-2xl bg-gradient-to-br from-yellow-200 to-yellow-400 -rotate-3 top-8 text-gray-950"
			in:scale={{ opacity: 0, start: 4 }}
		>
			{shipIt ? 'SHIP IT' : tryIt ? 'TRY IT' : checkIt ? 'CHECK IT' : ''}
		</div>
	{/if}
</button>

{#if showScore}
	<div class="flex gap-16 mt-20">
		<div
			class="flex flex-col items-center justify-center {chrome === '' ? 'opacity-20' : ''}"
			in:fly={{ y: 20, duration: 750, delay: 100 }}
		>
			<img src="/chrome.svg" alt="chrome" class="w-28 aspect-square" />
			{#if chrome !== ''}
				<span
					class="px-2 py-1 -m-6 text-3xl font-black rounded-md shadow-lg bg-gradient-to-br from-yellow-200 to-green-400 text-gray-950"
					>{chrome}</span
				>
			{:else}
				<span
					class="px-2 py-1 -m-6 text-3xl font-black rounded-md shadow-lg bg-gradient-to-br from-red-200 to-red-700 text-gray-950"
					>X</span
				>
			{/if}
		</div>
		<div
			class="flex flex-col items-center justify-center {firefox === '' ? 'opacity-20' : ''}"
			in:fly={{ y: 20, duration: 750, delay: 300 }}
		>
			<img src="/ff.svg" alt="fireforx" class="w-28 aspect-square" />
			{#if firefox !== ''}
				<span
					class="px-2 py-1 -m-6 text-3xl font-black rounded-md shadow-lg bg-gradient-to-br from-yellow-200 to-green-400 text-gray-950"
					>{firefox}</span
				>
			{:else}
				<span
					class="px-2 py-1 -m-6 text-3xl font-black rounded-md shadow-lg bg-gradient-to-br from-red-200 to-red-700 text-gray-950"
					>X</span
				>
			{/if}
		</div>
		<div
			class="flex flex-col items-center justify-center {safari === '' ? 'opacity-20' : ''}"
			in:fly={{ y: 20, duration: 750, delay: 500 }}
		>
			<img src="/safari.svg" alt="safari" class="w-28 aspect-square" />
			{#if safari !== ''}
				<span
					class="px-2 py-1 -m-6 text-3xl font-black rounded-md shadow-lg bg-gradient-to-br from-yellow-200 to-green-400 text-gray-950"
					>{safari}</span
				>
			{:else}
				<span
					class="px-2 py-1 -m-6 text-3xl font-black rounded-md shadow-lg bg-gradient-to-br from-red-200 to-red-700 text-gray-950"
					>X</span
				>
			{/if}
		</div>
	</div>
{/if}

{#if inUse && showScore}
	<div
		class="absolute flex flex-col items-center left-[12vw] -rotate-12"
		in:fly={{ x: -200, delay: 1500 }}
	>
		<span class="text-4xl font-semibold">used in</span>
		<span class="font-mono font-light tracking-tighter text-9xl">VUE-UI</span>
	</div>
{/if}

{#if globalScore && showScore}
	<div
		class="absolute flex flex-col items-center right-[15vw] rotate-12"
		in:fly={{ x: 200, delay: 1000 }}
	>
		<span class="font-mono font-light tracking-tighter text-9xl">{globalScore}</span>
		<span class="text-4xl font-semibold">Global Usage</span>
	</div>
{/if}

{#if showScore}
	<div class="flex flex-col items-center right-[15vw] mt-[20vh]" in:fly={{ x: 200, delay: 1000 }}>
		<slot></slot>
	</div>
{/if}
