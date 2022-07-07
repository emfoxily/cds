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
  }
}
</script>

<style scoped>
 .container {
    margin: 16vh auto!important;
  }

  .account {
    background-color: rgba(223, 223, 223, 0.247);
    backdrop-filter: blur(5px);
    /* padding: 5em; */
    border: .1em solid rgb(223, 223, 223);
    border-radius: .5em;
  }

  .header {
    display: flex;
    justify-content: space-between;
    border-bottom: .1em solid rgba(51, 51, 51, 0.116);
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
    padding: 0 2em;
  }

  table {
    table-layout: fixed;
    border-radius: .5em;
    background-color: rgb(255, 255, 255);
  }

  table thead {
    display: table;
    background-color: rgb(207, 33, 33);
    text-align: center;
    color: white;
    border-radius: .5em .5em 0 0;
    padding: .5em;
  }

  thead th {
    font-weight: 400;
  }

  .account-management {
    border-top: .1em solid rgba(51, 51, 51, 0.116);
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

 
  @media only screen and (max-width: 415px) {

    .container {
      width: 100%!important;
    }

    .header {
      flex-direction: column;
      text-align: center;
      padding: 4em;
    }

    .account table {
      margin: 4vh auto;
      width: 100%!important;
    }

    table img {
      width: 100%;
    }

    thead {
      width: 95.5%!important;
    }

    .account-wrapper {
      width: 100%!important;
      padding: 0;
    }

    .account-management {
      width: 76vw!important;
      font-size: .75em;
    }
  }

  @media only screen and (max-width: 1024px) {
    .container {
      margin-top: 12vh;
      width: 90vw;
    }

    .header {
      /* flex-direction: column; */
      text-align: center;
      margin-top: -3vh;
    }

    table {
      width: 75vw;
      margin-top: 2vh;
    }

    table img {
      width: 100%;
    }

    thead {
      width: 98%;
    }

    .account {
      margin-top: -7vh;
      padding: 5em;
    }

    .account-wrapper {
      width: 100%;
      padding: 0;
      flex-direction: column;
      margin: 0 auto;
    }

    .account-management {
      width: 90%;
      margin: 0 auto;
    }

    .karen-container {
      margin: 5vh auto;
    }

    .karen-container .message {
      text-align: center;
    }
  }

  @media only screen and (max-width: 1366px) {
    .container {
      margin-top: 12vh;
      width: 90vw;
    }

    .header {
      /* flex-direction: column; */
      text-align: center;
      margin-top: -3vh;
    }

    table {
      width: 100%;
      margin-top: 12.5vh;
    }

    table img {
      width: 100%;
    }

    thead {
      width: 96.8%;
      font-size: 1.35em!important;
    }

    .account {
      margin-top: 5vh;
      padding: 5em;
    }

    .account-wrapper {
      width: 70%;
      padding: 0;
      flex-direction: column;
      margin: 0 auto;
    }

    .account-management {
      width: 90%;
      margin: 0 auto;
    }

    .karen-container {
      margin: 5vh auto;
    }

    .karen-container .message {
      text-align: center;
    }
  }

</style>
