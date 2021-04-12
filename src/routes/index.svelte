<script lang="ts">
</script>

<h1>
	<a href="/map"> me diriger </a>
</h1>

<style lang="scss">
	@import '../style/app.scss';

	h1 {
		color: $red;
	}
	a {
		text-decoration: none;
		background-color: #cee1f2;
		color: $red;
		border-radius: 0.5em;
		border-color: #cd323c;
		padding: 0.7rem;
	}
	a:hover {
		border: 3px solid $red;
		background-color: #cd323c;
		color: #cee1f2;
	}

	a:active {
		background-color: #cee1f2;
		color: #911c22;
	}

	@media (min-width: 480px) {
		h1 {
			max-width: none;
		}
	}
</style>
