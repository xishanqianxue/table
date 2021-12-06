<template>
    <div id="table-main" ref="table-main" :style="{'height':height||''}">
        <table class="table-main" :border="border?1:0" cellspacing="0" cellpadding="10">
            <table-header></table-header>
            <div class="column-hidden">
                <slot></slot>
            </div>
            <div ref="slot" v-if="!emptyText&&!data.length" class="empty-box">
                <slot name="empty"></slot>
            </div>
            <EmptyBox></EmptyBox>
            <table-body></table-body>
            <iframe id="iframe-box" style="height:0;width:100%;border:none;visibility: hidden;position:absolute;"></iframe>
        </table>
    </div>
</template>

<script>
    import TableHeader from './TableHeader'
    import TableBody from './TableBody'
    // import TableColumn from './TableColumn'
    import TableStore from './tableStore'
    import EmptyBox from './empty-box'

    export default {
        components:{
            TableHeader,TableBody,EmptyBox
        },
        props:{
            data:{
                required:true,
                Array
            },
            height:[Number,String],
            border:[Boolean],
            emptyText:[String],
        },
        mounted() {
            let _this = this
            document.getElementById('iframe-box').contentWindow.onresize = function(){
                _this.store.setState('autoWidth',_this.store.getAutoWidth(document.getElementById('table-main').offsetWidth))
                return
            }
        },
        data() {
            let store = new TableStore(this)
            return {
                store,
            }
        }
    }
</script>

<style scoped>

</style>