<template>
  <div class="portfolio w-100">
    <div class=" w-100 " style="max-height: 90vh">
      <content-heads>
        <div slot="title"></div>
        <div slot="des">Portfolio</div>
      </content-heads>
    </div>
    <div class="portfolio-wrap">
      <tip tip-color="bg-danger">YUAN UI</tip>
      <div class="content row">
          <img src="../assets/img/UI.png" class="img" alt="">
        
        <div class="introduce">
          <ul>
            <li><b>YUAN UI</b>  是一个小型的 UI 框架，官网由vuepress搭建。开发的主要目的是个人对技术的学习、研究、总结，其次是能够熟练Vue的使用
          这个组件库提供了一些常用组件，适合桌面端使用。</li>
            <li><b>组件包括</b> ：Button按钮、Input输入框、Grid网格、Layout布局、Toast吐司、Tabs标签页、Popover气泡卡片、Collapse折叠面。</li>
            <li><b>技术栈</b>  : Vue + SCSS + vuepress + parcel</li>
          </ul>
          <div class="link-wrap"><div class="link"><a href="https://github.com/2632395964/yuan" target="blank">项目源码</a></div><div class="link"><a href="http://yuan-yuan-yuan.gitee.io/yuan/" target="blank">项目预览</a></div></div>
        </div>
      </div>
      
    </div>

    <div class="portfolio-wrap">
      <tip tip-color="bg-info">短视频播放器</tip>
      <div class="content row">
          <img src="../assets/img/dy.png" class="img" alt="">
          
        <div class="introduce">
          <ul>
            <li><b>短视频播放器</b>  基于Vue-Cli4实现的类似与抖音app的短视频播放器项目，开发的主要目的是个人对技术的学习、研究、总结，其次是能够熟练Vue-Cli的使用。
            </li>
            <li><b>功能包括</b> ：基本类似于抖音app，实现视频自动播放，上下滑动能够暂停和播放，路由守卫配合的登陆验证，个人信息页面，消息页面，访问网页摄像头等功能。</li>
            <li><b>技术栈</b>  : Vue Cli + Vue Router + 视频播放使用vue-video-player + 上下滑动使用轮播插件vue-awesome-swiper。</li>
          </ul>
          <div class="link-wrap"><div class="link"><a href="https://gitee.com/yuan-yuan-yuan/dy" target="blank">项目源码</a> </div><div class="link"><a href="http://yuan-yuan-yuan.gitee.io/dy" target="blank">项目预览</a> </div></div>
        </div>
      </div>
    </div>


    <div class="portfolio-wrap">
      <tip tip-color="bg-success">画一只小狗</tip>
      <div class="content row">
          <img src="../assets/img/dog.png" class="img" alt="">   
        <div class="introduce">
          <ul>
            <li><b>CSS动画</b>  这是用CSS3绘制一只可爱的小狗的项目，添加文本与绘图同步进行，能够直观的看到整个绘图过程
            开发的主要目的是个人对技术的学习、研究、总结，其次是能够更加熟练CSS的使用</li>
            <li><b>功能包括</b> ：添加了播放，暂停，快速，慢速等按钮，能够不同程度的完成动画</li>
            <li><b>技术栈</b>  : JavaScript + HTML + CSS + parcel</li>
          </ul>
          <div class="link-wrap"><div class="link"><a href="https://gitee.com/yuan-yuan-yuan/do-gdog" target="blank">项目源码</a></div><div class="link"><a href="http://yuan-yuan-yuan.gitee.io/do-gdog" target="blank">项目预览</a></div></div>
        </div>
      </div>
    </div>
    <div class="portfolio-wrap">
      <tip tip-color="bg-warning">YUAN导航</tip>
      <div class="content row">
          <img src="../assets/img/nav.png" class="img" alt="">
          
        <div class="introduce">
          <ul>
            <li><b>YUAN导航</b>  项目使用原生JavaScript，监听键盘事件，实现一个可自定义编辑的导航网站，
            编写项目的主要目的是个人对技术的学习、研究、总结，其次是能够更加的对JavaScript熟练和掌握，和对浏览器Storage的理解
          </li>
            <li><b>功能包括</b> ：自定义添加和编辑想要访问的网站储存到浏览器localStorage中，自动添加网站的iconfont，加入了百度的搜索功能</li>
            <li><b>技术栈</b>  : JavaScript + HTML5 + LocalStorage + CSS3 + Media Query</li>
          </ul>
          <div class="link-wrap"><div class="link"><a href="https://github.com/2632395964/nav" target="blank">项目源码</a></div><div class="link"><a href="http://yuan-yuan-yuan.gitee.io/nav/" target="blank">项目预览</a></div></div>
        </div>
      </div>
    </div>
    <div class="foot">
      <div class="row up">
        <div class="col"><a href=""><i class="iconfont icon-huidaodingbu"></i></a></div>
      </div>
      <div class="row footed">
        <div class="col col-sm-12 col-md-6">@2020 源|Mr. Zero</div>
        <div class="col col-sm-12 col-md-6 ">
          <i class="iconfont fontSize icon-github"></i>
          <i class="iconfont fontSize icon-weixin"></i>
          <i class="iconfont fontSize icon-qq"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import contentHeads from "../components/content-head/content-head.vue";
export default {
  components: {
    contentHeads,
  }
}
</script>
<style scoped>
.portfolio{
  /* overflow: auto; */
  overflow-x: hidden;
}
.portfolio::-webkit-scrollbar{
  display: none;
}
.portfolio-wrap{
  /* display: flex; */
  width: 90%;
  transform: translateX(9%);
}
.img{
  width: 100%;
  height: auto;
  border:3px solid rgba(244, 244, 247, 0.938) ;
  border-radius: 5px;
}
.content{
  border: 3px solid rgba(244, 244, 247, 0.938);
  border-radius: 5px;
  padding: 2%;
  background-color: rgba(54, 59, 95, 0.8);
  transform: translateX(12%);
  width: 80%;
  margin-top: 4%;
  margin-bottom: 10%;
}
.introduce{
  margin-top: 20px;
  color: aliceblue;
  background-color: rgba(34, 36, 51, 0.5);
  padding: 10px;
}
.link-wrap{
  display: flex;
  justify-content: right;
  transform: translateX(70%);
}
.link{
  margin: 10px;
  
}

.footed{
  /* margin-top: 150px; */
  background-color:rgba(36, 38, 53, 0.8);
  height: 15vh;
  color: antiquewhite;
  text-align: center;
  line-height: 15vh;
}
.fontSize{
  font-size: 20px;
  margin: 10px;
}
.move{
  font-size: 20px;
  color: #fff;
  margin-left: 30%;
  animation: move 2s infinite;
}
.up{
  text-align:right;
  color: #fff;
  width: 10%;
  font-size: 60px;
  margin-left: auto;
  animation: move 2s infinite;
}
.icon-huidaodingbu{
  font-size: 3rem;
  margin-right: 10px;
}
a{
text-decoration:none;
color:gainsboro;
}
@keyframes move {
  0%{transform: translateY(0) ;}
  50%{transform: translateY(10px) ;}
   100%{transform: translateY(0px) ;}
}
@media screen and (max-width: 667px){
  .portfolio-wrap{
    display: block;
    width: 100%;
    transform: translateX(13%);
  }
  .content{
    transform: translateX(0%);
  }
  .link-wrap{
    transform: translateX(30%);
  }
}
</style>