<template>
  <NavBar />
  <HomePage />
</template>

<script>
import HomePage from './components/HomePage.vue'
import NavBar from './components/NavBar.vue'


export default {
  name: 'App',
  components: {
    HomePage,
    NavBar
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500;600&display=swap');

body {
  background-image: url('./assets/bg3.png');
  background-attachment: fixed;
  font-family: 'Open Sans', sans-serif;
}
</style>
