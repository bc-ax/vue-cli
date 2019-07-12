<template>
    <div id="show-blogs">
        <!-- <div class="container" v-theme:column="'wide'"> -->
        <div class="container">
            <h2>展示博客</h2>
            <form>
                <div class="form-group">
                    <input type="text" class="form-control" v-model="search" placeholder="搜索...">
                </div>
            </form>
            <div class="card mb-3" v-for="(blog,index) in filteredBlogs" :key="index">
                <div class="card-header">{{index+1}}</div>
                <div class="card-body text-dark">
                    <!-- <h5 class="card-title" v-rainbow>{{blog.title | to-uppercase}}</h5> -->
                    <router-link v-bind:to="'/blog/'+blog.id">
                        <h5 class="card-title">{{blog.title | to-uppercase}}</h5>
                    </router-link>
                    <p class="card-text">{{blog.content | snippet}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'show-blogs',
    data(){
        return{
            blogs:[],
            search:''
        }
    },
    created(){
        // 请求网络数据
        this.$http.get("https://vuename-97a20.firebaseio.com/posts.json")
        .then(function(data){
            // this.blogs = data.body.slice(0,10);
            return data.json();
        })
        .then(function(data){
            var blogsArray = [];
            for(let key in data){
                data[key].id = key;
                // console.log(data)
                blogsArray.push(data[key]);
            }
            this.blogs = blogsArray;
            // console.log(blogs)
        })

        // 请求本地json文件 应该放在static文件夹中
        // this.$http.get("./../static/posts.json")
        // .then(function(data){
        //     this.blogs = data.body.slice(0,10);
        // })
    },
    computed:{
        filteredBlogs:function(){
            // filter过滤器
            return this.blogs.filter((blog) => {
                // match匹配
                return blog.title.match(this.search.toLowerCase());
            })
        } 
    },
    // 全局过滤器
    filters:{
        // "to-uppercase":function(value){
        //     return  value.toUpperCase();
        // }
        // 方法 to后要大写
        toUppercase(value){
            return value.toUpperCase();
        }
    },
    directives:{
        // 指令 属性 方法
        'rainbow':{
            bind(el,binding,vnode){
            el.style.color="#"+Math.random().toString(16).slice(2,8);
            }
        }
    }
}
</script>

<style scoped>
h2{
    text-align: center;
    margin-bottom:30px;
}
</style>
