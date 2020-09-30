<template>
  <div id="app">
    <router-view />
    <div class="aplayers" >
          <aplayer float ref="aplayer" autoplay
              :music="{
                title: '安河桥',
                artist: '宋东野',
                src:require('../static/bg.mp3') ,
                pic: ''
              }"
            />
        </div>
  </div>
</template>
<script>
import aplayer from 'vue-aplayer'
export default {
  components: {
    aplayer,
  },
  created () {
    console.log(this.$refs)

  }
}
</script>
<style scoped>
@import'./assets/css/animate.min.css';
@import'./assets/css/bootstrap.min.css';
@import'./assets/css/iconfont.css';

.aplayers{
  width: 300px;
  position: fixed;
  bottom: 0;
  left: 20px;
}
</style>
