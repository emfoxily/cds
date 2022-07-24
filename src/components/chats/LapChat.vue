<template>
    <MqResponsive target="xl">
        <section class="chat-box">
            <div class="chat-name">
                <img src="../../assets/karen.png" />
                <p>
                    Chat with <b>Karen</b>
                </p>
            </div>
            <div id="chat-box" class="chat-box-list-container">
                <ul class="chat-box-list">
                    <li
                        class="message Karen"
                    >

                        <div class="sender">
                            Karen
                        </div>

                        <p>
                            <span class="first-karen">
                                Hi, I purchased two gift cards and used them but I want a refund now because my food and coffee were cold.
                            </span>
                        </p>

                    </li>

                    <li
                        class="message Karen"
                    >

                        <div class="sender">
                            Karen
                        </div>

                        <p>
                            <span class="first-karen">
                                Can you help me with this? The gift card numbers are XXXXXXXXXXXX and XXXXXXXXXXXX.
                            </span>
                        </p>
                    </li>
                    <li 
                        class="message"
                        v-for="(message, idx) in messages"
                        :key="idx"
                        :class="message.author"
                    >

                    <div class="sender" v-if="message.author == 'Karen'">
                        {{ message.author }}
                    </div>

                        <p>
                            <span>
                                {{ message.text }}
                            </span>
                        </p>
                    </li>
                </ul>
            </div>
            <form @submit.prevent="sendMessage" class="chat-inputs">
                <input 
                    type="text" 
                    v-model="message" 
                    required
                />
                <button @submit="sendMessage">
                    ➜
                </button>
            </form>
        </section>
    </MqResponsive>
</template>

<script>

import { MqResponsive } from "vue3-mq";

export default {
    name: 'LapChat',
    components: {
        MqResponsive
    },
    data: () => ({
        message: '',
        messages: [],
        karens: [
            "You're not giving me a refund????",
            "THIS IS ABSOLUTELY UNACCEPTABLE!!!!",
            "I DEMAND TO SPEAK TO YOUR MANAGER RIGHT THIS INSTANT!!!!!"
        ],
        surprise: [
            "Oh, so YOU'RE the manager??? In that case...",
            "I guess I should let you know that the gift cards are real and for you...",
            "The first one is $25 for Starbucks and the second is $50 for DoorDash!",
            "Happy Birthday, Ben!! I hope you enjoy the gift cards. :)",
            "Oh, and scroll down for another surprise!"
        ]
    }),
    methods: {
        updateScroll() {
            for (let i = 0; i < this.karens.length; i++) {
                if (this.karens.length != 0){
                    var element = document.getElementById("chat-box");
                    element.scrollTop = element.scrollHeight - element.clientHeight;
                } else {
                    // element.scrollTop = 0;
                    this.scrollUpdate()
                }
            }
            
        },

        resetScroll() {
            var element = document.getElementById("chat-box");
            element.scrollTop = 0
            console.log(this.surprise)
        },

        scrollUpdate() {
            for (let i = 0; i < this.surprise.length; i++ ) {
                if (this.surprise.length != 0) {
                    var element = document.getElementById("chat-box");
                    element.scrollTop = element.scrollHeight - element.clientHeight;
                } else {
                    element.scrollTop = 0;
                }
            }
        },

        sendMessage(index) {

            this.messages.push({
                text: this.message,
                author: 'Ben'
            })

            this.message = ""

            setTimeout(() => {
                for (let i=0; i < this.karens.length; i++) {
                 if (this.karens.length > 0) {
                    console.log('Karen is typing...')
                    this.messages.push({
                        text: this.karens[0],
                        author: 'Karen'
                    })
                    setInterval(this.updateScroll,100);
                    this.karens.splice(index, 1)
                    return this.karens[i]
                } else {
                    //
                }
            }

            }, 1000)

                if (this.karens.length == 0 && this.surprise.length > 0) {
                    setTimeout(() => {
                        setInterval(this.scrollUpdate, 100)
                        this.messages.push({
                            text: this.surprise[0],
                            author: 'Karen'
                        })

                        this.surprise.splice(index, 0)

                        setTimeout(() => {
                            // setInterval(this.scrollUpdate, 100)
                            this.messages.push({
                            text: this.surprise[0],
                            author: 'Karen'
                            })
                            clearInterval(this.scrollUpdate)
                        }, 3000)

                        this.surprise.splice(index, 0)

                        setTimeout(() => {
                            // setInterval(this.scrollUpdate, 100)
                            this.messages.push({
                            text: this.surprise[1],
                            author: 'Karen'
                            })
                            clearInterval(this.scrollUpdate)
                        }, 7000)

                        this.surprise.splice(index, 1)

                        setTimeout(() => {
                            // setInterval(this.scrollUpdate, 100)
                            this.messages.push({
                            text: this.surprise[2],
                            author: 'Karen'
                            })
                            clearInterval(this.scrollUpdate)
                        }, 10000)

                        this.surprise.splice(index, 0)

                        setTimeout(() => {
                            // setInterval(this.scrollUpdate, 100)
                            this.messages.push({
                            text: this.surprise[3],
                            author: 'Karen'
                            })
                            this.surprise = []
                            clearInterval(this.scrollUpdate)
                        }, 10500)
                        
                    }, 1500)
                } else {
                    //
                }

            // if (this.surprise.length == 0) {
            //     this.resetScroll()
            // }

        }

    }
}
</script>

<style scoped lang="scss">

.chat-name {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(34, 34, 34);
    padding: 2em;
    border-radius: .5em .5em 0 0;
    border-bottom: .1em solid rgba(90, 90, 90, 0.363);
    font-size: 1.25em;
    // color: black;
}

.chat-name img {
    width: 7vw;
}

.chat-box {
    // border: .1em solid rgb(228, 228, 228);
    width: 35vw;
    background-color: rgb(20, 20, 20);
    padding: .5em;
    border-radius: .5em;
}

.chat-box-list-container {
    height: 45vw;
    overflow: auto;
    background-color: rgb(68, 68, 68);
    // border-radius: .5em .5em 0 0;
}

.chat-box,
.chat-box-list {
    display: flex;
    flex-direction: column;
    list-style-type: none;
}

.chat-box-list {

    .sender {
        font-size: 11px;
        margin-bottom: -1em;
        color: rgb(223, 223, 223)
    }

    p {
         padding: .8em;
         border-radius: .5em;
         margin-right: 3em;
         font-size: 1.15em;
         width:15vw;
    }

     .Ben {
        p {
            background-color: rgb(201, 59, 59);
            float: right;
        }

        span {
            color: white;
        }

        .sender {
            text-align: right;
            margin-right: 24.5em;
        }
    }

    .Karen {
        p {
            background-color: rgb(233, 233, 233);
            line-height: 2em;
            float: left;
            color: black;
        }

    }
}

.chat-box {
    border-radius: .5em;
}

.chat-inputs {
    display: flex;
}

input {
    line-height: 3;
    width: 25vw;
    border: .1em solid rgb(228, 228, 228);
    border-radius: 0 0 0 .5em;
    padding: .2em 2em;
}

button {
    width: 135px;
    background-color: rgb(201, 59, 59);
    border: .1em solid rgb(201, 59, 59);
    border-radius: 0 0 .5em 0;
    color: white;
    font-size: 1.25em;
    padding: .5em;
}

button:hover {
    cursor: pointer;
}

input {
    background-color: rgb(231, 231, 231);
}


</style>