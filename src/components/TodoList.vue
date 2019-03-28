<template>
  <div>
    <input type="text" class="todo-input" @keyup.enter="addTodo" placeholder="what are you up to today?" v-model="newTodo">
    <div v-for="todo in todos" :key="todo.id" class="todo-item">
        <div>
        {{ todo.title }}
        </div>
        <div class="remove-item">
            &times
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "todo-list",
  props: {
    msg: String
  },
  data() {
    return {
      newTodo: "",
      idForTodo: 3,
      todos: [
        {
          id: 1,
          title: "complete vue.js todo today",
          complete: false
        },
        {
          id: 2,
          title: "To have the chicken dinner",
          complete: false
        }
      ]
    };
  },
  methods: {
      addTodo() {
          if (this.newTodo.trim().length == 0) {
              return false;
          }
          this.todos.push({
              id: this.idForTodo,
              title: this.newTodo,
              complete: false
          }),
          this.newTodo = '';
          this.idForTodo++;
      }
  }
};
</script>

<style lang="scss">
.todo-input {
  width: 100%;
  padding: 10px 18px;
  font-size: 18px;
  margin-bottom: 16px;
  &:focus {
    outline: none;
  }
}
.todo-item {
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
