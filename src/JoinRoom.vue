<script>
export default {
  name: 'Join Room',
  data() {
    return {
      username: null,
      roomID: null,
    }
  },
  methods: {
    async onJoinRoom() {
      console.log(this.username, this.roomID)
    },
  },
}
</script>

<template>
  <div class="container">
    <h1 class="title-join">Join Chatroom</h1>
    <div class="container-input">
      <input
        type="text"
        class="input-text"
        placeholder="Username"
        v-model="username"
      />
      <input
        type="text"
        class="input-text"
        placeholder="RoomID"
        v-model="roomID"
      />
    </div>
    <button class="btn-join" @click="onJoinRoom">JOIN</button>
  </div>
</template>

<style scoped>
.container {
  max-width: 360px;
  margin: 0 auto;
  padding: 0 10px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.btn-join {
  background-color: #5db075;
  min-height: 51px;
  font-size: 16px;
  border-radius: 100px;
  cursor: pointer;
  margin-top: 150px;
  border: 0;
  color: white;
}

.btn-join:focus {
  border: 0;
}

.container-input {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.title-join {
  font-weight: 600;
  font-size: 30px;
  text-align: center;
  margin-bottom: 30px;
}

.input-text {
  background: #f6f6f6;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  height: 50px;
  font-size: 16px;
  padding: 0 10px;
}

.input-text::placeholder {
  color: #bdbdbd;
}

.input-text:focus {
  outline: none;
}
</style>
