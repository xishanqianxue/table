class TableStore{
    constructor(table){
        this.state = {
            column:[],
            autoWidth:'180px',
            current_row:'',
        },
        this.table = table;
    }
}
TableStore.prototype.setState = function(state,val,type) {
    // state: 要修改的字段名
    // val: 修改值，可以传入一个函数
    // type(可选): 修改模式，不传默认为赋值 
    switch (type) {
        case 'push':
            push.call(this)
            break;
        default:
            setter.call(this)
            break;
    }
    function push() {
        this.state[state].push(val);
    }
    function setter() {
        if(Object.prototype.toString.call(val)==='[object Function]'){
            this.state[state] = val(state);
        }else{
            this.state[state] = val;
        }
    }
}
TableStore.prototype.getAutoWidth = function(parentWidth){
    let col_num = this.state.column.length;
    let fix_width = 0;
    this.state.column.forEach(el=>{
        if(el.width){
            fix_width += Number((el.width.indexOf('px')==-1)?el.width:el.width.split('px')[0])
            col_num--
        }
    })
    let width = col_num?(parentWidth - fix_width)/col_num +'px':'180px'
    return width
}
TableStore.prototype.mutations = {
    onMouseOver:function(row){
        this.state.current_row = row;
    }
}
TableStore.prototype.commit = function(functionName,...prop){
    this.mutations[functionName](...prop)
}
export default TableStore;