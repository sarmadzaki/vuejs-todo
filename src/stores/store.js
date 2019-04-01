import Vue from "vue";
import Vuex from "vuex";
import * as MUTAION_TYPES from "./mutaion-types";
import { getLocalStorage, setLocalStorage } from "../helpers/local-storage";
import uuid from 'uuid/v1';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    newTodo: "",
    idForTodo: '0'
  },
  getters: {
    getTodos(state) {
      if (getLocalStorage('todos') && getLocalStorage('todos').length > 0) {
        state.todos = getLocalStorage('todos');
      }
      return state.todos;
    }
  },
  mutations: {
    [MUTAION_TYPES.GET_TODO](state, payload) {
      state.newTodo = payload;
    },
    [MUTAION_TYPES.ADD_TODO](state, payload) {
      state.todos.push({
        id: uuid(),
        title: payload,
        complete: false,
        editing: false
      });
      setLocalStorage('todos', state.todos);
      state.idForTodo = state.todos.length++;
    },
    [MUTAION_TYPES.REMOVE_TODO](state, payload) {
      this.state.todos.splice(payload, 1);
      setLocalStorage('todos', state.todos);
    },
    [MUTAION_TYPES.EDIT_TODO](state, payload) {
      payload.editing = true;
      setLocalStorage('todos', state.todos);
    },
    [MUTAION_TYPES.DONE_EDITING](state, payload) {
      payload.editing = false;
      setLocalStorage('todos', state.todos);
    },
  },
  actions: {
    getTodo({ commit }, payload) {
      commit(MUTAION_TYPES.GET_TODO, payload);
    },
    addTodo({ commit }, payload) {
      commit(MUTAION_TYPES.ADD_TODO, payload);
    },
    removeTodo({ commit }, payload) {
      commit(MUTAION_TYPES.REMOVE_TODO, payload);
    },
    editTodo({ commit }, payload) {
      commit(MUTAION_TYPES.EDIT_TODO, payload);
    },
    doneEditing({ commit }, payload) {
      commit(MUTAION_TYPES.DONE_EDITING, payload);
    }
  }
});
