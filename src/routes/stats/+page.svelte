<script lang="ts">
	export let data;

	const { dashboard } = data;

	const format = (number: number) => {
		return new Intl.NumberFormat().format(number);
	};
</script>

<div class="w-1/3 pt-10 mx-auto">
	<div class="flex justify-between gap-3">
		<h1>{dashboard.percentage_total.mobile}%</h1>
		<h2>{format(dashboard.total.mobile)} users</h2>
	</div>
	<div class="flex justify-between gap-3">
		<h1>{dashboard.percentage_total.desktop}%</h1>
		<h2>{format(dashboard.total.desktop)} users</h2>
	</div>
</div>
