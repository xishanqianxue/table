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
            this.emptyText?<div class="empty-box">{this.emptyText}</div>:
            this.$slots.default?<div class="empty-box">{this.$slots.default}</div>:<div class="empty-box">暂无数据</div>
        )
    },
}