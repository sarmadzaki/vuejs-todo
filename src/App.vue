<template>
  <div id="app" class="container">
    <img alt="Vue logo" class="logo" src="./assets/logo.png">
    <todo-list></todo-list>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import TodoList from './components/TodoList';

export default {
  name: 'app',
  components: {
    // HelloWorld,
    TodoList
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;
}
.container {
  width: 600px;
  margin: 0 auto;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 0 auto;
  font-size: 24px;
}
.logo {
  display: block;
  margin: 20px auto;
  height: 75px;
}
</style>
