<template>
    <div id="table-main" ref="table-main" :style="{'height':height||''}">
        <table class="table-main" cellspacing="0" cellpadding="10">
            <table-header :store="store" :border="border"></table-header>
            <div class="column-hidden">
                <slot></slot>
            </div>
            <EmptyBox :emptyText="emptyText" :list="data" :border="border">
                <slot name="empty"></slot>
            </EmptyBox>
            <table-body :list="data" :store="store" :border="border"></table-body>
            <iframe id="iframe-box"></iframe>
        </table>
    </div>
</template>

<script>
    import TableHeader from './TableHeader'
    import TableBody from './TableBody'
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
        created() {
            this.store.setState('column',[])
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
    #iframe-box{
        height:0;
        width:100%;
        border:none;
        visibility: hidden;
        position:absolute;
    }
</style>