<template>
  <div>
    <input
      type="search"
      class="todo-input"
      @keyup.enter="addTodo"
      placeholder="what are you up to today?"
      v-model="newTodo"
    >
    <div v-for="(todo, index) in todos" :key="todo.id" class="todo-item">
      <div class="todo-item-left">
        <div v-if="!todo.editing" class="todo-item-label" @dblclick="editTodo(todo)">{{ todo.title }}</div>
        <input v-else class="todo-item-edit" type="text" v-model="todo.title" @blur="doneEdit(todo)" @keyup.enter="doneEdit(todo)">
        <div class="remove-item" @click="removeTodo(index)">
          <img src="../../public/delete.svg" alt height="24px">
        </div>
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
          complete: false,
          editing: false
        },
        {
          id: 2,
          title: "To have the chicken dinner",
          complete: false,
          editing: false
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
        (this.newTodo = "");
      this.idForTodo++;
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    editTodo(todo) {
        todo.editing = true;
    },
    doneEdit(todo) {
        todo.editing = false;
    }
  },
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
.remove-item {
  cursor: pointer;
  margin-right: 14px;
  &:hover {
    color: black;
  }
}
.todo-item-left {
  display: flex;
  align-items: center;
}
.todo-item-label {
  padding: 10px;
  border: 1px solid white;
  margin-left: 12px;
}

.todo-item-edit {
  font-size: 24px;
  color: #2c3e50;
  margin-left: 12px;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  font-family: 'Lato', sans-serif;
  &:focus {
      outline: none;
  }

}
</style>
