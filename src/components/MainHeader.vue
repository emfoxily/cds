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
        background-image: radial-gradient(farthest-corner at 40px 40px,
      rgb(253, 91, 91) 0%, rgb(207, 33, 33) 100%);
        color: rgb(248, 248, 248);
        border: .1em solid rgb(207, 33, 33);
        border-radius: .5em;
        filter: drop-shadow(5px 5px 5px rgba(51, 51, 51, 0.404));
    }

    .container {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        /* padding: 4em 8em; */
        /* margin: 0 auto!important; */
        /* width: 100%!important; */
    }

    .container img {
        border-radius: .5em;
        filter: drop-shadow(10px 10px 8px rgb(119, 23, 23));
    }

    @media only screen and (max-width: 415px) {
        header {
            width: 100%;
            height: 70vh!important;
        }

        header h2 {
            margin:2vh auto!important;
            width: 80%!important;
            text-align: center;
        }

        .container {
            margin: 0 -16%;
            flex-direction: column-reverse;
            /* width: 90%!important; */
        }

        .container img {
            margin: 1vh auto!important;
            width: 75vw!important;
        }
    }

     @media only screen and (max-width: 1024px) {
        header {
            width: 90vw;
            margin: -4vh 0 9vh auto;
            height: 38vh;
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