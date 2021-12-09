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
function renderTree(slot,data){
    return slot(data)
}
export default{
    name:'TableBody',
    props:{
      store:[Object],
      list:[Array],
      border:[Boolean]  
    },
    render(){
        return(
            <div id="table-body" class="table-body">
                <colgroup>
                    {this._l(this.store.state.column,(option)=>{
                        return <col width={option.width||this.store.state.autoWidth}></col>
                    })}
                </colgroup>
                {this._l(this.list,(row,index)=>{
                   return <tr>
                        {this._l(this.store.state.column,(option)=>{
                           return <td 
                                    on-mouseout={onMouseOut(index+1)}
                                    on-mouseover={onMouseOver(index+1)} 
                                    class={(this.border?'table-border ':'table-no_border ')+((index===this.store.state.current_row)&&'table-on_hover ')} 
                                    align={option.align||'left'}>
                                        {option.slot?renderTree(option.slot,{$index:index,row:row}):row[option.prop]}
                                  </td>
                        })}
                    </tr>
                })}
            </div>
        )
    },
}