<script>
	import ListC from '$lib/components/List.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { List } from '../utils/list';
</script>

<div class="list">
	<div class="list__nav">
		<Nav />
	</div>
	<div class="list__list">
		<ListC list={List} />
	</div>
</div>

<style lang="scss" scoped>
	.list {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;

		&__nav {
			height: 10vh;
		}

		&__list {
			padding: 1rem;
		}
	}
</style>
