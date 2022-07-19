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
        /* margin: 0 auto; */
        /* width: 100%; */
    }

    .container img {
        border-radius: .5em;
        filter: drop-shadow(10px 10px 8px rgb(119, 23, 23));
    }

    @media only screen and (min-width: 1921px) {
        header {
            width: 90vw;
            margin: 0 auto;
            height: auto;
        }
        
        header h2 {
            font-size: 2em;
            margin: 25% auto;
            width: 55%;
        }

        .container {
            width: 80vw;
            padding: 2em 6em 0 5em;
            display: flex;
            /* flex-direction: column-reverse; */
        }

        .container img {
            width: 28vw;
            height: 100%;
            margin: 4vh auto;
            margin-bottom: 5vh;
        }
    }

     @media only screen and (min-width: 1601px) and (max-width: 1920px) {
        header {
            width: 90vw;
            margin: 0 auto;
            height: auto;
        }
        
        header h2 {
            font-size: 2em;
            margin: 25% auto;
            width: 55%;
        }

        .container {
            width: 80vw;
            padding: 2em 6em 0 5em;
            display: flex;
            /* flex-direction: column-reverse; */
        }

        .container img {
            width: 28vw;
            height: 100%;
            margin: 4vh auto;
            margin-bottom: 5vh;
        }
    }

    @media only screen and (min-width: 1367px) and (max-width: 1600px) {
        header {
            width: 90vw;
            margin: 0 auto;
            height: 85vh;
        }
        
        header h2 {
            font-size: 2em;
            margin: 25% auto;
            width: 55%;
        }

        .container {
            width: 80vw;
            padding: 2em 6em 0 5em;
            display: flex;
            /* flex-direction: column-reverse; */
        }

        .container img {
            width: 28vw;
            height: 100%;
            margin: 4vh auto;
            margin-bottom: 5vh;
        }
    }

    @media screen and (min-width: 1025px) and (max-width: 1366px) {
        header {
            width: 98.5%;
            margin: 5em auto!important;
            height: auto;
        }
        
        header h2 {
            font-size: 2em;
            margin: 25% auto;
            width: 55%;
        }

        .container {
            width: 80vw;
            padding: 2em 6em 0 5em;
            display: flex;
            /* flex-direction: column-reverse; */
        }

        .container img {
            width: 30vw;
            height: 100%;
            margin: 4vh auto;
            margin-bottom: 5vh;
        }
    }

         @media only screen and (max-width: 1024px) {
        header {
            width: 90vw;
            margin: -4vh 0 9vh auto;
            height: auto;
        }
        
        header h2 {
            font-size: 2em;
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
            width: 32vw;
            height: 100%;
            margin: 5vh auto;
            margin-bottom: 5vh;
        }
    }

    @media only screen and (max-width: 415px) {
        header {
            width: 112%;
            margin: 0 auto;
            height: 70vh;
        }

        header h2 {
            margin:2vh auto;
            width: 80%;
            text-align: center;
        }

        .container {
            margin: 0 -15%;
            flex-direction: column-reverse;
            width: 90%;
        }

        .container img {
            margin: 1vh auto;
            width: 75vw;
        }
    }

   

    

</style>