export default{
    name: 'TableHeader',
    props:{
        store:[Object],
        border:[Boolean]
    },
    render() {
        return (
            <div class="table-header">
                <colgroup>
                    {this._l(this.store.state.column,(option)=>{
                        return <col width={option.width||this.store.state.autoWidth}></col>
                    })}
                </colgroup>
                <tr>
                    {this._l(this.store.state.column,(option)=>{
                    return <th class={this.border?'table-border':'table-no_border'} align={option.headeralign||option.align||'left'}>
                        {option.label}
                    </th>
                    })}
                </tr>
            </div>
        )
    },
}