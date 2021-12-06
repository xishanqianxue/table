export default {
    name:'EmptyBox',
    render() {
        let emptyText = this.$parent.emptyText;
        let list = this.$parent.data;
        return (
            (!list.length&&emptyText)?<div class="empty-box">{emptyText}</div>:<div style="display:none"></div>
        )
    },
}