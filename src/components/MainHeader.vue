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
        margin: 9vh auto;
        width: 75vw;
        color: rgb(248, 248, 248);
        border: .1em solid rgb(207, 33, 33);
        border-radius: .5em;
        filter: drop-shadow(5px 5px 5px rgba(51, 51, 51, 0.404));
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

    @media only screen and (max-width: 415px) {
        header {
            width: 100%!important;
        }

        header h2 {
            margin-left: -2.5vw!important;
            width: 100%;
            text-align: center;
        }

        .container img {
            margin: 0 -10vw auto!important;
            width: 125%!important;
        }
    }

    @media only screen and (max-width: 1000px) {
        header {
            width: 75vw;
            margin: 7vh auto;
        }
        
        header h2 {
            font-size: 1em;
            margin: 4vh auto;
        }

        .container {
            width: 60vw;
            padding: 2em 4.5em;
            display: flex;
            flex-direction: column-reverse;
        }

        .container img {
            width: 50%;
            height: 100%;
            margin: 0 auto;
            margin-bottom: 5vh;
        }
    }

     @media only screen and (min-width: 1024px) {
        header {
            width: 90vw;
            margin: -4vh 0 9vh auto;
            height: 38vh!important;
        }
        
        header h2 {
            font-size: 1em;
            margin: 25% auto;
            width: 40%;
        }

        .container {
            width: 80vw;
            padding: 2em 5em;
            display: flex;
            /* flex-direction: column-reverse; */
        }

        .container img {
            width: 30.5vw;
            height: 100%;
            margin: 0 auto;
            margin-bottom: 5vh;
        }
    }

</style>