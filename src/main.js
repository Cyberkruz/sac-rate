import Vue from 'vue'
import Vuelidate from 'vuelidate'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(BootstrapVue)

new Vue({
  render: h => h(App),
}).$mount('#app')
