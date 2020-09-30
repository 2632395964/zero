<template>
  <div class="content-head">
    <div>
      <h1>
        <slot name="title" />
      </h1>
      <h1>
        <slot name="des" />
      </h1>
    </div>
    <div>
      <h6><slot name="calc" /></h6>
    </div>
    <my-icon class="quit" id="icon-signout" size="35" v-if="showStatus" @click.native="quit()"></my-icon>
  </div>
</template>
<script>
export default {
  data () {
    return {
      showStatus:true  
    }
  },
  methods: {
    quit(){
      this.$router.go(-1)
    }
  },
  created () {
    if (this.$route.path==='/') {
      this.showStatus = false
    }
  }
}
</script>
<style scoped>
.content-head {
  width: 100%;
  height: 15vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.content-head > div {
  display: flex;
}

.content-head > div > h1:nth-child(2) {
  color: rgb(6, 255, 247);
  margin-left: 10px;
}

.quit {
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
}
</style>