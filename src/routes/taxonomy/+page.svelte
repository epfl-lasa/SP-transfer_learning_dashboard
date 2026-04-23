<script lang="ts">
	import { taxonomies } from "$lib/data";

	const sections = [
		{
			id: "introduction",
			title: "Introduction to TL",
			description: "Overview of the transfer learning concepts tracked in this dashboard.",
			items: [] as string[]
		},
		{
			id: "transfer-types",
			title: "Transfer Types",
			description: "High-level transfer categories used to annotate papers.",
			items: taxonomies.transfer_type
		},
		{
			id: "transfer-domains",
			title: "Transfer Domains",
			description: "Source-to-target domain transitions observed across papers.",
			items: taxonomies.transfer_domain
		},
		{
			id: "transfer-modes",
			title: "Transfer Modes",
			description: "Modes describing how transfer is executed in practice.",
			items: taxonomies.transfer_mode
		},
		{
			id: "methods",
			title: "Methods and Applications",
			description: "Application labels currently available in the taxonomy.",
			items: taxonomies.application
		},
		{
			id: "quality",
			title: "Quality Assessment",
			description: "Paper quality scores and confidence scales used in review.",
			items: [`paper_rating: ${taxonomies.paper_rating.min}-${taxonomies.paper_rating.max}`, `relevance: ${taxonomies.relevance.min}-${taxonomies.relevance.max}`, `confidence: ${taxonomies.confidence.min}-${taxonomies.confidence.max}`]
		}
	];
</script>

<svelte:head>
	<title>Taxonomy - Transfer Learning Dashboard</title>
</svelte:head>

<main class="max-w-7xl mx-auto px-6 py-10">
	<h1 class="text-3xl font-bold tracking-tight">Taxonomy</h1>
	<p class="mt-2 text-muted-foreground">
		All taxonomy subsections live on this page; sidebar links jump directly to each section.
	</p>

	<div class="mt-8 space-y-8">
		{#each sections as section (section.id)}
			<section id={section.id} class="scroll-mt-24 rounded-lg border bg-card p-6 shadow-sm">
				<h2 class="text-xl font-semibold tracking-tight">{section.title}</h2>
				<p class="mt-2 text-sm text-muted-foreground">{section.description}</p>
				{#if section.items.length > 0}
					<ul class="mt-4 list-disc space-y-1 pl-5 text-sm">
						{#each section.items as value (value)}
							<li>{value}</li>
						{/each}
					</ul>
				{/if}
			</section>
		{/each}
	</div>
</main>

