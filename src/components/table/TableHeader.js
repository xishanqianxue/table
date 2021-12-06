export default{
    name: 'TableHeader',
    render() {
        let state = this.$parent.store.state;
        let border = this.$parent.border;
        return (
            <div class="table-header">
                <colgroup>
                    {this._l(state.column,(option)=>{
                        return <col width={option.width||state.autoWidth}></col>
                    })}
                </colgroup>
                <tr>
                    {this._l(state.column,(option)=>{
                    return <th class={border||'table-no_border'} align={option.headeralign||option.align||'left'}>
                        {option.label}
                    </th>
                    })}
                </tr>
            </div>
        )
    },
}