export default {
    name:'EmptyBox',
    props:{
        emptyText:[String],
        list:[Array],
        border:[Boolean]
    },
    render() {
        return (
            this.list.length?<div style="display:none"></div>:
            this.emptyText?<div style={this.border||{'border':'none'}} class="empty-box">{this.emptyText}</div>:
            this.$slots.default?<div style={this.border||{'border':'none'}} class="empty-box">{this.$slots.default}</div>:
            <div style={this.border||{'border':'none'}} class="empty-box">暂无数据</div>
        )
    },
}