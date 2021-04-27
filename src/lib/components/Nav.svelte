<script lang="ts"></script>

<div class="nav">
	<button class="nav__button"
		><a href="/map"><img src="../../static/icone-gps.png" alt="gps" /></a></button
	>
	<!-- recherche and map have to be hidden -->
	<button class="nav__button"
		><a href="/list"><img src="../../static/icone-liste.png" alt="logo" /></a></button
	>
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
		align-items: center;
		justify-self: stretch;
		background-color: $blue-background;
		width: fit-content;
		border-radius: 1rem;
		padding: 0.3rem;

		&__button {
			margin: 0.3rem;

			img {
				width: 3rem;
				height: 3rem;
			}
		}

		&__input {
			height: 2.8rem;
			border: 3px solid $red-primary;
			border-radius: 0.3rem;
			padding: 0.3rem;
			margin: 0.3rem;
		}
	}
</style>
