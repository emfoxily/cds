<template>
    <MqResponsive target="xl">
        <nav>
            <ul> 
                <li>
                    <span>
                        Home
                    </span>
                </li>
                <li>
                    <span>
                        What We Do
                    </span>
                </li>

                <li>
                    <img alt="Customer Disservice logo" src="../../assets/logo.png" />
                </li>

                <li>
                    <span>
                        Our Team
                    </span>
                </li>
                <li>
                    <span>
                        Contact Us
                    </span>
                </li>
            </ul>
        </nav>
    </MqResponsive>
</template>

<script>
import { MqResponsive } from "vue3-mq";

export default {
    inject: ["mq"],
    name: 'LapNav',
    components: {
        MqResponsive
    }
}
</script>

<style scoped>
nav {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.608);
    backdrop-filter: blur(5px);
    font-size: .85em;
    font-weight: 600;
    color: rgb(201, 59, 59);
    text-transform: uppercase;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
}

nav ul {
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: space-around;
    padding: 0;
}

nav li {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
}

nav span {
    cursor: pointer;
}

nav img {
    width: 8vw;
}

</style>