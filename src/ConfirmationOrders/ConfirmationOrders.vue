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
                <img src="../assets/ConfirmationOrders/video.png" alt="">
            </div>
            <div class="price">
                <p class="courseName">高中物理-相互作用</p>
                <p class="keynoteSpeaker">主讲人：李敏</p>
                <p class="priceAll">￥600</p>
            </div>
        </div>
        <div class="Coupon">
            <div class="selectCoupon">
                <p>优惠券&emsp;<span>2张可用</span></p>
            </div>
            <div class="less">
                <span>-￥10</span>
            </div>
        </div>
        <div class="deduct">
            <div class="total">
                <span class="moneyTitle">总额</span><span class="money">-￥600</span>
            </div>
            <div class="deduction">
                <span class="moneyTitle">优惠抵扣</span><span class="money">-￥10</span>
            </div>
        </div>
        <div class="footer">
            <div class="actualPayments">
                <p>实付：<span>￥590</span></p>
            </div>
            <div class="submitOrder">
                <p>提交订单</p>
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
    background: #fff;
    border-bottom: 1px solid #e0e0e0;
}
.videoImg,.price{
    float: left;
}
.videoImg img{
    width: 2.25rem;
    height: 1.3rem;
    margin-top: 0.3rem;
    margin-left: 0.3rem;
}
.price{
    margin-top: 0.3rem;
    margin-left: 0.3rem;
}
.courseName,.keynoteSpeaker{
    font-size: 0.25rem;
}
.keynoteSpeaker{
    margin-top: 0.2rem;
}
.priceAll{
    font-size: 0.2rem;
    color: #fd6801;
    margin-top: 0.2rem;
}
.Coupon{
    width: 6.4rem;
    height: 1rem;
    background: #fff;
    line-height: 1rem;
}
.selectCoupon{
    margin-left: 0.3rem; 
    font-size: 0.26rem;
}
.selectCoupon,.less{
    float: left;
}
.selectCoupon p{
    color: #424242;
}
.selectCoupon span{
    font-size: 0.19rem;
    display: inline-block;
    width: 0.9rem;
    height: 0.32rem;
    background: #1a9afb;
    color: #fff;
    border-radius: 0.05rem;
    text-align: center;
    line-height: 0.32rem;
}
.less{
    width: 3rem;
    height: 1rem;
    margin-left: 1.1rem;
    position: relative;
}
.less span{
    position: absolute;
    right: 0;
    font-size: 0.19rem;
    width: 1rem;
    color: #ff6903;
    display: inline-block;
    background: url('../assets/ConfirmationOrders/goTo.png') no-repeat 0.6rem;
}
.deduct{
    width: 6.4rem;
    height: 1.52rem;
    background: #fff;
    margin-top: 0.16rem;
}
.total,.deduction{
    height: 0.76rem;
    position: relative;
}
.deduct .moneyTitle{
    position: absolute;
    bottom: 0.23rem;
    left: 0.3rem;
    font-size: 0.28rem;
    color:#424242; 
}
.deduct .money{
    font-size: 0.19rem;
    color: #fd6801;
    position: absolute;
    right: 0.3rem;
    bottom: 0.26rem;
}
.footer{
    width: 6.4rem;
    height: 1rem;
    background: #fff;
    position: fixed;
    bottom: 0;
}
.actualPayments,.submitOrder{
    float: left;
    line-height: 1rem;
}
.actualPayments{
    width: 2rem;
    height: 1rem;
    margin-left: 0.3rem;
}
.submitOrder{
    width: 3.75rem;
    height: 1rem;
    margin-left: 0.35rem;
    background: #0099ff;
    text-align: center;
    color: #fff;
    font-size: 0.32rem;
}
.actualPayments p{
    font-size: 0.23rem;
    color: #424242;
}
.actualPayments p span{
    font-size: 0.24rem;
    color: #fd6801;
}
</style>
