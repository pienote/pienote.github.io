<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="main-body">
	{@render children()}
</div>

<style>
	.main-body {
		max-width: 1280px;
		width: 100%;
		margin-left: auto;
		margin-right: auto;
		font-family: Arial, Helvetica, sans-serif;
	}
</style>
