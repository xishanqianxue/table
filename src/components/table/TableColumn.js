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
    data() {
        return {
            slot:null
        }
    },
    mounted() {
        let store = this.$parent.store
        let option = getColumnProps({
            prop:this.prop,
            label:this.label,
            width:this.width||'',
            align:this.align||'',
            headeralign:this.headerAlign||'',
            slot:this.$scopedSlots.scope?this.$scopedSlots.scope({name:'scope',username:'666'}):(this.$slots.default||'')
            // sortable:this.sortable
        })
        store.setState('column',option,'push')
    },
    render:function(createElement){
        if(this.$scopedSlots.default){
            return createElement('div',[
                this.$scopedSlots.default({
                    name:'scope',
                    username:'666'
                })
            ])
        }else{
            return createElement('div',this.$slots.default)
        }
        
    }
}