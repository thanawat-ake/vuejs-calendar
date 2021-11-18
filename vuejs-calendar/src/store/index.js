import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({ // store object
    state: {
        currentMonth: 11,
        currentYear: 2021
    },
    mutations: {
        setCurrentMonth(state, payload){ // setCurrentMonth mutation
            state.currentMonth = payload;
        },
        setCurrentYear(state, payload){
            state.currentYear = payload;
        }
    }
});