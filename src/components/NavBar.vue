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
    margin: 0 auto;
    width: 75vw;
    background-color: rgba(202, 202, 202, 0.15);
    backdrop-filter: blur(5px);
    font-size: .85em;
    font-weight: 600;
    color: rgb(207, 33, 33);
    text-transform: uppercase;
    padding: .2em;
    border-radius: .8em;
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