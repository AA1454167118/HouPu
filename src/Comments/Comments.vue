<template>
    <div>
        <div class="header">
            <span @click="goBack" class="goBack">返回</span>
            <span class="close">关闭</span>
            <span class="title">添加评论</span>
            <span class="more"><img src="../assets/Comments/more.png" alt=""></span>
        </div>
        <div class="comments">
            <p>课程名称：小学语文一年级（上）</p>
            <div class="block">
                <el-rate v-model="value1" allow-half="true"></el-rate>
            </div>
            <textarea rows="8" cols="50" placeholder="您的宝贵评价，对我们非常重要哦~"></textarea>
            <div class="submitTo">提交</div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
        value1: null,
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
.comments{
    width: 6.4rem;
    height: 5rem;
}
.comments p{
    margin-left: 0.3rem;
    margin-top: 0.7rem;
    font-size: 0.3rem;
}
.block{
    text-align: center;
}
textarea{
    width: 6rem;
    height: 3rem;
    padding-top: 0.1rem;
    padding-left: 0.1rem;
    margin-top: 1rem;
    margin-left: 0.15rem;
    margin-right: 0.1rem;
}
.submitTo{
    width: 6.4rem;
    height: 1rem;
    background: #1b9bfc;
    position: fixed;
    bottom: 0;
    text-align: center;
    color: #fff;
    font-size: 0.4rem;
    line-height: 1rem;
}
</style>
