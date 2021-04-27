<script>
	import ListC from '$lib/components/List.svelte';
	import Nav from '$lib/components/Nav.svelte';
</script>

<div class="list">
	<div class="list__nav">
		<Nav />
	</div>
	<div class="list__list">
		<ListC />
	</div>
</div>

<style lang="scss" scoped>
	.list {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-content: flex-start;

		&__nav {
			width: 97vw;
			margin: 0.3rem;
		}

		&__list {
			padding: 1rem;
		}
	}
</style>
