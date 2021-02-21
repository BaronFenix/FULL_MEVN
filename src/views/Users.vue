<template>
  <div class="USERS">
    <h1>Список пользователей</h1>
      <div class="container">
    <div v-for="user in users" :key="user.id">
      <GetUsers user />
        <div class="userCard">
          <p> {{ user.name }} </p>
          <p> {{ user.age }} </p>
        </div>
      </div>

    </div>



  </div>
</template>

<script>
import { mapState } from "vuex";
import GetUsers from '@/components/GetUsers.vue'
export default {
  name: "Users",
  components: {
    GetUsers,
  },
  computed:mapState({
    users: state => state.users
  }),
  mounted(){
      this.$store.dispatch('getPosts');
      
  },

};

</script>
<style scoped>
  .container{
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    flex-direction: row;
    border: 1px solid lightseagreen;

  }
  .userCard{
        background: linear-gradient(90deg, rgba(72, 14, 128, 0.712), rgba(78, 10, 38, 0.712));
        border: 3px outset lightseagreen;
        width: 22rem;
        margin: 30px auto;
        color: azure;
        font-family: 'comic sans MS';
  }

</style>