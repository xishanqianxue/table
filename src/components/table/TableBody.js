function onMouseOver(index){
    return function(){
        let table_body = document.getElementById('table-body')
        table_body.children[index].style['background-color'] = '#F5F7FA'
    }
}
function onMouseOut(index){
    return function () {
        let table_body = document.getElementById('table-body')
        table_body.children[index].style['background-color'] = 'white'
    }
}
export default{
    name:'TableBody',
    render(){
        let store = this.$parent.store
        let list = this.$parent.data
        let border = this.$parent.border;
        return(
            <div id="table-body" class="table-body">
                <colgroup>
                    {this._l(store.state.column,(option)=>{
                        return <col width={option.width||store.state.autoWidth}></col>
                    })}
                </colgroup>
                {this._l(list,(row,index)=>{
                   return <tr>
                        {this._l(store.state.column,(option)=>{
                           return <td on-mouseout={onMouseOut(index+1)}
                                    on-mouseover={onMouseOver(index+1)} 
                                    class={(border||'table-no_border ')+((index===store.state.current_row)&&'table-on_hover ')} 
                                    align={option.align||'left'}>
                                        {option.slot?option.slot:row[option.prop]}
                                  </td>
                        })}
                    </tr>
                })}
            </div>
        )
    },
}