<template>
  <div id="app">
    <!-- <add-blog></add-blog> -->
    <!-- <ShowBlogs/> -->
    <BlogHeader/>
    <router-view></router-view>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog'
import ShowBlogs from './components/ShowBlogs'
import BlogHeader from './components/BlogHeader'

export default {
  name: 'App',
  components: {
    AddBlog,
    ShowBlogs,
    BlogHeader
  }
}
</script>

<style>
/* 解决页面宽度因为滚动条而抖动 */
/* html{　
  overflow-y: auto;
  overflow-x: hidden;
} */

body{
  width: 100vw;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}

</style>
