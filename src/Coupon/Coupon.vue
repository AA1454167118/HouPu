<template>
<div id="app">
    <div class="header">
        <span @click="goBack" class="goBack">返回</span>
        <span class="close">关闭</span>
        <span class="title">我的优惠券</span>
        <span class="more"><img src="../assets/Comments/more.png" alt=""></span>
    </div>
	<ul style="margin-top: 0.3rem;margin-left: 0.3rem;">
		<li v-for="(coupon,index) in coupons" @click="chooseQuan(index)">
			<div class="little">
				<div class="couponLeft">
                    <span class="reduction">立减</span>
                    <div class="money">
                        ￥<span style="font-size:0.48rem;">{{coupon.count}}</span>
                    </div>
                </div>
			</div>
			<div class="big">
				<p class="couponTitle"> 此券只适用于{{coupon.type}} </p>
				<p style="color:#999;font-size: 0.23rem;marginTop:0.23rem;"> 有效期至{{coupon.time}} </p>
				<span v-if="coupon.select === true" class="triangle"></span>
				<span class="quan">券</span>
			</div>
		</li>
	</ul>
</div>
</template>
<script>
export default {
    data () {
        return {
            coupons: [
					{
						type: '语文类',
						time: '2019-10-01',
						count: '10',
						select: false
					},
					{
						type: '语文类',
						time: '2019-10-01',
						count: '10',
						select: false
					},
					{
						type: '语文类',
						time: '2019-10-01',
						count: '10',
						select: false
					}
				]
        }
    },
    // created() {
	// 		this.coupons[0].select = true
	// 	},//默认选中第一个
		methods: {
			chooseQuan(i) {
				this.coupons.forEach(item => {
					item.select = false
				})
				this.coupons[i].select = true
            },
            goBack () {
                this.$router.go(-1)
            }
		
}
}
</script>
<style scoped>
#app{
    width: 6.4rem;
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
    margin-left: 1.5rem;
}
.more img{
    width: 0.4rem;
    height: 0.1rem;
}
ul {
    list-style: none;
}
li {
    overflow: hidden;
    width: 5.8rem;
    height: 1.67rem;
    margin-bottom: 0.1rem;
    box-shadow:0px 1px 10px 1px rgba(185, 181, 181, 0.5);
    margin-top: 0.3rem;
}
.reduction{
    font-size: 0.22rem;
}
.little {
    width: 2rem;
    float: left;
    height: 1.67rem;
    border-width: 1px 1px 1px 3px;
    border-color: #e5e5e5 #e5e5e5 #e5e5e5 orange;
    border-style: solid dashed solid solid;
    border-radius: 5px;
    color: #f58134;
    box-sizing: border-box;
    box-shadow: 0 2px 0 rgba(185, 181, 181, 0.5);
}
.little>div {
    padding-left: 0.1rem;
}
.couponLeft{
    margin-top: -0.7rem;
}
.big {
    width: 3.8rem;
    float: left;
    height: 1.67rem;
    padding: 0.2rem;
    box-sizing: border-box;
    border-width: 1px 1px 1px 0;
    border-style: solid;
    border-color: #e5e5e5;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 2px 0 rgba(185, 181, 181, 0.5);
}
/* .big>p {
} */
.couponTitle{
    margin-top: 0.15rem;
    font-size: 0.27rem;
}
.money{
    font-size: 0.24rem;
}
.quan {
    display: block;
    position: absolute;
    color: #e5e5e5;
    bottom: -0.2rem;
    right: -0.2rem;
    font-size: 0.7rem;
    border: 1px solid #e5e5e5;
    width: 1rem;
    height: 1rem;
    line-height: 0.8rem;
    text-align: center;
    border-radius: 50%;
}
.triangle {
    display: block;
    position: absolute;
    width: 0.3rem;
    height: 0.3rem;
    background-color: #f58134;
    transform: rotate(45deg);
    top: -0.15rem;
    right: -0.15rem;
    z-index: 999;
}
</style>
