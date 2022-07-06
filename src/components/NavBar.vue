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
    top: .5%;
    left: 12.5%;
    width: 74.25vw;
    /* background-image: radial-gradient(farthest-corner at 40px 40px, */
      /* rgba(223, 223, 223, 0.342) 0%, rgba(218, 218, 218, 0.103) 100%); */
    background-color: rgba(197, 197, 197, 0.747);
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

nav img {
    width: 5.2vw;
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


@media only screen and (max-width: 1000px) {

    nav {
        font-size: .8em;
        width: 75.15%;
    }

    nav img {
        width: 90%;
    }

}

</style>