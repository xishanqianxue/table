function getColumnProps(options){
    let column = {}
    for (const key in options) {
        column[key] = options[key]
    }
    return column;
}
export default{
    name:'TableColumn',
    props:{
        label:{
            required:true,
            String,
        },
        prop:String,
        width:String,
        align:String,
        headerAlign:String
        // sortable:Boolean
    },
    created() {
        let store = this.$parent.store
        let option = getColumnProps({
            prop:this.prop,
            label:this.label,
            width:this.width||'',
            align:this.align||'',
            headeralign:this.headerAlign||'',
            slot:this.$slots.default||''
            // sortable:this.sortable
        })
        // console.log(this.$slots.default);
        store.setState('column',option,'push')
    },
    render(h){
        return h('div',this.$slots.default)
    }
}