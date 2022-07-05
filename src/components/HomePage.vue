<template>
  <div class="container">
    <MainHeader />
    <div class="account">
      <div class="header">
        <h3>
          Welcome, <b>Benjamin</b>!
        </h3>
        <h4>
          Logout
        </h4>
      </div>
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
    margin: -7vh auto;
    border-radius: .5em;
  }

  .header {
    display: flex;
    justify-content: space-between;
  }

  .header h3 {
    font-size: 1.5em;
    font-weight: normal;
  }

</style>
