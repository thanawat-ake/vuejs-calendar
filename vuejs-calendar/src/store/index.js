import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import moment from 'moment-timezone';
moment.tz.setDefault('UTC');

import Axios from "axios";

export default new Vuex.Store({ // store object
    state: {
        currentMonth: 11,
        currentYear: 2021,
        eventFormPosX: 0,
        eventFormPosY: 0,
        eventFormActive: false,
        events: [
            { description: 'Random event 1', date: moment('2021-11-06', 'YYYY-MM-DD') },
            { description: 'Random event 2', date: moment('2021-11-15', 'YYYY-MM-DD') },
            { description: 'Random event 3', date: moment('2021-12-14', 'YYYY-MM-DD') }
        ],
        eventFormDate: moment()
    },
    mutations: {
        setCurrentMonth(state, payload) { // setCurrentMonth mutation
            state.currentMonth = payload;
        },
        setCurrentYear(state, payload) {
            state.currentYear = payload;
        },
        eventFormPos(state, payload) {
            state.eventFormPosX = payload.x;
            state.eventFormPosY = payload.y;
        },
        eventFormActive(state, payload) {
            state.eventFormActive = payload;
        },
        addEvent(state, payload) { // called by line 51
            state.events.push(payload);
        },
        eventFormDate(state, payload) {
            state.eventFormDate = payload;
        }
    },
    actions: {
        addEvent(context, payload) {
            return new Promise((resolve, reject) => {
                let obj = {
                    description: payload,
                    date: context.state.eventFormDate
                };
                Axios.post('/add_event', obj).then(response => {
                    if(response.status === 200) {
                        context.commit('addEvent', obj);
                        // setTimeout(function () {
                            resolve();
                        // }, 2000);
                    } else {
                        reject();
                    }
                });
            });
        }
    }
});