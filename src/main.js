import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router.js';
import App from './App.vue';
import { firebaseConfig } from './config/firebase';

Vue.use(VueRouter);
Vue.use(router);

Vue.config.productionTip = false;

firebaseConfig.auth().onAuthStateChanged(() => {
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app');
});
