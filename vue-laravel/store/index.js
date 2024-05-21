import Vue from 'vue';
import { createStore } from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userData: [],
        filteredData: [],
        sortBy: '',
    },
    mutations: {
        setUserData(state, data) {
            state.userData = data;
            state.filteredData = data;
        },
        applyFilter(state, filter) {

            state.filteredData = state.userData.filter(user => user.gender === filter);
        },
        applySort(state, sortBy) {

            state.sortedData = state.userData.slice().sort((a, b) => a[sortBy] < b[sortBy] ? -1 : 1);
        },
    },
    actions: {
        async fetchData({ commit }) {
            try {

                const response = await fetch('https://127.0.0.1.8000:api/data');
                const data = await response.json();

                commit('setUserData', data);

            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        },
    },
});