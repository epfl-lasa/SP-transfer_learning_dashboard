<script lang="ts">
	import { papers } from "$lib/data";
</script>

<svelte:head>
	<title>Papers - Transfer Learning Dashboard</title>
</svelte:head>

<main class="max-w-7xl mx-auto px-6 py-10">
	<h1 class="text-3xl font-bold tracking-tight">Explore Papers</h1>
	<p class="mt-2 text-muted-foreground">
		Browse the paper corpus used by the dashboard.
	</p>

	<div class="mt-6 rounded-lg border bg-card p-6 shadow-sm">
		<p class="text-sm text-muted-foreground">Total papers indexed</p>
		<p class="mt-1 text-3xl font-bold">{papers.length}</p>
	</div>
</main>

