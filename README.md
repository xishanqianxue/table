# table-test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 使用说明
```
示例：<test-table data="" border>
        <table-column label="" prop="" align="" headerAlign="">
          <!-- <template>
                  <div>slot内容</div>
              </template>
          -->
        </table-column>
        // label:String 表头名称
        // prop:String 字段名称
        // align:String 当前列在水平方向上的对齐方式
        // headerAlign:String 当前列的表头在水平方向上的对齐方式 (优先级：headerAlign>align)
      </test-table>

      // data:Array 表格数据源
      // border:Boolean 设置表格边框，默认为false
      // table-column --> slot内容：由template包裹，根节点只允许有一个
```