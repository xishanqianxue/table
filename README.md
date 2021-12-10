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
          <!-- <template v-slot:default="{变量名,可自己定义,也可以解构复制:row(当前行的数据，可向下取值具体的prop),$index(当前行的index)}">
                  <div>slot内容</div>
              </template>
          -->
        </table-column>
        /*-- table-column参数及释义 --*/
        // label:String 表头名称
        // prop:String 字段名称
        // align:String 当前列在水平方向上的对齐方式
        // headerAlign:String 当前列的表头在水平方向上的对齐方式 (优先级：headerAlign>align)
      </test-table>

      /*-- table参数及释义 --*/
      // data:Array 表格数据源
      // border:Boolean 设置表格边框，默认为false
      // table-column --> slot内容：由template包裹，根节点只允许有一个
      // emptyText:String 内容为空时表格填充的文字内容,默认为'暂无数据',也可以通过slot='empty'的元素插入到table中，自定义填充内容
            例：<test-table>
                  <div slot="empty">
                    ...
                  </div>
                </test-table>
```