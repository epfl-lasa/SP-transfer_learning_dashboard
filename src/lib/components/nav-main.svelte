<script lang="ts">
	import { resolve } from "$app/paths";
	import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "$lib/components/ui/collapsible";
	import {
		SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarMenuAction,
		SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton, SidebarMenuBadge
	} from "$lib/components/ui/sidebar";
	import { ChevronRight } from "@lucide/svelte";
	import type { Component } from "svelte";

	let {
		items,
	}: {
		items: {
			title: string;
			url: string;
			icon: Component;
			isActive?: boolean;
			disabled?: boolean;
			items?: {
				title: string;
				url: string;
			}[];
		}[];
	} = $props();

	const resolvePath = resolve as (pathname: string) => string;
	const toResolvedHref = (url: string) => (url.startsWith("/") ? resolvePath(url) : url);
</script>

<SidebarGroup>
	<SidebarGroupLabel>Platform</SidebarGroupLabel>
	<SidebarMenu>
		{#each items as mainItem (mainItem.title)}
			{@const Icon = mainItem.icon}
			<Collapsible open={mainItem.isActive}>
				{#snippet child({ props })}
					<SidebarMenuItem {...props}>
						<SidebarMenuButton
							tooltipContent={mainItem.title}
							aria-disabled={mainItem.disabled ? "true" : undefined}
							class={mainItem.disabled ? "text-sidebar-foreground/70" : ""}
						>
							{#snippet child({ props })}
								<a
									{...props}
									href={mainItem.disabled ? undefined : toResolvedHref(mainItem.url)}
									tabindex={mainItem.disabled ? -1 : undefined}
								>
									<Icon />
									<span>{mainItem.title}</span>
								</a>
							{/snippet}
						</SidebarMenuButton>
						{#if mainItem.disabled}
							<SidebarMenuBadge class="text-sidebar-foreground/60">Soon</SidebarMenuBadge>
						{/if}
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
											<SidebarMenuSubButton href={toResolvedHref(subItem.url)}>
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
