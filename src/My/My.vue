<template>
    <div class="My">
        <div class="header">
            <div class="headPortrait">
                <img src="../assets/home/wmm.jpg" alt="">
            </div>
            <div class="userName">
                <p class="name">userName</p>
                <p>年级：<span>小学一年级</span></p>
            </div>
        </div>
        <div class="nav">
            <div class="order">
                <div class="orderTitle">我的订单</div>
                <div class="goTo"><img src="../assets/My/goto.png" alt=""></div>
            </div>
            <div class="coupon">
                <div class="couponTitle">优惠券</div>
                <div class="goTo"><img src="../assets/My/goto.png" alt=""></div>
            </div>
            <div class="test">
                <div class="testTitle">小测验</div>
                <div class="goTo"><img src="../assets/My/goto.png" alt=""></div>
            </div>
        </div>
        <div class="quit">退出登录</div>
		<div class="kong" style="margin-bottom:1rem;"></div>
		<div class="footer">
			<div class="toWhere">
				<router-link to="/"><img src="../assets/home/home.png" alt=""></router-link>
			</div>
			<div class="toWhere">
				<router-link to="/"><img src="../assets/home/toCourse.png" alt=""></router-link>
			</div>
			<div class="toWhere">
				<router-link to="/"><img src="../assets/home/toMy.png" alt=""></router-link>
			</div>
		</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.My{
    width: 6.4rem;
    height: 100%;
    background: #f2f2f2;
}
.header{
    height: 3rem;
    background: #0195ff;
}
.headPortrait,.userName{
    float: left;
}
.headPortrait{
    margin: 0.8rem 0.6rem 0 0.3rem;
}
.headPortrait img{
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 50%;
}
.userName{
    margin-top: 1.1rem;
}
.userName p{
    font-size: 0.28rem;
    color: #fff;
}
.name{
    margin-bottom: 0.1rem;
}
.order,.coupon,.test{
    height: 1.12rem;
    width: 6.4rem;
    background: #fff;
    border-bottom: 1px solid #f2f2f2;
    position: relative;
}
.orderTitle{
    position: absolute;
    left: 0.3rem;
    bottom: 0.3rem;
    background: url('../assets/My/order.png') no-repeat;
    background-size: 0.4rem 0.5rem;
    font-size: 0.3rem;
    padding-left: 0.7rem;
    padding-bottom: 0.1rem;
    padding-top: 0.05rem;
}
.couponTitle{
    position: absolute;
    left: 0.3rem;
    bottom: 0.3rem;
    background: url('../assets/My/coupon.png') no-repeat;
    background-size: 0.5rem 0.4rem;
    font-size: 0.3rem;
    padding-left: 0.7rem;
    padding-bottom: 0.05rem;
}
.testTitle{
    position: absolute;
    left: 0.3rem;
    bottom: 0.3rem;
    background: url('../assets/My/test.png') no-repeat;
    background-size: 0.4rem 0.5rem;
    font-size: 0.3rem;
    padding-left: 0.7rem;
    padding-bottom: 0.1rem;
    padding-top: 0.05rem;
}
.goTo{
    position: absolute;
    right: 0.3rem;
    bottom: 0.15rem;
}
.quit{
    width: 6.4rem;
    height: 1.12rem;
    font-size: 0.32rem;
    background: #fff;
    margin-top: 0.2rem;
    text-align: center;
    line-height: 1.12rem;
    color: #0195ff;
}
.footer{
	width: 6.4rem;
	height: 0.8rem;
	display: flex;
	position: fixed;
	bottom: 0;
	background: #fff;
}
.toWhere{
	margin-top: -0.4rem;
	width: 2rem;
}
.toWhere img{
	width: 0.4rem;
	height: 0.6rem;
	margin-left: 1rem;
}
</style>
