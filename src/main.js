import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import {store} from './store'; 
import MainPage from './components/MainPage.vue';
import GalleryPage from './components/GalleryPage.vue';
import ContactPage from './components/ContactPage.vue';
import ProductSelection from './components/ProductSelection.vue';
import ProductCart from './components/ProductCart.vue';
import OrderConfirmation from './components/OrderConfirmation.vue';

const routes = [
  { path: '/', component: MainPage },
  { path: '/main', component: MainPage },
  { path: '/gallery', component: GalleryPage },
  { path: '/contacts', component: ContactPage },
  { path: '/order', component: ProductSelection },
  { path: '/cart', component: ProductCart },
  { path: '/order/confirmation', component: OrderConfirmation }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App)
  .use(router)
  .use(store)  
  .mount('#app');
