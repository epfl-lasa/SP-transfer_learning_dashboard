<script lang="ts">
	import { resolve } from "$app/paths";
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuItem, DropdownMenuSeparator,
		DropdownMenuTrigger
	} from "$lib/components/ui/dropdown-menu";
	import {
		SidebarGroup,
		SidebarGroupLabel,
		SidebarMenu, SidebarMenuAction,
		SidebarMenuButton,
		SidebarMenuItem
	} from "$lib/components/ui/sidebar";
	import { useSidebar } from "$lib/components/ui/sidebar/index.js";
	import { Ellipsis, Folder, Share, Trash2 } from "@lucide/svelte";

	let {
		projects,
	}: {
		projects: {
			name: string;
			url: string;
			// This should be `Component` after @lucide/svelte updates types
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			icon: any;
		}[];
	} = $props();

	const sidebar = useSidebar();
	const resolvePath = resolve as (pathname: string) => string;
	const toResolvedHref = (url: string) => (url.startsWith("/") ? resolvePath(url) : url);
</script>

<SidebarGroup class="group-data-[collapsible=icon]:hidden">
	<SidebarGroupLabel>Projects</SidebarGroupLabel>
	<SidebarMenu>
		{#each projects as item (item.name)}
			<SidebarMenuItem>
				<SidebarMenuButton>
					{#snippet child({ props })}
						<a href={toResolvedHref(item.url)} {...props}>
							<item.icon />
							<span>{item.name}</span>
						</a>
					{/snippet}
				</SidebarMenuButton>
				<DropdownMenu>
					<DropdownMenuTrigger>
						{#snippet child({ props })}
							<SidebarMenuAction showOnHover {...props}>
								<Ellipsis />
								<span class="sr-only">More</span>
							</SidebarMenuAction>
						{/snippet}
					</DropdownMenuTrigger>
					<DropdownMenuContent
						class="w-48"
						side={sidebar.isMobile ? "bottom" : "right"}
						align={sidebar.isMobile ? "end" : "start"}
					>
						<DropdownMenuItem>
							<Folder class="text-muted-foreground" />
							<span>View Project</span>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Share class="text-muted-foreground" />
							<span>Share Project</span>
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<Trash2 class="text-muted-foreground" />
							<span>Delete Project</span>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		{/each}
		<SidebarMenuItem>
			<SidebarMenuButton>
				<Ellipsis />
				<span>More</span>
			</SidebarMenuButton>
		</SidebarMenuItem>
	</SidebarMenu>
</SidebarGroup>
