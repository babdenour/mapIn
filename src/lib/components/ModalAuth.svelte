<script lang="ts"></script>

<div class="modal">
	<form action="">
		<label for="email">Entrez votre email</label>
		<input type="email" placeholder="email" />
		<label for="age">Entrez votre age</label>
		<input name="age" type="number" placeholder="age" />
		<label for="sex">Entrez votre type</label>
		<select name="sexe" id="sexe">
			<option value="female">female</option>
			<option value="male">male</option>
		</select>
	</form>
</div>

<style lang="scss" scoped>
	.modal,
	form {
		display: flex;
		flex-direction: column;
	}
</style>
