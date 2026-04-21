<script lang="ts">
	import '../app.css';
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbPage } from '$lib/components/ui/breadcrumb';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { SidebarProvider, SidebarInset, SidebarTrigger } from '$lib/components/ui/sidebar/';

	let { children } = $props();
</script>

<SidebarProvider>
	<AppSidebar />
	<SidebarInset>
		<header class="flex h-16 shrink-0 items-center gap-2">
			<div class="flex items-center gap-2 px-4">
				<SidebarTrigger class="-ms-1" />
				<Separator orientation="vertical" class="me-2 data-[orientation=vertical]:h-4" />
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbPage>Transfer Learning in Robotics</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</div>
		</header>
		<div class="flex flex-1 flex-col gap-4 p-4 pt-0">
			{@render children()}
		</div>
	</SidebarInset>
</SidebarProvider>