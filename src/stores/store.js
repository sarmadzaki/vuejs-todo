import Vue from "vue";
import Vuex from "vuex";
import * as MUTAION_TYPES from './mutaion-types';

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
    [MUTAION_TYPES.GET_TODO](state, payload) {
      state.newTodo = payload;
    },
    [MUTAION_TYPES.ADD_TODO](state, payload) {
      state.todos.push({
        id: state.idForTodo,
        title: payload,
        complete: false,
        editing: false,
      });
      state.idForTodo++;
    },
    [MUTAION_TYPES.REMOVE_TODO](state, payload) {
      this.state.todos.splice(payload, 1);
    },
    [MUTAION_TYPES.EDIT_TODO](state, payload) {
        payload.editing = true;
    },
    [MUTAION_TYPES.DONE_EDITING](state, payload) {
        payload.editing = false;
    }
  },
  actions: {
    getTodo({ commit }, payload) {
      commit(MUTAION_TYPES.GET_TODO, payload);
    },
    addTodo({commit}, payload) {
        commit(MUTAION_TYPES.ADD_TODO, payload);
    },
    removeTodo({commit}, payload) {
        commit(MUTAION_TYPES.REMOVE_TODO, payload);
    },
    editTodo({commit}, payload) {
        commit(MUTAION_TYPES.EDIT_TODO, payload);
    },
    doneEditing({commit}, payload) {
        commit(MUTAION_TYPES.DONE_EDITING, payload);
    }
  }
});
