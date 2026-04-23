<script lang="ts">
	import { papers } from "$lib/data";

	const count = papers.filter((paper) => (paper.outlet ?? "").toLowerCase().includes("corl")).length;
</script>

<svelte:head>
	<title>CoRL - Transfer Learning Dashboard</title>
</svelte:head>

<main class="max-w-7xl mx-auto px-6 py-10">
	<h1 class="text-3xl font-bold tracking-tight">CoRL</h1>
	<p class="mt-2 text-muted-foreground">Conference on Robot Learning related entries in your dataset.</p>
	<div class="mt-6 rounded-lg border bg-card p-6 shadow-sm">
		<p class="text-sm text-muted-foreground">Matching papers</p>
		<p class="mt-1 text-3xl font-bold">{count}</p>
	</div>
</main>

