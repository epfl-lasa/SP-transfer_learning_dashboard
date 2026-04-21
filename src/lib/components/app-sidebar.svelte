<script lang="ts" module>
	import {
		ArrowLeftRight,
		BookOpen, Bot, ChartPie, Frame, LayoutDashboard, LifeBuoy, Map, Search, Send,
		TrendingUp, Workflow
	} from "@lucide/svelte";

	const data = {
		user: {
			name: "Daniel",
			email: "m@example.com",
			avatar: "/avatars/shadcn.jpg",
		},
		navMain: [
			{
				title: "Overview",
				url: "#",
				icon: LayoutDashboard,
			},
			{
				title: "Explore Papers",
				url: "#",
				icon: Search,
			},
			{
				title: "Venues",
				url: "#",
				icon: Bot,
				items: [
					{
						title: "CoRL",
						url: "#",
					},
					{
						title: "arXiv",
						url: "#",
					},
					{
						title: "Others",
						url: "#",
					},
				],
			},
			{
				title: "Taxonomy",
				url: "#",
				icon: BookOpen,
				items: [
					{
						title: "Introduction to TL",
						url: "#",
					},
					{
						title: "Transfer Types",
						url: "#",
					},
					{
						title: "Transfer Domains",
						url: "#",
					},
					{
						title: "Transfer Modes",
						url: "#",
					},
					{
						title: "Methods and Applications",
						url: "#",
					},
					{
						title: "Quality Assessment",
						url: "#",
					},
				],
			},
			{
				title: "Trends",
				url: "#",
				icon: TrendingUp,
			},
			{
				title: "Compare",
				url: "#",
				icon: ArrowLeftRight,
				isActive: false,
				disabled: true,
			},
			{
				title: "Pipeline",
				url: "#",
				icon: Workflow,
				isActive: false,
				disabled: true,
			},
		],
		navSecondary: [
			{
				title: "Support",
				url: "#",
				icon: LifeBuoy,
			},
			{
				title: "Feedback",
				url: "#",
				icon: Send,
			},
		],
		projects: [
			{
				name: "Design Engineering",
				url: "#",
				icon: Frame,
			},
			{
				name: "Sales & Marketing",
				url: "#",
				icon: ChartPie,
			},
			{
				name: "Travel",
				url: "#",
				icon: Map,
			},
		],
	};
</script>

<script lang="ts">
	import NavMain from "./nav-main.svelte";
	import NavUser from "./nav-user.svelte";
	import {
		Sidebar,
		SidebarContent, SidebarFooter,
		SidebarHeader,
		SidebarMenu,
		SidebarMenuButton,
		SidebarMenuItem
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
						<a href="##" {...props}>
							<div
								class="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg"
							>
								<Command class="size-4" />
							</div>
							<div class="grid flex-1 text-start text-sm leading-tight">
								<span class="truncate font-medium">Acme Inc</span>
								<span class="truncate text-xs">Enterprise</span>
							</div>
						</a>
					{/snippet}
				</SidebarMenuButton>
			</SidebarMenuItem>
		</SidebarMenu>
	</SidebarHeader>
	<SidebarContent>
		<NavMain items={data.navMain} />
		<!--
		<NavProjects projects={data.projects} />
		<NavSecondary items={data.navSecondary} class="mt-auto" />
		-->
	</SidebarContent>
	<SidebarFooter>
		<NavUser user={data.user} />
	</SidebarFooter>
</Sidebar>
