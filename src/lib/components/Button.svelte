<script>
export let label = '';
export let fct = () => {
   // window.location.href('/')
}
</script>

<button on:click={fct}    >
    {label}
</button>

<style lang="scss">
button {
    background-color: #cee1f2;
    color: #911c22;
    border-radius: 1em;
    border-color: #cd323c;
    font-weight: bold;
    font-size: large;

}
button:hover {
    border: 3px solid #911c22;
    background-color:#cd323c;
    color: #cee1f2;  
}

button:active {
    background-color:#cee1f2;
    color: #911c22;
}
</style>