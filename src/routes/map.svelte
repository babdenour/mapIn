<script lang="ts">
	import Map from '$lib/components/Map.svelte';
	import Nav from '$lib/components/Nav.svelte';
</script>

<div class="map-page">
	<div class="nav">
		<Nav />
	</div>
	<div class="map">
		<Map />
	</div>
</div>

<style lang="scss">
	.map-page {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-content: flex-start;
	}
	.nav {
		width: 97vw;
		margin: 0.3rem;
	}
	.map {
		background-color: gray;
		padding: 0.3rem;
	}
</style>
