import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    newTodo: "",
    idForTodo: 0,
  },
  getters: {
    getTodos(state) {
      return state.todos;
    }
  },
  mutations: {
    GET_TODO(state, todo) {
      state.newTodo = todo;
    },
    ADD_TODO(state, payload) {
      state.todos.push({
        id: state.idForTodo,
        title: payload,
        complete: false,
        editing: false,
      });
      state.idForTodo++;
    },
    REMOVE_TODO(state, index) {
      this.state.todos.splice(index, 1);
    },
    EDIT_TODO(state, todo) {
        todo.editing = true;
    },
    DONE_EDITING(state, todo) {
        todo.editing = false;
    }
  },
  actions: {
    getTodo({ commit }, todo) {
      commit("GET_TODO", todo);
    },
    addTodo({commit}, todo) {
        commit("ADD_TODO", todo);
    },
    removeTodo({commit}, index) {
        commit("REMOVE_TODO", index);
    },
    editTodo({commit}, todo) {
        commit("EDIT_TODO", todo);
    },
    doneEditing({commit}, todo) {
        commit("DONE_EDITING", todo);
    }
  }
});
