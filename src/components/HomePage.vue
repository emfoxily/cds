<template>
  <div class="container">
    <MainHeader />
    <div class="account">
      <h3>
        Welcome, Benjamin!
      </h3>
      <ChatBox />
    </div>
  </div>
</template>

<script>
import MainHeader from './MainHeader.vue'
import ChatBox from './ChatBox.vue'

export default {
  name: 'HomePage',
  components: {
    MainHeader,
    ChatBox
  }
}
</script>

<style scoped>

  .container {
    margin: 0 auto;
    width: 75vw;
  }

  .account {
    background-color: rgb(255, 255, 255);
    padding: 5em;
    margin: -8vh auto;
  }

</style>
