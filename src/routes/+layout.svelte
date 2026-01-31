<script lang="ts">
	import favicon from "$lib/assets/favicon.svg";

	let { children } = $props();
	import "../app.css";
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex flex-col justify-center items-center h-screen">
	{@render children()}
</div>
