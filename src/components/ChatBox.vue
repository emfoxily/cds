<template>
    <section class="chat-box">
        <div class="chat-box-list-container">
            <ul class="chat-box-list">
                <li
                    class="message karen"
                >

                    <p>
                        <span class="first-karen">
                            Hi, I purchased two gift cards and used them but I want a refund now because my food and coffee were cold.
                        </span>
                    </p>

                </li>

                <li
                    class="message karen"
                >
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
            "",
            "What do you mean that I can't get a refund????",
            "THIS IS ABSOLUTELY UNACCEPTABLE!!!!",
            "I DEMAND TO SPEAK TO YOUR MANAGER RIGHT THIS INSTANT!!!!!",
            "Fine.",
            "Happy Birthday, Ben!! I hope you enjoy the gift cards. :)"
        ]
    }),
    methods: {
        sendMessage(index) {
            this.messages.push({
                text: this.message,
                author: 'ben'
            })

            this.message = ""

           
            
            setTimeout(() => {
                console.log('Karen is typing...')
                this.messages.push({
                    text: this.karens[0],
                    author: 'karen'
                })

            }, 3000)

            // for (let i=0; i < this.karens.length; i++) {
            //      if (this.karens.length == 0) {
            //             break
            //     }
            // }


            this.karens.splice(index, 1)

        }
    }
}
</script>

<style scoped lang="scss">

.chat-box {
    border: .1em solid rgb(228, 228, 228);
    width: 25vw!important;
}

.chat-box-list-container {
    height: 25vw;
    overflow: auto;
}

.chat-box,
.chat-box-list {
    display: flex;
    flex-direction: column;
    list-style-type: none;
}

.chat-box-list {

    p {
         padding: .8em;
         border-radius: .5em;
         margin-right: 3em;
         font-size: .85em;
    }

     .ben {
        p {
            background-color: rgb(207, 33, 33);
            float: right;
            width: 12vw;
        }

        span {
            color: white;
        }
    }

    .karen {
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
}

button {
    width: 135px;
    background-color: rgb(207, 33, 33);
    border: .1em solid rgb(228, 228, 228);
    color: white;
    font-size: 1.25em;
}


</style>