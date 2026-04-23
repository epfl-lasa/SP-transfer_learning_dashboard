<script lang="ts">
	import { getStats } from "$lib/data";

	const stats = getStats();
</script>

<svelte:head>
	<title>Trends - Transfer Learning Dashboard</title>
</svelte:head>

<main class="max-w-7xl mx-auto px-6 py-10">
	<h1 class="text-3xl font-bold tracking-tight">Trends</h1>
	<p class="mt-2 text-muted-foreground">Quick indicators for the current dataset.</p>

	<div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
		<div class="rounded-lg border bg-card p-6 shadow-sm">
			<p class="text-sm text-muted-foreground">Unique applications</p>
			<p class="mt-1 text-3xl font-bold">{stats.uniqueApplications}</p>
		</div>
		<div class="rounded-lg border bg-card p-6 shadow-sm">
			<p class="text-sm text-muted-foreground">Unique transfer domains</p>
			<p class="mt-1 text-3xl font-bold">{stats.uniqueDomains}</p>
		</div>
		<div class="rounded-lg border bg-card p-6 shadow-sm">
			<p class="text-sm text-muted-foreground">Real robot experiments</p>
			<p class="mt-1 text-3xl font-bold">{stats.withRealRobot}</p>
		</div>
	</div>
</main>

