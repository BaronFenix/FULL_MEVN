<template>
<div class="Edit">
    <h1>Изменения данных пользователя</h1>
    <div class="container">
        <div v-for="(user, index) in users" :key="user.id">
        <GetUsers user />
            <div class="userCard">
                <p> {{ user.name }} </p>
                <p> {{ user.age }} </p>
                <hr color="aqua">
                <form @submit.prevent="EditUser(index)">
                    <div class="form-control">
                        <input type="text" class="long-input" id="name" v-model.lazy="user.name" placeholder="enter new name">
                    </div>

                    <div class="form-control">
                        <input type="text" class="long-input" id="age" v-model.lazy="user.age" placeholder="enter new age">
                    </div>
                    <input type="submit" class="long-btn" value="change">
                </form>

            </div>
        </div>

    </div>

</div>
</template>

<script>
import { mapState } from "vuex";
import GetUsers from '@/components/GetUsers.vue'
export default {
    data() {
        return {
            text: '',
            placeholder: 'Some placeholder text',
        }
    },
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
        async EditUser(index){
        this.$store.dispatch('changeUser',index);

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
    .long-btn{
        display: block;
        width: 100%;
        padding: 7px 0;
        background: linear-gradient(90deg, rgba(3, 118, 138, 0.712), rgba(6, 14, 80, 0.712));
        border: unset;
        color: rgb(255, 255, 255);
        font-family: 'comic sans MS';
    }
    .long-btn:hover{
        background-color: turquoise;
    }
    .long-input{
        display: block;
        width: 100%;
        padding: 5px 0;
        /* background-color: rgb(87, 57, 100); */
        background: linear-gradient(90deg, rgba(72, 14, 128, 0.712), rgba(78, 10, 38, 0.712));
        border: unset;
        color: rgb(255, 255, 255); 
        
    }
    .long-input[type=text],
    .long-input::placeholder{
        text-align: center;
    }
    .long-input:focus{
        outline:none;
        background: linear-gradient(90deg, rgba(95, 23, 163, 0.801), rgba(104, 26, 58, 0.973));
    }
    .long-btn:active{
        outline:none;
    }
</style>