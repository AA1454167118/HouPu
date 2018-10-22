<template>
    <div class="index">
        <div class="head">
            <span @click="goBack" class="goBack">返回</span>
            <span class="close">关闭</span>
            <span class="title">我的订单</span>
            <span class="more"><img src="../assets/Comments/more.png" alt=""></span>
        </div>
        <div class="orderDetails">
            <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="stretch">
                <el-tab-pane label="全部订单" name="first">
                    <div class="oneOfThem">
                        <p class="orderNumber">订单号：0020181001&emsp;&emsp;&emsp;&emsp;&emsp;<span class="state">待支付</span></p>
                        <div class="video">
                            <div class="videoImg">
                                <img src="../assets/ConfirmationOrders/video.png" alt="">
                            </div>
                            <div class="price">
                                <p class="courseName">高中物理-相互作用</p>
                                <p class="keynoteSpeaker">主讲人：李敏</p>
                                <p class="priceAll">2019-10-01  12 : 00</p>
                            </div>
                        </div>
                        <div class="payments">
                                <p>实付：<span>￥600</span></p>
                        </div>
                    </div>
                    <div class="oneOfThem them">
                        <p class="orderNumber">订单号：0020181001&emsp;&emsp;&emsp;&emsp;&emsp;<span class="state">已支付</span></p>
                        <div class="video">
                            <div class="videoImg">
                                <img src="../assets/ConfirmationOrders/video.png" alt="">
                            </div>
                            <div class="price">
                                <p class="courseName">高中物理-相互作用</p>
                                <p class="keynoteSpeaker">主讲人：李敏</p>
                                <p class="priceAll">2019-10-01  12 : 00</p>
                            </div>
                        </div>
                        <div class="payments">
                                <p>实付：<span>￥20</span></p>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="待支付" name="second">
                    <div class="oneOfThem">
                        <p class="orderNumber">订单号：0020181001&emsp;&emsp;&emsp;&emsp;&emsp;<span class="state">待支付</span></p>
                        <div class="video">
                            <div class="videoImg">
                                <img src="../assets/ConfirmationOrders/video.png" alt="">
                            </div>
                            <div class="price">
                                <p class="courseName">高中物理-相互作用</p>
                                <p class="keynoteSpeaker">主讲人：李敏</p>
                                <p class="priceAll">2019-10-01  12 : 00</p>
                            </div>
                        </div>
                        <div class="payments">
                                <p>实付：<span>￥600</span></p>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="已支付" name="third">
                    <div class="oneOfThem">
                        <p class="orderNumber">订单号：0020181001<span class="state">已支付</span></p>
                        <div class="video">
                            <div class="videoImg">
                                <img src="../assets/ConfirmationOrders/video.png" alt="">
                            </div>
                            <div class="price">
                                <p class="courseName">高中物理-相互作用</p>
                                <p class="keynoteSpeaker">主讲人：李敏</p>
                                <p class="priceAll">2019-10-01  12 : 00</p>
                            </div>
                        </div>
                        <div class="payments">
                                <p>实付：<span>￥20</span></p>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>

    </div>    
</template>
<script>
export default {
    data() {
      return {
        activeName: 'first',
        stretch:true
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      goBack () {
       this.$router.go(-1)
    }
    }
};
</script>
<style>
.index{
    width: 6.4rem;
    background: #f2f2f2;
}
.orderDetails{
    background: #fff;
}
.head{
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
.oneOfThem{
    position: relative;
}
.orderNumber{
    line-height: 0.7rem;
    padding-left: 0.3rem;
    font-size: 0.19rem;
    color: #1b1a1f;
    width: 6.4rem;
    height: 0.7rem;
    background: #fafafa;
}
.orderNumber span{
    font-size: 0.24rem;
    position: absolute;
    right: 0.3rem;
    color: #ff6702;
}
.video{
    width: 6.4rem;
    height: 1.9rem;
    background: #f4f4f4;
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
    color: #b1b1b1 ;
    margin-top: 0.2rem;
}
.payments{
    width: 6.4rem;
    height: 0.8rem;
    background: #fafafa;
    text-align: right;
    font-size: 0.24rem;
    line-height: 0.8rem;
}
.payments p{
    margin-right: 0.3rem;
}
.payments p span{
    font-size: 0.22rem;
    color: #ff6702;
}
.them{
    margin-top: 0.16rem;
}
</style>
