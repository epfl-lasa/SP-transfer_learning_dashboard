<script lang="ts">
	import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "$lib/components/ui/collapsible";
	import {
		SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarMenuAction,
		SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton
	} from "$lib/components/ui/sidebar";
	import { ChevronRight } from "@lucide/svelte";

	let {
		items,
	}: {
		items: {
			title: string;
			url: string;
			// This should be `Component` after @lucide/svelte updates types
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			icon: any;
			isActive?: boolean;
			items?: {
				title: string;
				url: string;
			}[];
		}[];
	} = $props();
</script>

<SidebarGroup>
	<SidebarGroupLabel>Platform</SidebarGroupLabel>
	<SidebarMenu>
		{#each items as mainItem (mainItem.title)}
			<Collapsible open={mainItem.isActive}>
				{#snippet child({ props })}
					<SidebarMenuItem {...props}>
						<SidebarMenuButton tooltipContent={mainItem.title}>
							{#snippet child({ props })}
								<a href={mainItem.url} {...props}>
									<mainItem.icon />
									<span>{mainItem.title}</span>
								</a>
							{/snippet}
						</SidebarMenuButton>
						{#if mainItem.items?.length}
							<CollapsibleTrigger>
								{#snippet child({ props })}
									<SidebarMenuAction
										{...props}
										class="data-[state=open]:rotate-90"
									>
										<ChevronRight />
										<span class="sr-only">Toggle</span>
									</SidebarMenuAction>
								{/snippet}
							</CollapsibleTrigger>
							<CollapsibleContent>
								<SidebarMenuSub>
									{#each mainItem.items as subItem (subItem.title)}
										<SidebarMenuSubItem>
											<SidebarMenuSubButton href={subItem.url}>
												<span>{subItem.title}</span>
											</SidebarMenuSubButton>
										</SidebarMenuSubItem>
									{/each}
								</SidebarMenuSub>
							</CollapsibleContent>
						{/if}
					</SidebarMenuItem>
				{/snippet}
			</Collapsible>
		{/each}
	</SidebarMenu>
</SidebarGroup>
