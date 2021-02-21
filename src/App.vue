<template>
  <div id="app">
    <div id="nav">

      <ul class="menu">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/add">Add user</router-link></li>
        <li><router-link to="/users">all Users</router-link></li>
        <li><router-link to="/delete">Remove user</router-link></li>
        <li><router-link to="/edit">Edit user</router-link></li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<style>
  body{
    padding: 0;
    margin: 0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav ul{
    width: inherit;
    margin: 0 auto;
    background-color: rgb(36, 97, 134);
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    list-style: none;

  }
  #nav a {
    display: block;
    padding: 15px 30px;
    background-color: rgb(36, 97, 134);
    display: block;
    font-weight: bold;
    color: #a4e9e9;
    /* margin: 0 15px; */
    text-decoration: none;
  }
    #nav a:hover{
    background-color: rgb(10, 73, 112);
  }
  #nav a.router-link-exact-active {
    color: #27d661;
  }
</style>
