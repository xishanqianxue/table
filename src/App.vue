<template>
  <div id="app">
    <test-table height="240px" :data="list">
      <table-column width="120px" align="center" label="名称" prop="name">
        <!-- <template>
          <div>7777</div>
          <div>
            6666
            <span class="new-test">111</span>
            <span style="font-size:12px;"></span>
          </div>
        </template> -->
      </table-column>
      <table-column label="创建日期" prop="date"></table-column>
      <table-column label="描述" prop="description"></table-column>
      <div slot="empty">暂无数据</div>
    </test-table>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  created() {
    // this.list = [];
  },
  data() {
    return {
      list:[{name:'test1',date:'2021-12-1 00:00:00',description:'xxxx'},
            {name:'test2',date:'2021-12-1 01:00:00',description:'xxxx'},
            {name:'test3',date:'2021-12-1 02:00:00',description:'xxxx'}]
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* width: 80%; */
  margin: auto;
}
.new-test{
  font-size: 12px;
}
</style>
