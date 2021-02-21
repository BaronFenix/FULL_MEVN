import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const app = new axios.create({
  baseURL: 'http://localhost:3000'
});
export default new Vuex.Store({
  state: {
    users: [],
  },
  mutations: {
    GET_STATUS(state,payload){ 
      state.users = payload;
    },
    GET_POSTS(state, payload){
      state.users = payload
    },
      POST_STATUS(state, payload){
      state.users.push(payload);
    },
    DELETE_STATUS(state, payload){
      state.users.splice(payload,1);
    },
    PUT_STATUS(state, payload){
      state.users[payload].name = state.newValue.name;
      state.users[payload].age = state.newValue.name;
    }
  },
  actions: {
    async getPosts({ commit }) {
      const {data, status} = await app.get('users');
      console.log(status);
      commit('GET_POSTS', data);
    },
    async addUser({ commit }, user) {
      // if(user.name)
      const {status} = await app.post('users', user);
      console.log(status);
      commit('POST_STATUS',user);
    },
    async removeUser({ commit, state }, index){
      const id = state.users[index]._id;
      const {status} = await app.delete('users/' + id);
      console.log(status);
      commit('DELETE_STATUS', index);
    },
    async changeUser({ commit, state }, index) {
      const id = state.users[index]._id;
      const {status, data} = await app.put('users/' + id, state.users[index]);
      if(status === 200) {
        state.newValue.name = data.name;
        state.newValue.age = data.age;
        commit('CHANGE_STATUS', index);
      }
      else{
        alert("Произошла ошибка!");
      }
    },
  },
  modules: {
  }
})
