<template>
  <div class="addition">
    <h1>Создание пользователя</h1>
      <div class="createBlock">
        <form @submit.prevent="sendData()">
          <div class="form-control">
            <label for="name">Имя</label>
            <input type="text" class="customInput" id="name" v-model="user.name" placeholder="Enter name">
          </div>

          <div class="form-control">
            <label for="age">Возраст</label>
            <input type="text" class="customInput" id="age" v-model="user.age" placeholder="Enter age">
          </div>
          <input type="submit" class="send" value="Create">
        </form>
      </div>
  </div>

</template>

<script>
export default {
  name: 'addition',
  data: function(){
    return {
      user: {
        name: null,
        age: null,
      }
    }
  },
  methods: {
    sendData(){
      this.$store.dispatch('addUser',this.user);
      alert(`Пользователь ${this.user.name} успешно добавлен`);
      document.getElementById('name').value = '';
      document.getElementById('age').value = '';
    }
  }
};

</script>

<style scoped>
  .form-control {
      padding: 5px;
    } 
    .form-control label {
      display: block;
    }
    .createBlock{
      width: 30%;
      margin: 0 auto;
      padding: 30px;
      border: 3px outset aqua;
    }
    .send {
      width: 30%;
      margin-top: 20px;
      border-radius: 30px;
      border: none;
      background: linear-gradient(180deg, #02deee, #4e1286);
      padding: 7px 0;
      color: #2c3e50;
      font-family: cooper;
    }
    .send:hover{
      background: linear-gradient(180deg, #0de4f3, #310658);
    }
    .send:active{
      outline:none;
    }
    .customInput{
      width: 80%;
      border-radius: 5px;
      border: none;
      padding: 7px 0;
      background-color: #ffffff;
    }
    .customInput[type=text]{
        padding-left: 15px;
    }
    .customInput:focus{
        outline:none;
        background-color: rgb(192, 192, 192);
    }

</style>

