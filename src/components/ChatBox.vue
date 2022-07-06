<template>
    <section class="chat-box">
        <div class="chat-name">
            Chat with <b>Karen</b>
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
            "I DEMAND TO SPEAK TO YOUR MANAGER RIGHT THIS INSTANT!!!!!",
            "Oh, so YOU'RE the manager??? In that case...",
            "You should know the gift cards are real.",
            "First one is $25 for Starbucks and the second is $50 for DoorDash!",
            "Happy Birthday, Ben!! I hope you enjoy the gift cards. :)",
        ]
    }),
    methods: {
        updateScroll() {
            for (let i = 0; i < this.karens.length; i++) {
                if (this.karens.length > 0 || this.$scrolled == false){
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
                    this.karens.splice(index, 1)
                    setInterval(this.updateScroll,100);
                    return this.karens[i]
                } else {
                    this.$scrolled = true;
                    this.updateScroll();
                    break;
                }
            }

            }, 1000)

        }

    }
}
</script>

<style scoped lang="scss">

.chat-name {
    background-color: rgb(233, 233, 233);
    padding: 2em;
    border-radius: .5em .5em 0 0;
}

.chat-box {
    border: .1em solid rgb(228, 228, 228);
    width: 25vw!important;
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
            width: 12vw;
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
            width: 12vw;
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


</style>