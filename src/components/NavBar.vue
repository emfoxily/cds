<template>
    <nav>
        <ul>
            
            <li>
                Home
            </li>
            <li>
                What We Do
            </li>

            <li>
                <img alt="Customer Disservice logo" src="../assets/logo3.png" />
            </li>

            <li>
                Our Team
            </li>
            <li>
                Contact Us
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
    top: 1.5%;
    left: 12.5%;
    width: 74.4vw;
    /* background-image: radial-gradient(farthest-corner at 40px 40px, */
      /* rgba(223, 223, 223, 0.342) 0%, rgba(218, 218, 218, 0.103) 100%); */
    background-color: rgba(223, 223, 223, 0.747);
    backdrop-filter: blur(5px);
    font-size: .85em;
    font-weight: 600;
    color: rgb(207, 33, 33);
    text-transform: uppercase;
    /* padding: .2em; */
    border-radius: .8em;
    z-index: 1;
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
</style>