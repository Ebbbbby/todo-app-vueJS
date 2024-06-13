import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/main.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
library.add(faTrashAlt, faPlus);


const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');