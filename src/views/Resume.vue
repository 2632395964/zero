<template>
  <div class="resume w-100">
    <div class=" w-100 " style="max-height: 90vh">
      <content-heads>
        <div slot="title"></div>
        <div slot="des">Resume</div>
      </content-heads>
    </div>
    <div class="tip-resume-wrap">
      <tip tip-color="bg-info">Campus Experience</tip>
      <div class="contents row">
        <div class="col">
          <div class="icon">
            <my-icon class="copy" id="icon-xuexiao" size="35"></my-icon>
            <div class="resume-title">【修炼内功】学习之路</div>
          </div>
          <div class="resume-content">
            自学前端开发，学习资源是视频课程，相关书籍以及MDN,从基本的静态页面到响应式页面，
            熟练弹性布局及移动端页面开发，熟练Vue技术栈，熟悉工程化，模块化，组件化开发
            ，移动端开发，仍在继续学习中。
          </div>
        </div>
      </div>

      <div class="contents row">
        <div class="col">
          <div class="icon">
            <my-icon class="copy" id="icon-jiangbei1" size="35"></my-icon>
            <div class="resume-title">校园经历</div>
          </div>
          <div class="resume-content">
            <ul>
              <li>“全国大学生电子设计竞赛”二等奖</li>
              <li>“西门子杯”中国智能挑战赛三等奖</li>
              <li>计算机二级</li>
              <li>普通话证书</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="move"><i class="iconfont icon-xiangxiahuadong move"></i></div>
    <div class="tip-resume-wrap">
      <tip tip-color="bg-success">Personal skills</tip>
      <div class="contents row">
        <div class="col">
          <div class="icon">
            <my-icon class="copy" id="icon-jineng" size="35"></my-icon>
            <div class="resume-title">前端基础</div>
          </div>
          <div class="resume-content">
            <ul>
              <li>能够使用HTML5和CSS3进行符合Web标准的语义化开发，具有一定的实现要求的能力。</li>
              <li>熟练 CSS 核心概念，盒模型，文档流，浮动，定位，BFC，各种居中,熟练 flex 弹性布局，移动端配置。</li>
              <li>熟练 JavaScript 及 常用ES6语法,了解原型，闭包，this。</li>
              <li>熟悉AJAX相关知识，了解HTTP协议，能熟练运用Promise优化项目中各种异步逻辑。</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="contents row">
        <div class="col">
          <div class="icon">
            <my-icon class="copy" id="icon-jineng" size="35"></my-icon>
            <div class="resume-title">前端js框架</div>
          </div>
          <div class="resume-content">
            <ul>
              <li>熟练 VueJs 语法，了解生命周期，指令，计算属性等。</li>
              <li>熟练 Vue-router 路由配置，Vuex 状态管理。</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="contents row">
        <div class="col">
          <div class="icon">
            <my-icon class="copy" id="icon-jineng" size="35"></my-icon>
            <div class="resume-title">前端常用工具</div>
          </div>
          <div class="resume-content">
            <ul>
              <li>在项目中使用过Webpack/Parcel等工具打包，熟悉前端工程化构建流程。</li>
              <li>熟悉Less/Sass等CSS预处理工具。</li>
              <li>熟悉Yarn & Npm & Git的使用。</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="contents row">
        <div class="col">
          <div class="icon">
            <my-icon class="copy" id="icon-jineng" size="35"></my-icon>
            <div class="resume-title">其他</div>
          </div>
          <div class="resume-content">
            <ul>
              <li>能够熟练使用Element/AntDesign/Bootstrap等UI框架完成业务组件。</li>
              <li>熟悉Markdown语法，能用其编写技术文档。</li>
              <li>熟悉localStorage/SessionStorage/Cookie等数据储存技术。</li>
              <li>热爱前端，对新技术无限好奇，善于学习。</li>
            </ul>
          </div>
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
.resume{
  /* overflow: auto; */
  overflow-x: hidden;
}
.resume::-webkit-scrollbar{
  display: none;
}
.tip-wrap{
  width: 80%;
  transform: translateX(10%);
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
.resume-title{
  position: absolute;
  font-size: 18px;
  color: #fff;
}
.tip-resume-wrap{
  width: 80%;
  transform: translateX(10%);
  margin-top: 150px;
}
ul{
  padding-left: 10px;
}
li{
  margin-left: 0;
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
</style>