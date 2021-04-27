<script lang="ts">
	import EncardPub from '$lib/components/EncardPub.svelte';
	import Header from '$lib/Header.svelte';
</script>

<div class="encard encard-top">
	<EncardPub />
</div>

<main class="main">
	<slot />
</main>

<div class="encard encard-bottom">
	<EncardPub />
</div>

<style lang="scss">
	@import '../style/app.scss';

	.main {
		min-height: 57vh;
		display: flex;
		align-items: flex-start;
		justify-content: center;
		text-align: center;
		margin: 1rem;
	}
	.encard {
		margin: auto;
		display: block;
		position: relative;
	}

	.encard-top {
		top: 0;
	}

	.encard-bottom {
		bottom: 0;
	}
</style>
