<script lang="ts" module>
	import {
		ArrowLeftRight,
		BookOpen, Bot, LayoutDashboard, Search,
		TrendingUp, Workflow
	} from "@lucide/svelte";

	const data = {
		navMain: [
			{
				title: "Overview",
				url: "/",
				icon: LayoutDashboard,
			},
			{
				title: "Explore Papers",
				url: "/papers",
				icon: Search,
			},
			{
				title: "Venues",
				url: "/venues",
				icon: Bot,
				items: [
					{ title: "CoRL", url: "/venues/corl" },
					{ title: "arXiv", url: "/venues/arxiv" },
					{ title: "Others", url: "/venues/others" },
				],
			},
			{
				title: "Taxonomy",
				url: "/taxonomy",
				icon: BookOpen,
				items: [
					{ title: "Introduction to TL", url: "/taxonomy#introduction" },
					{ title: "Transfer Types", url: "/taxonomy#transfer-types" },
					{ title: "Transfer Domains", url: "/taxonomy#transfer-domains" },
					{ title: "Transfer Modes", url: "/taxonomy#transfer-modes" },
					{ title: "Methods and Applications", url: "/taxonomy#methods" },
					{ title: "Quality Assessment", url: "/taxonomy#quality" },
				],
			},
			{
				title: "Trends",
				url: "/trends",
				icon: TrendingUp,
			},
			{
				title: "Compare",
				url: "/compare",
				icon: ArrowLeftRight,
				isActive: false,
				disabled: true,
			},
			{
				title: "Pipeline",
				url: "/pipeline",
				icon: Workflow,
				isActive: false,
				disabled: true,
			},
		],
	};
</script>

<script lang="ts">
	import { resolve } from "$app/paths";
	import NavMain from "./nav-main.svelte";
	import {
		Sidebar,
		SidebarContent,
		SidebarFooter,
		SidebarHeader,
		SidebarMenu,
		SidebarMenuButton,
		SidebarMenuItem,
	} from "$lib/components/ui/sidebar";
	import { Command } from "@lucide/svelte";
	import type { ComponentProps } from "svelte";

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar> = $props();
</script>

<Sidebar bind:ref variant="inset" {...restProps}>
	<SidebarHeader>
		<SidebarMenu>
			<SidebarMenuItem>
				<SidebarMenuButton size="lg">
					{#snippet child({ props })}
						<a {...props} href={resolve("/")}>
							<div
									class="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg"
							>
								<Command class="size-4" />
							</div>
							<div class="grid flex-1 text-start text-sm leading-tight">
								<span class="truncate font-medium">TL Robotics</span>
								<span class="truncate text-xs">LASA · EPFL</span>
							</div>
						</a>
					{/snippet}
				</SidebarMenuButton>
			</SidebarMenuItem>
		</SidebarMenu>
	</SidebarHeader>
	<SidebarContent>
		<NavMain items={data.navMain} />
	</SidebarContent>
	<SidebarFooter>
	</SidebarFooter>
</Sidebar>