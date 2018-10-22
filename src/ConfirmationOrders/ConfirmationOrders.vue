<template>
    <div class="home">
        <div class="header">
            <span @click="goBack" class="goBack">返回</span>
            <span class="close">关闭</span>
            <span class="title">确认订单</span>
            <span class="more"><img src="../assets/Comments/more.png" alt=""></span>
        </div>
        <div class="video">
            <div class="videoImg">

            </div>
            <div class="price">
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
    return {
    }
  },
  methods: {
      goBack () {
          this.$router.go(-1)
      }
  }
}
</script>
<style scoped>
.home{
    background: #f2f2f2;
}
.header{
    width: 6.4rem;
    height: 0.9rem;
    background: #1b1a1f;
    color: #fff;
    font-size: 0.3rem;
}
.goBack{
    display: inline-block;
    background: url('../assets/Comments/goBack.png') no-repeat 0.05rem;
    background-size: 0.2rem 0.3rem;
    padding-left: 0.3rem;
    margin-top: 0.2rem;
    margin-left: 0.1rem;
}
.close{
    display: inline-block;
    margin-left: 0.1rem;
}
.title{
    display: inline-block;
    margin-left: 0.8rem;
}
.more{
    display: inline-block;
    margin-left: 1.7rem;
}
.more img{
    width: 0.4rem;
    height: 0.1rem;
}
.video{
    width: 6.4rem;
    height: 1.9rem;
}
</style>
