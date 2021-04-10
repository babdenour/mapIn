<script lang="ts">
	import Button from '$lib/components/Button.svelte';
</script>


<h1><Button label = "me diriger"/></h1>

<style lang="scss">
	h1 {
		color: #911c22;
		text-transform: uppercase;
		font-size: 4rem;
		font-weight: 100;
		line-height: 1.1;
		margin: 4rem auto;
		max-width: 14rem;
	}

	@media (min-width: 480px) {
		h1 {
			max-width: none;
		}

	}
</style>
