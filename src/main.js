import Vue from 'vue'
import VueRouter from 'vue-router';
import router from './router.js';
import App from './App.vue'
import firebase from 'firebase/app';
import './registerServiceWorker'

Vue.use(VueRouter);
Vue.use(router);

Vue.config.productionTip = false

const configOptions = {
  apiKey: "AIzaSyDwzjdkgJr5M8mJkUBFshUvxxlClY9vY9E",
  authDomain: "todo-v2.firebaseapp.com",
  databaseURL: "https://todo-v2.firebaseio.com",
  projectId: "todo-v2",
  storageBucket: "todo-v2.appspot.com",
  messagingSenderId: "956496848679",
  appId: "1:956496848679:web:0fe648ffc4e1ed00e06b02"
};

firebase.initializeApp(configOptions);
// <!-- The core Firebase JS SDK is always required and must be listed first -->
{/* <script src="https://www.gstatic.com/firebasejs/7.3.0/firebase-app.js"></script> */}

let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      render: h => h(App),
    }).$mount('#app')
  }
})

