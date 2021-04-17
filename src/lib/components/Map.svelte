<script lang="ts">
	import Nav from './Nav.svelte';
</script>

<div class="map">
	<Nav />
	<p>Carte</p>
</div>

<style lang="scss" scoped>
	@import '../../style/app.scss';

	.map {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;

		p {
			color: $red-primary;
		}
	}
</style>
