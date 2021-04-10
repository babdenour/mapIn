<script>
	import EncardPub from '$lib/components/EncardPub.svelte';
	import '../app.scss';
</script>

<div class="encard encard-top">
	<EncardPub/>
</div>

<main>
	<slot />
</main>

<div class="encard encard-bottom">
	<EncardPub/>
</div>


<style lang="scss">
	main {
	width: 100%;
	height: 100%	;
	text-align: center;
	padding: 1em;
	margin: 0 auto;
}
.encard {
	margin: 0 auto;
	display: block;
	position: relative;
};

.encard-top {
	top: 0;
}

.encard-bottom {
	bottom: 0;
}

</style>