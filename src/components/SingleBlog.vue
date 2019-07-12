<template>
    <div id="single-blog" class="container">
        <h1>{{blog.title}}</h1>
        <article>{{blog.content}}</article>
        <p>作者：{{blog.author}}</p>
        <p>分类</p>
        <ul>
            <li v-for="(category,index) in blog.categories" :key="index">
                {{category}}
            </li>
        </ul>
        <button @click="deleteBlog()">删除</button>
        <router-link :to="'/edit/' + id" >编辑</router-link>
    </div>
</template>

<script>
export default {
    name:'single-blog',
    data(){
        return{
            id:this.$route.params.id,
            blog:{}
        }
    },
    created(){
        this.$http.get('https://vuename-97a20.firebaseio.com/posts/'+this.id+'.json')
        .then(function(data){
            // 也可行
            // console.log(data);
            // this.blog = data.body;
            // console.log(data.json())
            return data.json();
        })
        .then(function(data){
            this.blog = data;
            // console.log(data)
        })
    },
    methods:{
        deleteBlog(){
            this.$http.delete('https://vuename-97a20.firebaseio.com/posts/'+this.id+'.json')
            .then(Response =>{
                if(confirm("确定删除吗？") === true){
                    this.$router.push('/')
                }           
            })
        }
    }
}
</script>
