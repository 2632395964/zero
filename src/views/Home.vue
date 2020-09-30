<template>
  <div class="home">
    <div class="particles"></div>
    <div class="wrap">
      <div class="slideBar">
        <slide-bar icon-id="icon-wangluo" icon-color="text-warning" icon-size="45">Welcome to here</slide-bar>
      </div>
        <particles></particles>
        <transition enter-active-class="animate__animated animate__zoomIn">
        <router-view></router-view>
        </transition>
      <div class="display"><user-profile :src="src"></user-profile></div>
    </div>
  </div>
</template>

<script>
import slideBar from "../components/slide-bar/slide-bar.vue";
import userProfile from "../components/user-profile/user-profile.vue";
import particles from '../components/particles/particles.vue'

export default {
  name: 'Home',
  components: {
    slideBar,
    userProfile,
    particles,
  },
  data () {
    return {
      title:"I'M",
      des:'Zero',
      src: require("../assets/img/wr-user.jpg"),
    }
  }
}
</script>
<style scoped>
.home{
  position: relative;
  height: 100vh;
  background: url("../assets/img/bg.jpg") no-repeat center;
  background-size: cover;
  overflow: hidden;
}
.wrap{
  width: 95vw;
  height: 90vh;
  background-color: rgb(44, 48, 80);
  position: absolute;
  left: calc(50% - 95vw / 2);
  top: calc(50% - 90vh / 2);
  display: flex;
  justify-content: space-between;
}
.container{
  overflow-y: auto;
}
.slideBar{
  position: absolute;
}
.lizi{
  position: fixed;
  width: 100%;
  height: 100%
}
@media screen and (max-width: 667px){
  .display, .slideBar{
    display: none;
  }
}
</style>
