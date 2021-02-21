<template>
<div class="Delete">
    <h1>Убийство пользователя</h1>
    <div class="container">
        <div v-for="(user, index) in users" :key="user.id">
        <GetUsers user />
            <div class="userCard">
                <p> {{ user.name }} </p>
                <p> {{ user.age }} </p>
                <span class="kill">Kill</span>
                <button class="long-btn" @click="RemoveUser(index)">delete</button> 
            </div>
        </div>

    </div>


</div>
</template>

<script>
import { mapState } from "vuex";
import GetUsers from '@/components/GetUsers.vue'
export default {
    name: "Delete",
    components: {
        GetUsers,
    },
    computed:mapState({
        users: state => state.users
    }),
    mounted(){
        this.$store.dispatch('getPosts');
    },
    methods: {
        async RemoveUser(index){
        this.$store.dispatch('removeUser',index);
        }
    }
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
        border: 3px double lightseagreen;

    }
    .userCard{
        position: relative;
        background: linear-gradient(90deg, rgba(72, 14, 128, 0.712), rgba(78, 10, 38, 0.712));
        border: 3px outset lightseagreen;
        width: 22rem;
        margin: 30px auto;
        color: azure;
        font-family: 'comic sans MS';
        z-index: 3;
    }
    .long-btn{
        display: block;
        width: 100%;
        padding: 7px 0;
        border: unset;
        background: linear-gradient(90deg, rgb(3, 118, 138), rgb(6, 13, 80));
        color: beige;
        font-family: 'comic sans MS';
        opacity: 1;
        z-index: 5;
    }
    .long-btn:hover{
        background-color: rgb(1, 178, 248);
    }
    .long-btn:hover{
        opacity: 0;
    }
    .kill{
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        background: linear-gradient(90deg, rgba(3, 118, 138, 0.979), rgb(6, 13, 80));
        width: 100%;
        padding: 5px 0;
        z-index: -2;
    }
</style>