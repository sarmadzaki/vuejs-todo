import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
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
        ],
        newTodo: '',
    },
    mutations: {
        GET_TODO(state, todo) {
            state.newTodo = todo;
        },
        ADD_TODO(state) {
            state.todos.push({
                id: state.idForTodo,
                title: state.newTodo,
                complete: false,
            });
        }
    },
    actions: {
        getTodo({commit}, todo) {
            commit('GET_TODO',  todo);
        }
    }
})