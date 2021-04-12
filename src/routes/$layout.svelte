<script lang="ts">
	import EncardPub from '$lib/components/EncardPub.svelte';
	import Header from '$lib/Header.svelte';
	import '../app.scss';
</script>

<div class="encard encard-top">
	<EncardPub/>
</div>

<div class="header">
	<Header/>
</div>

<main class="main">
	<slot />
</main>

<div class="encard encard-bottom">
	<EncardPub/>
</div>


<style lang="scss">
.main {
	width: 100%;
	height: 100%	;
	text-align: center;
	padding: 0;
	margin: 0;
};
.encard {
	margin: auto;
	display: block;
	position: relative;
};

.encard-top {
	top: 0;
};

.encard-bottom {
	bottom: 0;
};

</style>