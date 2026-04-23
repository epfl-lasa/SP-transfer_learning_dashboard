<script lang="ts">
	import { resolve } from "$app/paths";
	import {
		SidebarGroup,
		SidebarGroupContent,
		SidebarMenu,
		SidebarMenuButton,
		SidebarMenuItem
	} from "$lib/components/ui/sidebar";
	import type { Component, ComponentProps } from "svelte";

	let {
		ref = $bindable(null),
		items,
		...restProps
	}: {
		items: {
			title: string;
			url: string;
			icon: Component;
		}[];
	} & ComponentProps<typeof SidebarGroup> = $props();

	const resolvePath = resolve as (pathname: string) => string;
	const toResolvedHref = (url: string) => (url.startsWith("/") ? resolvePath(url) : url);
</script>

<SidebarGroup bind:ref {...restProps}>
	<SidebarGroupContent>
		<SidebarMenu>
			{#each items as item (item.title)}
				<SidebarMenuItem>
					<SidebarMenuButton size="sm">
						{#snippet child({ props })}
							<a href={toResolvedHref(item.url)} {...props}>
								<item.icon />
								<span>{item.title}</span>
							</a>
						{/snippet}
					</SidebarMenuButton>
				</SidebarMenuItem>
			{/each}
		</SidebarMenu>
	</SidebarGroupContent>
</SidebarGroup>
