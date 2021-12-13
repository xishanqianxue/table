function test(url){
    const _this = this;
    return function(){
        if(!url||!url.path){
            return
        }else if(location.pathname==url.path){
            return
        }
        _this.$router.push(url);
    }
}
export default{
    name:'breadcrumb-item',
    props:{
        to:[Object]
    },
    render() {
        let store = this.$parent.store;
        return (
            <div onclick={test.call(this,this.to)} class={this.to?"breadcrumb-item_link":"breadcrumb-item"}>
                {this.$slots.default}
                {   this.is_last||
                    store.state.separatorClass?<i class={store.state.separatorClass+' separator-item'}></i>
                    :<span class="separator-item">{store.state.separator}</span>}
            </div>
        )
    },
    data() {
        return {
            is_last:false
        }
    },
}