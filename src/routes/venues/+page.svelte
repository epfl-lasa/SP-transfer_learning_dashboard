<script lang="ts">
	import { resolve } from "$app/paths";
</script>

<svelte:head>
	<title>Venues - Transfer Learning Dashboard</title>
</svelte:head>

<main class="max-w-7xl mx-auto px-6 py-10">
	<h1 class="text-3xl font-bold tracking-tight">Venues</h1>
	<p class="mt-2 text-muted-foreground">Select a venue to inspect related papers.</p>

	<div class="mt-6 grid gap-3 sm:grid-cols-3">
		<a class="rounded-lg border bg-card p-4 shadow-sm hover:bg-muted/30" href={resolve("/venues/corl")}>CoRL</a>
		<a class="rounded-lg border bg-card p-4 shadow-sm hover:bg-muted/30" href={resolve("/venues/arxiv")}>arXiv</a>
		<a class="rounded-lg border bg-card p-4 shadow-sm hover:bg-muted/30" href={resolve("/venues/others")}>Others</a>
	</div>
</main>

