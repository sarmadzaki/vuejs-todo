<template>
  <div>
    <input
      type="search"
      class="todo-input"
      @keyup.enter="addTodo"
      placeholder="what are you up to today?"
      v-model="newTodo"
    >
    <div v-if="getTodos().length > 0">
      <div v-for="(todo, index) in getTodos()" :key="todo.id" class="todo-item">
        <div class="todo-item-left">
          <div
            v-if="!todo.editing"
            class="todo-item-label"
            @dblclick="editTodo(todo)"
          >{{ todo.title }}</div>
          <input
            v-else
            class="todo-item-edit"
            type="text"
            v-model="todo.title"
            @blur="doneEdit(todo)"
            @keyup.enter="doneEdit(todo)"
          >
          <div class="remove-item" @click="removeTodo(index)">
            <img src="../../public/delete.svg" alt height="24px">
          </div>
        </div>
      </div>
    </div>
    <div v-else>You have not added any todos yet.</div>
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
    };
  },
  methods: {
    getTodos() {
      return this.$store.getters.getTodos;
    },
    addTodo() {
      if (this.newTodo.trim().length == 0) return false;
      this.$store.dispatch("addTodo", this.newTodo);
      this.newTodo = "";
    },
    removeTodo(index) {
      this.$store.dispatch("removeTodo", index);
    },
    editTodo(todo) {
      this.$store.dispatch('editTodo', todo);
    },
    doneEdit(todo) {
      this.$store.dispatch('doneEditing', todo);
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
  font-family: "Lato", sans-serif;
  &:focus {
    outline: none;
  }
}
</style>
