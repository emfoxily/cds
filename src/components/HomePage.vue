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
          <table>
            <thead>
              <th>
                Your statistics as of: <b>July 24, 2022</b>
              </th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src="../assets/line-graph.png" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="karen-container">
          <div class="message">
            You have <b style="color:rgb(207, 33, 33)">1</b> Karen waiting to be yelled at.
          </div>
          <ChatBox />
        </div>
      </div>
      <div class="account-management">
        <h3>
          Manage your Account
        </h3>
        <br />
        <ul>
          <li>
            Update Name
          </li>
          <li>
            Change Password
          </li>
          <li>
            Privacy Policy
          </li>
          <li>
            Delete Account
          </li>
        </ul>
      </div>
    </div>
    <HappyBirthday />
  </div>
</template>

<script setup>

  // import { useMq } from "vue3-mq"
  import { inject, onMounted } from "vue";

  // const mq = useMq()

</script>

<script>
import MainHeader from './MainHeader.vue'
import ChatBox from './ChatBox.vue'
import HappyBirthday from './HappyBirthday.vue'

export default {
  name: 'HomePage',
  components: {
    MainHeader,
    ChatBox,
    HappyBirthday
  },
  inject: ["mq"],
  computed: {
    displayText() {
      return this.mq.current === 'mobile' ? 'I am small' : 'I am large'
    }
  },
  template: `
    {{ displayText }}
  `,
  methods: {
    setup() {
    const updateBreakpoints = inject("updateBreakpoints");

      onMounted(() => {
        updateBreakpoints({
            mobile: 450,
            tablet: 900,
            laptop: 1250,
            desktop: Infinity
          })
      })
    }
  }
}
</script>

<style scoped>

@media only screen and (max-width: 1920px) {
  .container {
    margin: 0 auto;
    margin-bottom: 10vh;
    width: 75vw;
  }

  .account {
    /* background-color: rgb(255, 255, 255); */
    background-color: rgba(223, 223, 223, 0.247);
    backdrop-filter: blur(5px);
    padding: 5em;
    margin: -7vh auto;
    border: .1em solid rgb(223, 223, 223);
    border-radius: .5em;
    /* filter: drop-shadow(5px 5px 5px rgba(51, 51, 51, 0.404)); */
    margin-bottom: 2vh;
  }

  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3em;
    border-bottom: .1em solid rgba(51, 51, 51, 0.116);
    padding: 0 0 1.5em 0;
  }

  .header h3 {
    font-size: 1.5em;
    font-weight: normal;
  }

  .header h4 {
    cursor: pointer;
  }

  .header h4:hover {
    color: rgb(207, 33, 33);
    transition: .5s;
  }

  .message {
    padding: 1em;
  }

  .account-wrapper {
    display: flex;
    justify-content: space-between;
    padding: 0 2em;
  }

  table {
    margin-top: 6vh;
    width: 90%;
    /* border: .1em solid black; */
    table-layout: fixed;
    border-radius: .5em;
    background-color: rgb(255, 255, 255);
  }

  table thead {
    display: table;
    background-color: rgb(207, 33, 33);
    width: 97.6%;
    text-align: center;
    color: white;
    border-radius: .5em .5em 0 0;
    padding: .5em;
  }

  thead th {
    font-weight: 400;
  }

  .account-management {
    margin-top: -15vh;
    border-top: .1em solid rgba(51, 51, 51, 0.116);
    width: 34vw;
    padding: 2em;
  }

  .account-management h3 {
    text-decoration: underline;
  }

  .account-management ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding: 0;
    color: rgb(207, 33, 33);
  }

  .account-management li {
    cursor: pointer;
  }
}

  @media only screen and (max-width: 1000px) {

      .container {
        margin-top: 10vh;
        /* width: 78.5%; */
      }

      .account{
        margin-top: -5vh;
        margin-left: .4vw
      }
      .account-wrapper {
        flex-direction: column;
        margin-top: -5vh;
        width: 100%;
      }
      .account img {
          width: 55vw;
      }

      table {
        width: 100%;
        padding: .25em;
        margin-left: -3.4vw;
      }

      thead {
        width: 97.15%!important;
      }

      .account-management {
        margin: 10vh auto 0;
        width: 90%;
        font-size: .8em!important;
      }

      .karen-container {
        margin-top: 5vh;
      }

      .message {
        text-align: center;
        margin-left: -8vw;
      }
    }

  @media only screen and (max-width: 415px) {

    .container {
      margin-top: 12vh!important;
      width: 90vw!important;
    }

    .header {
      flex-direction: column;
      text-align: center;
    }

    table {
      width: 85.8vw;
      margin-left: -18vw;
    }

    table img {
      width: 102%!important;
    }

    thead {
      width: 95%!important;
    }

    .account-wrapper {
      width: 100%!important;
      padding: 0;
    }

    .account-management {
      width: 73vw!important;
      margin: 5vh auto -5vh -8vh!important;
    }
  }

</style>
