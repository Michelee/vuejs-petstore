import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import CustomInput from './components/CustomInput.vue'
import ObjectDetail from './components/ObjectDetail.vue'
import TagList from './components/TagList.vue'
import LoginComponent from './components/LoginComponent.vue'
import PetDetail from './components/PetDetail.vue'
import ImageList from './components/ImageList.vue'

Vue.use(VueResource);

Vue.component('customInput', CustomInput);
Vue.component('objectDetail', ObjectDetail);
Vue.component('tagList', TagList);
Vue.component('loginComponent', LoginComponent);
Vue.component('petDetail', PetDetail);
Vue.component('imageList', ImageList);

new Vue({
  el: '#app',
  render: h => h(App)
})
