<template>
    <div class="add-blog">
        <div class="container">
            <h2>发布博客</h2>
            <form v-if="!submmited">
                <div class="form-group">
                    <label for="title">博客标题</label>
                    <input type="text" v-model="blog.title" class="form-control" id="title" placeholder="Enter title">
                </div>
                <div class="form-group">
                    <label for="content">博客内容</label>
                    <textarea v-model="blog.content" class="form-control" rows="4" id="content" placeholder="Enter content"></textarea>
                </div>
                <div id="checkboxes" class="form-group">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" value="Vue.js" v-model="blog.categories">
                        <label class="form-check-label">Vue.js</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" value="Node.js" v-model="blog.categories">
                        <label class="form-check-label">Node.js</label>                     
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" value="React.js" v-model="blog.categories">
                        <label class="form-check-label">React.js</label>                     
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" value="Javascript" v-model="blog.categories">
                        <label class="form-check-label">Javascript</label>                      
                    </div>
                </div>
                <div class="form-group">
                    <label>作者</label>
                    <select v-model="blog.author" class="form-control form-control-lg">
                        <option v-for="(author,index) in  authors" :key="index">
                            {{author}}
                        </option>
                    </select>
                </div>
                <button class="btn btn-primary" v-on:click.prevent="post">添加博客</button>
            </form>

            <div v-if="submmited">
                <h2>博客添加成功</h2>
            </div>

            <hr>
            <div class="form-group">博客标题：{{blog.title}}</div>
            <div class="form-group">博客内容：{{blog.content}}</div>
            <div class="form-group">博客分类：
                <ul>
                    <li v-for="(categorie,index) in blog.categories" :key="index">{{categorie}}</li>
                </ul>
            </div>
            <div class="form-group">博客作者：{{blog.author}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name:'add-blog',
    data(){
        return{
            blog:{
                title:'',
                content:'',
                categories:[],
                author:''
            },
            authors:['Afre','Henry','Cheh'],
            submmited:false
        }
    },
    methods:{
        post:function(){
            // this.$http.post("https://jsonplaceholder.typicode.com/posts",{
            //     title:this.blog.title,
            //     body:this.blog.content,
            //     userId:1
            // })
            this.$http.post("https://vuename-97a20.firebaseio.com/posts.json",this.blog)
            .then(function(data){
                console.log(data)
                this.submmited=true;
            })
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
