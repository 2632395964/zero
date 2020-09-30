<template>
  <div class="about w-100 ">
    <div class=" w-100 " style="max-height: 90vh">
      <content-heads>
        <div slot="title"></div>
        <div slot="des">About</div>
      </content-heads>
    </div>
    <div class="tip-wrap">
      <tip tip-color="bg-info">Personal Info</tip>
      <div class="content row">
        <div class="col">
          <img src="../assets/img/wr-user.jpg" alt="">
        </div>
        <div class="col">
          <h1>张源</h1>
          <hr>
          <dl>
            <dt>面试岗位</dt><dd>前端工程师</dd>
          </dl>
          <dl>
            <dt>年龄</dt><dd>22</dd>
          </dl>
          <dl>
            <dt>现住址</dt><dd>甘肃嘉峪关</dd>
          </dl>
          <dl>
            <dt>学校</dt><dd>本科 吕梁学院</dd>
          </dl>
          <dl>
            <dt>专业</dt><dd>机械设计制造及其自动化</dd>
          </dl>
          <hr>
          <dl>
            <dt>个人页面</dt><dd><a href="http://yuan-yuan-yuan.gitee.io/blog/" target="blank">Welcome to here</a></dd>
          </dl>
          <dl>
            <dt>个人博客</dt><dd><a href="http://yuan-yuan-yuan.gitee.io/blog/" target="blank">源的博客</a></dd>
          </dl>
          <dl>
          </dl>
          <div class="move"><i class="iconfont icon-xiangxiahuadong move"></i></div>
        </div>
      </div>
      
    </div>

    <div class="tip-blog-wrap">
      <tip tip-color="bg-info">Latest Blog</tip>
      <div class="contents row">
        <div class="col">
          <div class="icon">
            <my-icon class="copy" id="icon-wenzhang-copy" size="35"></my-icon>
            <div class="blog-title">HTML入门笔记</div>
          </div>
          <div class="blog-content">
           <li>在学习的过程中，记录了一些文字，方便自己回忆，也希望对以后的自己能有所帮助。在学习HTML之前，
            也了解到了HTML的历史来更好地理解这门语言历史 1990年左右，Tim Berners-Lee，一般称之为李爵士做了四件事： 
            自己编写了第一个浏览器； 自己编写了第一个服务器……； 用自己写的浏览器访问自己写的服务器 发明了WWW
            ，同时发明了HTML、HTTP、URL 发明这个东西是为了网上冲浪。</li> 
          </div>
          <div class="icon-air">
            <a href="http://yuan-yuan-yuan.gitee.io/blog/blogs/0001.html#html%E8%B5%B7%E6%89%8B" target="blank"><my-icon class="air" id="icon-zhifeiji" size="35"></my-icon></a>
          </div>
        </div>
      </div>


      <div class="contents row">
        <div class="col">
          <div class="icon">
            <my-icon class="copy" id="icon-wenzhang-copy" size="35"></my-icon>
            <div class="blog-title">CSS总结</div>
          </div>
          <div class="blog-content">
           <li>在前端学习的过程中，CSS也是很重要的一部分，所以为了方便理解和记忆，在一些常用的地方作了总结
            有许多地方叙述的并不是十分详细，只是大致的描述一下，给自己提供一个知识轮廓。
            本篇中主要描述了CSS中的基础部分，以及一些CSS3的新特性</li> 
          </div>
          <div class="icon-air">
            <a href="http://yuan-yuan-yuan.gitee.io/blog/blogs/0002.html#%E4%B8%87%E8%83%BD%E5%B1%85%E4%B8%AD" target="blank"><my-icon class="air" id="icon-zhifeiji" size="35"></my-icon></a>
          </div>
        </div>
      </div><div class="contents row">
        <div class="col">
          <div class="icon">
            <my-icon class="copy" id="icon-wenzhang-copy" size="35"></my-icon>
            <div class="blog-title">排序算法入门</div>
          </div>
          <div class="blog-content">
           <li>对计算机存储的数据执行的最常见的操作就是排序和检索。
             算法都是依赖数组来存储数据的，这一章也就是js形式的排序算法方式。</li> 
          </div>
          <div class="icon-air">
            <a href="http://yuan-yuan-yuan.gitee.io/blog/blogs/0004.html#%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8Fbubble-sort" target="blank"><my-icon class="air" id="icon-zhifeiji" size="35"></my-icon></a>
          </div>
        </div>
      </div><div class="contents row">
        <div class="col">
          <div class="icon">
            <my-icon class="copy" id="icon-wenzhang-copy" size="35"></my-icon>
            <div class="blog-title">this 总结</div>
          </div>
          <div class="blog-content">
           <li>在 JavaScript 中，this 是动态绑定，
            或称为运行期绑定的，这就导致 JavaScript 中的 this 关键字有能力具备多重含义，
            带来灵活性的同时，也为初学者带来不少困惑，这也是this是让很多开发者头疼的地方，
             而this关键字又是一个非常重要的语法点。毫不夸张地说，不理解它的含义，大部分开发任务都无法完成。
             </li> 
          </div>
          <div class="icon-air">
            <a href="http://yuan-yuan-yuan.gitee.io/blog/blogs/0005.html#%E5%88%B0%E5%BA%95%E4%BB%80%E4%B9%88%E6%98%AFthis%EF%BC%9F" target="blank"><my-icon class="air" id="icon-zhifeiji" size="35"></my-icon></a>
          </div>
        </div>
      </div><div class="contents row">
        <div class="col">
          <div class="icon">
            <my-icon class="copy" id="icon-wenzhang-copy" size="35"></my-icon>
            <div class="blog-title">防抖与节流函数</div>
          </div>
          <div class="blog-content">
           <li>JavaScript 的节流和防抖已经是老生畅谈的问题了，对于前端行业技术大牛来讲不过是小菜一碟，
             而对于像我这样的前端小白来说，绝对是必备的知识，值得学习。
             函数防抖和节流，都是控制事件触发频率的方法。应用场景有很多，输入框持续输入，
             将输入内容远程校验、多次触发点击事件、onScroll等等。</li> 
          </div>
          <div class="icon-air">
            <a href="http://yuan-yuan-yuan.gitee.io/blog/blogs/0007.html#%E9%98%B2%E6%8A%96%E4%B8%8E%E8%8A%82%E6%B5%81%E5%87%BD%E6%95%B0" target="blank"><my-icon class="air" id="icon-zhifeiji" size="35"></my-icon></a>
          </div>
        </div>
      </div><div class="contents row more">
            <a href="http://yuan-yuan-yuan.gitee.io/blog/" target="blank">更多</a>
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
/* .tip{
  margin-left: 20px;
} */
html{
			scroll-behavior: smooth ;
		}
.about{
  /* overflow: auto; */
  overflow-x: hidden;
}
.about::-webkit-scrollbar{
  display: none;
}
.tip-wrap{
  width: 80%;
  transform: translateX(10%);
}
img{
  width: 300px;
  height: 500px;
}
h1{
  color: white;
}
a{
text-decoration:none;
color:gainsboro;
}
hr{
  border: 2px solid white;
}
dl {
      display: flex;
    }
    dt {
      width: 36%;
      margin-bottom: 14px;
      float: left;
      font-weight: bold;
      color: rgb(157, 160, 167);
    }
    dd{
    color: rgb(157, 160, 167);
    font-weight: bold;
    }
.tip-wrap{
  margin: 20px 0;
}
.icon{
  display: flex;
  line-height: 50px;
  justify-content: center;
}
.icon> .copy{
  margin-right: auto;
}
.contents{
  margin: 10px 0;
  padding: 10px 0;
  background-color: rgba(54, 59, 95, 0.8);
  color:gainsboro
}
.blog-title{
  position: absolute;
  font-size: 18px;
}
.icon-air{
  text-align: right;
}
.tip-blog-wrap{
  width: 80%;
  transform: translateX(10%);
  margin-top: 150px;
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
  margin-top: -20px;
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
.more{
  justify-content: center;
  font-size: 18px;
}
@keyframes move {
  0%{transform: translateY(0) ;}
  50%{transform: translateY(10px) ;}
   100%{transform: translateY(0px) ;}
}

</style>