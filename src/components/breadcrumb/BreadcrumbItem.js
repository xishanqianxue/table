function test(url){
    return function(){
        if (!url||!url.path){ 
            return
        }
        else if(url.query&&Object.prototype.toString.call(url.query)==='[object Object]'){
            let url_str = '';
            for (const key in url.query) {
                url_str += "&"+key+"="+url.query[key]
            }
            url_str = url_str.replace("&","?")
            url_str = url.path + url_str
            location.hash = url_str;
            return
        }
        location.hash = url.path;
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
            <div onclick={test(this.to)} class={this.to?"breadcrumb-item_link":"breadcrumb-item"}>
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