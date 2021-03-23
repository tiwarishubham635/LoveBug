import Vue from 'vue'
import VueRouter from 'vue-router'
import './styles.scss'
import router from './router'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueGeolocation from 'vue-browser-geolocation';

import axios from 'axios'
Vue.use(VueGeolocation);


// Import Bootstrap an BootstrapVue CSS files (order is important)

import * as VueGoogleMaps from'vue2-google-maps';

import store from './store'
Vue.use(VueRouter);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAV2sha6Y8hlAOAVLcWNG4lwD7lajGonrg',
    libraries: 'places', // This is required if you use the Autocomplete plugin
  },
});
import firebase from 'firebase'
var firebaseConfig = {
  apiKey: "AIzaSyCvILHG7Co-4XI3ZYX8RTbevSZ8xRTGC4E",
  authDomain: "twitter-clone-40897.firebaseapp.com",
  databaseURL: "https://twitter-clone-40897.firebaseio.com",
  projectId: "twitter-clone-40897",
  storageBucket: "twitter-clone-40897.appspot.com",
  messagingSenderId: "821803565237",
  appId: "1:821803565237:web:32b4794f42c2f164413efc"
};
firebase.initializeApp(firebaseConfig);



firebase.auth().onAuthStateChanged(async function(user) {
  if(!user){
    console.log("not logged in")
    if(window.location.pathname !='/login'){
      window.location = '/login'
    }
  }
  else {
    
    const {data} = await axios.post('/api/participants',{uid:user.uid,data:user})
    console.log(data)
    store.commit("adduser",data.participant)
    if(window.location.pathname=='/login')
    {
      window.location='/dashboard';
    }
    
  }
});
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
