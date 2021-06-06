import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "./assets/scss/variables.scss";
import Buefy from "buefy";

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

import firebase from "firebase/app";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCdlhZkJ9TAWZqvrsIAKu3OCzdKtylkzAg",
  authDomain: "portfolio-40c35.firebaseapp.com",
  projectId: "portfolio-40c35",
  storageBucket: "portfolio-40c35.appspot.com",
  messagingSenderId: "765570774385",
  appId: "1:765570774385:web:651de4f12daf20185bf2d0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
