// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from './components/goods/goods.vue';
import ratings from './components/ratings/ratings.vue';
import seller from './components/seller/seller.vue';
import wxapp from './components/wechart/wxapp.vue';
import explore from './components/explore/explore.vue';
import moments from './components/explore/moments.vue';
import routine from './components/routine/routine.vue'
import store from './vuex/store'
import filters from './filters'
import 'common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);
filters(Vue);

let routes = [
  {path: '/', name: 'index', component: App, children: [{path: '/wxapp', component: wxapp},{path: '/routine', component: routine},{path: '/explore', component: explore},{path: '/moments', component: moments}, {path: '/goods', component: goods}, {path: '/ratings', component: ratings}, {path: '/seller', component: seller}]}
];
let router = new VueRouter({
  'linkActiveClass': 'active',
   routes
});
let app = new Vue({
  router,
  store
}).$mount('#app');
  router.push('/wxapp');
export default app;
