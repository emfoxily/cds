<template>
    <section class="chat-box">
        <div class="chat-name">
            <img src="../assets/karen.png" />
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

                <div class="sender">
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
</template>

<script>
export default {
    name: 'ChatBox',
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
    background-color: rgb(233, 233, 233);
    padding: 2em;
    border-radius: .5em .5em 0 0;
    border-bottom: .1em solid rgba(90, 90, 90, 0.363);
}

.chat-name img {
    width: 3vw;
}

.chat-box {
    border: .1em solid rgb(228, 228, 228);
    width: 25vw;
    background-color: rgb(202, 202, 202);
    padding: .5em;
    border-radius: .5em;
}

.chat-box-list-container {
    height: 25vw;
    overflow: auto;
    background-color: white;
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
        color: rgb(90, 90, 90)
    }

    p {
         padding: .8em;
         border-radius: .5em;
         margin-right: 3em;
         font-size: .85em;
    }

     .Ben {
        p {
            background-color: rgb(207, 33, 33);
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
    background-color: rgb(207, 33, 33);
    border: .1em solid rgb(207, 33, 33);
    border-radius: 0 0 .5em 0;
    color: white;
    font-size: 1.25em;
    padding: .5em;
}

button:hover {
    cursor: pointer;
}


    @media only screen and (max-width: 1920px) {

        .chat-box-list-container {
            overflow-x: hidden;
        }

        .chat-box {
            width: 25vw;
            height: 60vh;
        }

        .chat-name {
            font-size: 1em;
            padding: 1em;
        }

        .chat-name img {
            width: 5vw;
        }

        .chat-box-list-container {
            height: 100%;
            padding: 1em;
        }

        .Karen, .Ben {
            p {
                width: 15.5vw;
                font-size: 1em;
            }

        }

        .sender {
            font-size: .75em;
        }

        .Karen {
            margin-left: -1.5em;
        }

        .Ben {

            margin-right: -4.5em;

            .sender {
                margin-left: 15em;
            }
        }

        input {
            width: 100%;
        }
    }

    @media only screen and (max-width: 1366px) {

        .chat-box-list-container {
            overflow-x: hidden;
        }

        .chat-box {
            width: 35vw;
            height: 60vh;
        }

        .chat-name {
            font-size: 1em;
            padding: 1em;
        }

        .chat-name img {
            width: 5vw;
        }

        .chat-box-list-container {
            height: 100%;
            padding: 1em;
        }

        .Karen, .Ben {
            p {
                width: 15.5vw;
                font-size: 1em;
            }

        }

        .sender {
            font-size: .75em;
        }

        .Karen {
            margin-left: -1.5em;
        }

        .Ben {

            margin-right: -4.5em;

            .sender {
                margin-left: 15em;
            }
        }

        input {
            width: 100%;
        }
    }


     @media only screen and (max-width: 1024px) {

        .chat-box-list-container {
            overflow-x: hidden;
        }

        .chat-box {
            width: 45vw;
            height: 50vh;
        }

        .chat-name img {
            width: 7vw;
        }

        .chat-box-list-container {
            height: 100%;
        }

        .Karen, .Ben {
            p {
                width: 20vw;
            }

        }

        .Karen {
            margin-left: -1.5em;
        }

        .Ben {

            margin-right: -1.85em;

            .sender {
                margin-left: 15em;
            }
        }

        input {
            width: 100%;
        }
    }

       @media only screen and (max-width: 415px) {
         .chat-box {
            width: 95.5%;
            height: auto;
            // margin-left: -15vw;
            font-size: .8em;
        }

        .chat-box-list-container {
            overflow-x: hidden;
        }

        .Karen, .Ben {
            p {
                width: 50vw;
            }

        }

        .Karen {
            margin-left: -2em;
        }

        .Ben {

            margin-right: -1.85em;

            .sender {
                margin-left: 2em;
            }
        }

    }


</style>