<template>
    <MqResponsive target="xxl">
        <div class="account">
            <div class="header">
                <h3>
                Welcome, <b style="color: rgb(201, 59, 59); font-weight: 600;">Benjamin</b>!
                </h3>
                <h4>
                Logout
                </h4>
            </div>
            <div class="account-wrapper">
                <div class="table-wrap">
                <table>
                    <thead>
                    <th>
                        Your statistics as of: <b>July 24, 2022</b>
                    </th>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                        <img src="../../assets/line-graph.png" />
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
                <div class="karen-container">
                    <div class="message">
                        You have <b style="color:rgb(201, 59, 59)">1</b> Karen waiting to be yelled at.
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
    </MqResponsive>
</template>

<script>
    import { MqResponsive } from "vue3-mq";
    import ChatBox from '../../components/ChatBox.vue';

    export default {
        name: 'DeskAcc',
        components: {
            MqResponsive,
            ChatBox
        }
    }

</script>

<style scoped>

  .account {
    background-color: rgba(0, 0, 0, 0.608);
    backdrop-filter: blur(5px);
    /* border: .1em solid rgb(223, 223, 223); */
    border-radius: .5em;
    color: white;
    /* padding: 5em; */
    width: 65vw;
    margin: 3vh auto;
  }

  .header {
    display: flex;
    justify-content: space-between;
    border-bottom: .1em solid rgba(51, 51, 51, 0.116);
    padding: 5em;
  }

  .header h3 {
    font-size: 1.5em;
    font-weight: normal;
  }

  .header h4 {
    cursor: pointer;
  }

  .header h4:hover {
    color: rgb(201, 59, 59);
    transition: .5s;
  }

  .message {
    padding: 1em;
  }

  .account-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2em;
  }

  table {
    table-layout: fixed;
    border-radius: .5em;
    background-color: rgb(214, 214, 214);
  }

  table img {
    width: 30vw;
  }

  table thead {
    display: table;
    background-color: rgb(201, 59, 59);
    text-align: center;
    color: white;
    border-radius: .5em .5em 0 0;
    padding: .5em;
    width: 96.8%;
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
    color: rgb(201, 59, 59);
  }

  .account-management li {
    cursor: pointer;
  }

  .message {
    text-align: center;
  }

</style>