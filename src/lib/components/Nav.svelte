<script lang="ts"></script>

<div class="nav">
    <button class="nav__button">R</button>
    <!-- recherche and map have to be hidden -->
    <button class="nav__button">L</button>
    <!-- active while List button not clicked -->
    <input class="nav__input" name="recherche" placeholder="🔍" type="text">
    <input class="nav__input" type="submit">
</div>
<!-- autocomplet for the list, recherche active-->

<style lang="scss">

    .nav {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: #cee1f2;
    width: fit-content;
    border-radius: 0.3rem;

    &__button {
        border: 1px solid #cd323c;
        margin: 0.3rem;   
    };

    &__input {
        border: 1px solid #cd323c;
        border-radius: 0.3rem;
        margin: 0.3rem;
    };
};
</style>