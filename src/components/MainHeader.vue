<template>
    <header>
        <div class="container">
            <img src="../assets/cds-messenger.gif" />
            <h2>
                Customers aren't the only ones that need support.
            </h2>
        </div>
    </header>
</template>

<script>
export default {
    name: 'MainHeader'
}
</script>

<style scoped>

    header {
        /* background-color: rgb(207, 33, 33); */
        background-image: radial-gradient(farthest-corner at 40px 40px,
      rgb(253, 91, 91) 0%, rgb(207, 33, 33) 100%);
        margin: 10vh auto;
        width: 75vw;
        color: rgb(248, 248, 248);
        border-radius: .5em;
    }

    header h2 {
        margin: 25vh auto;
    }

    .container {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        padding: 4em 8em;
    }

    .container img {
        border-radius: .5em;
        filter: drop-shadow(10px 10px 8px rgb(119, 23, 23));
    }
</style>