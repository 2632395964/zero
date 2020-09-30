<template>
  <div class="default container" id="demo">
      <div class=" w-100 " style="max-height: 90vh">
        <content-head>
          <div slot="title">I'M</div>
          <div slot="des">Zero</div>
        </content-head>
      </div>
      <div class="row">
      <button class="col-sm-12 col-md-4 btn btn-light rounded border-0" @click="about">
        <my-icon id="icon-wo" color="text-danger" size="48"></my-icon>
        <h3>About me</h3>
      </button>
      <button class="col-sm-12 col-md-4 btn btn-light rounded border-0" @click="resume">
        <my-icon id="icon-resume" color="text-warning" size="45"></my-icon>
        <h3>resume</h3>
      </button>

      <button class="col-sm-9 btn btn-light rounded border-0" @click="portfolio">
        <my-icon id="icon-portfolio" color="text-success" size="45"></my-icon>
        <h3>portfolio</h3>
      </button>
    </div>
  </div>
</template>
<script>
import contentHead from "../components/content-head/content-head.vue";

export default {
  components: {
    contentHead,
  },
  methods: {
    about(){
      this.$router.push({
        path:'/About'
      })
    },
    resume(){
      this.$router.push('/Resume')
    },
    portfolio(){
      this.$router.push('/Portfolio')
    }
  }
}
</script>
<style scoped>
.row {
  height: 60vh;
  justify-content: center;
}
.default> .row > .btn-light {
  color: white;
  margin: 20px 44px;
  background-color: rgba(255, 255, 255, 0.1);
}
.default> button{
  width: 50%;
}
#demo::-webkit-scrollbar{
  display: none;
}
</style>