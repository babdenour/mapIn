<script lang="ts">
	import ModalAuth from '$lib/components/ModalAuth.svelte';
</script>

<div class="me-diriger">
	<div class="me-diriger__logo">
		<img src="../../static/mapIn-logo-1.png" alt="logo" />
	</div>
	<div class="me-diriger__title">
		<h1>
			<a href="/map"> me diriger </a>
		</h1>
		<!-- MOdal d'info user -->
		<!-- <ModalAuth /> -->
	</div>
</div>

<style lang="scss">
	@import '../style/app.scss';
	.me-diriger {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		width: 100vw;
		height: 57vh;

		&__logo {
			img {
				width: 42vw;
				height: 32vh;
			}
		}

		h1 {
			color: $red-primary;

			a {
				text-decoration: none;
				background-color: $blue-background;
				color: $red-primary;
				border-radius: 0.5em;
				border: 3px solid $red-secondary;

				padding: 0.7rem;
			}
			a:hover {
				border: 3px solid $red-primary;
				background-color: $red-secondary;
				color: $blue-background;
			}

			a:active {
				background-color: $blue-background;
				color: $red-primary;
			}
		}
	}
</style>
