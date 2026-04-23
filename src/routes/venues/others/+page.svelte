<script lang="ts">
	import { papers } from "$lib/data";

	const known = new Set(["corl", "arxiv"]);
	const count = papers.filter((paper) => {
		const outlet = (paper.outlet ?? "").toLowerCase();
		if (!outlet) return false;
		for (const venue of known) {
			if (outlet.includes(venue)) return false;
		}
		return true;
	}).length;
</script>

<svelte:head>
	<title>Other Venues - Transfer Learning Dashboard</title>
</svelte:head>

<main class="max-w-7xl mx-auto px-6 py-10">
	<h1 class="text-3xl font-bold tracking-tight">Other Venues</h1>
	<p class="mt-2 text-muted-foreground">Entries that are not classified as CoRL or arXiv.</p>
	<div class="mt-6 rounded-lg border bg-card p-6 shadow-sm">
		<p class="text-sm text-muted-foreground">Matching papers</p>
		<p class="mt-1 text-3xl font-bold">{count}</p>
	</div>
</main>

