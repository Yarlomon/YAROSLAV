import { createApp } from 'vue';
import Vue from 'vue';
import App from './App.vue';
import store from '../store/index';
import router from './router';
import DataInteraction from './components/DataIntercation.vue';
import DashboardData from './components/DashboardData.vue';

const app = createApp(App);

app.use(router);


app.component('data-interaction', DataInteraction);

new Vue({
    store,
    render: h => h(App),
}).$mount('#app');

app.mount('#app');
