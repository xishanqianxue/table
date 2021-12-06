export default {
    name:'EmptyBox',
    render() {
        let emptyText = this.$parent.emptyText;
        let list = this.$parent.data;
        return (
            list.length?<div style="display:none"></div>:
            emptyText?<div class="empty-box">{emptyText}</div>:
            this.$slots.default?<div class="empty-box">{this.$slots.default}</div>:<div class="empty-box">暂无数据</div>
        )
    },
}