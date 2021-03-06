import Vue from 'vue'
import App from './App'

import store from './store'

// import Container from '@/components/Container';


Vue.config.productionTip = false
Vue.prototype.url = "https://www.zhongjubang.com/api/"
// Vue.prototype.url = "https://www.zhongjubang.com/test/"
// Vue.prototype.url = "http://192.168.0.136/test/"

Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
    store,
    ...App
})
app.$mount()
