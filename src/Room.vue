<script>
import arrowUp from './assets/arrow-up.svg'

export default {
  name: 'Room',
  data() {
    return { logo: { arrowUp }, newChat: null }
  },
  methods: {
    async onSendChat() {
      console.log(this.newChat)
      this.newChat = null
    },
  },
}
</script>

<template>
  <div class="container">
    <div class="container-header">
      <button class="btn-exit">Exit</button>
      <h1 class="room-title">ROOM ID</h1>
    </div>
    <div class="container-chat">
      <div class="chat">
        <div>
          <span>sender</span>
          <div class="chat-content from-other-chat">
            <p class="chat-text">Lorem ipsum dolor sit amet.</p>
            <span class="from-other-chat-triangle"></span>
          </div>
        </div>
        <div>
          <div class="chat-content owned-chat">
            <p class="chat-text">Lorem ipsum dolor sit amet.</p>
            <span class="owned-chat-triangle"></span>
          </div>
        </div>
        <div>
          <div class="chat-content owned-chat">
            <p class="chat-text">Lorem ipsum dolor sit amet.</p>
            <span class="owned-chat-triangle"></span>
          </div>
        </div>
      </div>
    </div>
    <form class="container-send-chat" @submit.prevent="onSendChat">
      <div class="wrapper-send-chat">
        <input
          type="text"
          class="input-text"
          v-model="newChat"
          placeholder="Message here..."
        />
        <button type="submit" class="btn-send-chat">
          <img :src="logo.arrowUp" />
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.btn-send-chat {
  position: absolute;
  right: -33px;
  bottom: 5px;
  background-color: #5db075;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
  border: 0;
  color: white;
}

.wrapper-send-chat {
  width: 330px;
  right: 20px;
  position: relative;
}
.container-send-chat {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding: 30px 0;
}
.input-text {
  background: #f6f6f6;
  border: 1px solid #e8e8e8;
  border-radius: 100px;
  height: 50px;
  font-size: 16px;
  padding: 0 20px;
  width: 100%;
}

.chat-text {
  position: relative;
  z-index: 2;
}
.chat-content {
  padding: 10px;
  border-radius: 8px;
  position: relative;
}

.owned-chat {
  background: #5db075;
  color: white;
  margin-bottom: 50px;
}

.from-other-chat {
  background: #f6f6f6;
  border: 1px solid #e8e8e8;
  margin-bottom: 30px;
}

.owned-chat-triangle {
  width: 0px;
  height: 0px;
  right: 0;
  bottom: -23px;
  border-style: solid;
  border-width: 0 60px 65px 0px;
  border-color: transparent transparent #5db075 transparent;
  transform: rotate(180deg);
  display: inline-block;
  position: absolute;
}

.from-other-chat-triangle {
  width: 0px;
  height: 0px;
  left: 1px;
  bottom: -23px;
  border-style: solid;
  border-width: 0 60px 65px 0px;
  border-color: transparent transparent #f6f6f6 transparent;
  transform: rotate(90deg);
  display: inline-block;
  position: absolute;
}

.container-chat {
  display: flex;
  flex-direction: column;
}
.container-header {
  height: 100px;
  display: flex;
  position: relative;
  align-items: center;
}

.room-title {
  width: 100%;
  position: absolute;
  text-align: center;
  margin: 0;
}
.container {
  max-width: 360px;
  margin: 0 auto;
  padding: 0 10px;
  max-height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
}

.btn-exit {
  position: relative;
  z-index: 10;
  background-color: white;
  border: 0;
  cursor: pointer;
  color: #5db075;
  justify-self: flex-start;
  font-weight: 500;
  font-size: 16px;
}
</style>
