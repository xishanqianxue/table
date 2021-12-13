<template>
    <div class="breadcrumb-main">
        <slot></slot>
    </div>
</template>

<script>
    import BreadStore from './breadStore'
    import './breadcrumb.css'
    export default {
        props:{
            separator:[String],
            separatorClass:[String]
        },
        data() {
            let store = new BreadStore()
            return {
                store
            }
        },
        created() {
            this.store.setState('separator',this.separator||"/")
            this.separatorClass&&this.store.setState('separatorClass',this.separatorClass)
        },
        mounted() {
            this.reset(this.$children)
        },
        updated() {
            this.reset(this.$children)
        },
        methods: {
            reset(val){
                for (let i = 0; i < val.length; i++) {
                    val[i].is_last = false;
                    if(!val[i+1]){
                        val[i].is_last = true;
                    }
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>