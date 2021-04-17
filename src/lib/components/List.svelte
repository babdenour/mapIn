<script lang="ts">
	import { List } from '../../utils/list';

	export let list;
	// List.Alimentation.forEach(element => {
	// });
	console.log();
	const listItems = ['abde', 'bens', 'jean', 'doe'];
</script>

<!-- list hide listItems in Subtitle -->
<!-- alphabetical sort with bold -->

<div class="list">
	<p>abde</p>
	<ul>
		{#each listItems as items}
			<li>{items}</li>
		{/each}
	</ul>
</div>

<style lang="scss" scoped>
	@import '../../style/app.scss';

	.list {
		width: 100%;
		height: 57vh;
		display: flex;
		flex-direction: column;
		p,
		li {
			color: $red-primary;
			font-weight: bold;
			list-style-type: none;
		}
	}
</style>
