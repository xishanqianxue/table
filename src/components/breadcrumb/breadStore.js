class BreadStore{
    constructor(){
        this.state = {
            separator:'',
            separatorClass:'',
            nodeIndex:0,
        }
    }
}
BreadStore.prototype.setState = function(state,val,type){
    // state: 要修改的字段名
    // val: 修改值，可以传入一个函数
    // type(可选): 修改模式，不传默认为赋值 
    switch (type) {
        case 'push':
            push.call(this)
            break;
        case 'add':
            add.call(this)
            break;
        default:
            setter.call(this)
            break;
    }
    function add() {
        if(Number(val)){
            throw new Error('传入类型应该为Number')
        }
        this.state[state] += val;
        return
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
export default BreadStore