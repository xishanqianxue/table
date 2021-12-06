import Vue from 'vue'
import App from './App.vue'
import TestTable from '@/components/table'
import TestTableColumn from '@/components/table/TableColumn.js'
// import BasicTable from '@/components/BasicTable'
import '@/assets/css/_table.css'

Vue.config.productionTip = false
Vue.component('test-table',TestTable)
Vue.component('table-column',TestTableColumn)
// Vue.component('basic-table',BasicTable)

new Vue({
  render: h => h(App),
}).$mount('#app')
