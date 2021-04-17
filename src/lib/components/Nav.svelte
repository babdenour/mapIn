<script lang="ts"></script>

<div class="nav">
	<button class="nav__button">R</button>
	<!-- recherche and map have to be hidden -->
	<button class="nav__button"><a href="/list">L</a></button>
	<!-- active while List button not clicked -->
	<input class="nav__input" name="recherche" placeholder="🔍" type="text" />
	<input class="nav__input" type="submit" />
</div>

<!-- autocomplet for the list, recherche active-->
<style lang="scss" scoped>
	@import '../../style/app.scss';
	.nav {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		background-color: $blue-background;
		width: fit-content;
		border-radius: 0.3rem;

		&__button {
			border: 1px solid $red-primary;
			margin: 0.3rem;
		}

		&__input {
			border: 1px solid $red-primary;
			border-radius: 0.3rem;
			margin: 0.3rem;
		}
	}
</style>
