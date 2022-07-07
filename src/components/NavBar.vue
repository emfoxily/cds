<template>
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
                <img alt="Customer Disservice logo" src="../assets/logo3.png" />
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
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
nav {
    position: fixed;
    background-color: rgba(216, 216, 216, 0.418);
    backdrop-filter: blur(5px);
    font-size: .85em;
    font-weight: 600;
    color: rgb(207, 33, 33);
    text-transform: uppercase;
    /* padding: .2em; */
    border-radius: .8em;
    z-index: 1;
    border: .1em solid rgba(173, 173, 173, 0.281);
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

@media only screen and (min-width: 1920px) {

    nav {
        position:fixed;
        margin: -13vh 5%!important;
        font-size: 1em!important;
        width: 88vw!important;
    }
    nav img {
        width: 70%;
    }

}

@media only screen and (min-width: 1366px) {

    nav {
        position:fixed;
        margin: -13vh 5%;
        font-size: 1em;
        width: 87.5vw;
    }
    nav img {
        width: 70%;
    }

}

@media only screen and (min-width: 1024px) {

    nav {
        position:fixed;
        margin: -7vh 5%;
        font-size: .8em;
        width: 86.5vw;
    }
    nav img {
        width: 70%;
    }

}

@media only screen and (max-width: 415px) {
    nav {
        color: transparent;
        width: 80vw;
        margin: -11vh 6vw;
    }

    nav img {
        width: 30vw;
    }
}

</style>