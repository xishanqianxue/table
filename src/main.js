import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import TestTable from '@/components/table'
import TestTableColumn from '@/components/table/TableColumn.js'

import Breadcrumb from '@/components/breadcrumb'
import BreadcrumbItem from '@/components/breadcrumb/BreadcrumbItem'
// import BasicTable from '@/components/BasicTable'
import '@/assets/css/_table.css'

Vue.use(VueRouter)

Vue.config.productionTip = false
Vue.component('test-table',TestTable)
Vue.component('table-column',TestTableColumn)
Vue.component('Breadcrumb',Breadcrumb)
Vue.component('breadcrumb-item',BreadcrumbItem)

// Vue.component('basic-table',BasicTable)

new Vue({
  render: h => h(App),
}).$mount('#app')
