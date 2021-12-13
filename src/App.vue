<template>
  <div id="app">
    <!-- <test-table height="240px" :data="list">
      <table-column width="120px" align="center" label="名称" prop="name">
        <template v-slot:default="prop">
          <button>{{prop.row.name}}</button>
          <div>
            {{prop.$index}}
          </div>
        </template>
      </table-column>
      <table-column label="创建日期" prop="date"></table-column>
      <table-column label="描述" prop="description"></table-column>
    </test-table> -->
    <Breadcrumb>
      <breadcrumb-item :to="{path:'/test1',query:{name:'test11'}}">666</breadcrumb-item>
      <breadcrumb-item :to="{path:'/test2',query:{name:'test222'}}">44</breadcrumb-item>
      <breadcrumb-item>33</breadcrumb-item>
    </Breadcrumb>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  created() {
    // this.list = [];
  },
  data() {
    return {
      list:[{name:'test1',date:'2021-12-1 00:00:00',description:'xxxx'},
            {name:'test2',date:'2021-12-1 01:00:00',description:'xxxx'},
            {name:'test3',date:'2021-12-1 02:00:00',description:'xxxx'}],
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
</style>
