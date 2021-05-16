<script lang="ts">
	import { listTotal } from '../../utils/list';

	import { createEventDispatcher } from 'svelte';

	let list = listTotal;

	// List.Alimentation.forEach(element => {
	// });
	const dispatch = createEventDispatcher();

	const handleClickItem = (item) => {
		dispatch('click-item', { item });
	};
</script>

<!-- list hide listItems in Subtitle -->
<!-- alphabetbetical sort with bold -->

<div class="list">
	{#each list as listItems}
		<div class="list__div-category">
			<ul>
				<p>{listItems.category} ⬇</p>
				<br />
				{#each listItems.alphabet as items}
					<li on:click={() => handleClickItem(items.lettre)}>
						<h4>{items.lettre}</h4>
						<!-- {#each items.brand as item}
						<li on:click={() => handleClickItem(item)}>{item}</li>
						{/each} -->
						<br />
					</li>
				{/each}
			</ul>
		</div>
	{/each}
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

		&__div-category {
			width: 20vh;
			overflow: auto;
		}
	}
</style>
