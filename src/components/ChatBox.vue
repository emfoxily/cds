<template>
    <section class="chat-box">
        <div class="chat-box-list-container">
            <ul class="chat-box-list">
                <li 
                    class="message"
                    v-for="(message, idx) in messages"
                    :key="idx"
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
                Send
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


            this.karens.splice(index, 1)

        }
    }
}
</script>

<style scoped>

.chat-box,
.chat-box-list {
    display: flex;
    flex-direction: column;
    list-style-type: none;
}

.chat-box {
    width: 50vw;
    border-radius: .5em;
}

.chat-inputs {
    display: flex;
}

input {
    line-height: 3;
    width: 100%;
    border: .1em solid black;
}

button {
    width: 135px;
}


</style>