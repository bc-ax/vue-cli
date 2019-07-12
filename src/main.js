// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import Routes from './routes'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)

// 自定义指令
// Vue.directive('rainbow',{
//   /*
//   el:只调用一次，第一次绑定到元素时调用。
//   unbing:只调用一次，在指令与元素解绑时调用。
//   binding:一个对象。name:指令名 value:指令的绑定值 arg：传给指令的参数，可选。
//   vnode:vue编译生成的虚拟节点。
//   toString(16)  使用16进制把一个数字转换为字符串
//   slice() 可提取字符串的某个部分，并以新的字符串返回被提取的部分。
//   */
//   bind(el,binding,vnode){
//     el.style.color="#"+Math.random().toString(16).slice(2,8);
//   }
// })

Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value == 'wide'){
      el.style.maxWidth = "1110px";
    }else if(binding.value == 'narrow'){
      el.style.maxWidth = '860px';
    }

    if(binding.arg == 'column'){
      el.style.background = '#63D64D';
      el.style.padding = '20px';
    }
  }
})

// 全局过滤器
// Vue.filter('to-uppercase',function(value){
//   // 转换成大写
//   return value.toUpperCase();
// })

Vue.filter('snippet',function(value){
  return value.slice(0,120) + '...';
})



// 路由
const router = new VueRouter({
  routes:Routes,
  mode:"history"
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
