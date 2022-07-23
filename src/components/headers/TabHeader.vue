<template>
    <MqResponsive target="lg">
        <header>
            <div class="container">
                <img src="../../assets/cds-messenger.gif" />
                <h2>
                    Customers aren't the only ones that need support.
                </h2>
            </div>
        </header>
    </MqResponsive>
</template>

<script>
import { MqResponsive } from "vue3-mq";

export default {
    name: 'TabHeader',
    components: {
        MqResponsive
    }
}
</script>

<style scoped>

    header {
        background-image: radial-gradient(farthest-corner at 40px 40px,
      rgb(201, 59, 59) 0%, rgb(64, 5, 5) 100%);
        color: rgb(248, 248, 248);
        border: .1em solid rgb(0, 0, 0);
        border-radius: .5em;
        filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.404));
        width: 95vw;
        margin: -6vh auto;
    }

    .container {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        padding: 4em;
        /* margin: 0 auto; */
        /* width: 100%; */
    }

    .container img {
        border-radius: .5em;
        filter: drop-shadow(10px 10px 8px rgba(0, 0, 0, 0.544));
        width: 30vw;
    }

   
    .container h2 {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .5em;
    }
    

</style>