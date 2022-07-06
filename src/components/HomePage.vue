<template>
  <div class="container">
    <MainHeader />
    <div class="account">
      <div class="header">
        <h3>
          Welcome, <b style="color: rgb(207, 33, 33); font-weight: 600;">Benjamin</b>!
        </h3>
        <h4>
          Logout
        </h4>
      </div>
      <div class="account-wrapper">
        <div>
          this is a placeholder
        </div>
        <div class="karen-container">
          <div class="message">
            You have <b style="color:rgb(207, 33, 33)">1</b> Karen waiting to be yelled at.
          </div>
          <ChatBox />
        </div>
      </div>
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
    /* background-color: rgb(255, 255, 255); */
    background-color: rgba(223, 223, 223, 0.247);
    backdrop-filter: blur(5px);
    padding: 5em;
    margin: -7vh auto;
    border-radius: .5em;
  }

  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3em;
    border-bottom: .1em solid black;
    padding: 0 0 1.5em 0;
  }

  .header h3 {
    font-size: 1.5em;
    font-weight: normal;
  }

  .message {
    padding: 1em;
  }

  .account-wrapper {
    display: flex;
    justify-content: space-between;
    padding: 0 2em;
  }

</style>
