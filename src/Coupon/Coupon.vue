<template>
    <div id="app">
	<ul style="margin-top: 0.3rem;margin-left: 0.3rem;">
		<li v-for="(coupon,index) in coupons" @click="chooseQuan(index)">
			<div class="little">
				<span>立减</span>
				<div>
					￥<span style="font-size:0.25rem;">{{coupon.count}}</span>
				</div>
			</div>
			<div class="big">
				<p> 此券只适用于{{coupon.type}} </p>
				<p style="color:#e5e5e5;font-size: 0.12rem;"> 有效期至{{coupon.time}} </p>
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
    created() {
			this.coupons[0].select = true
		},
		methods: {
			chooseQuan(i) {
				this.coupons.forEach(item => {
					item.select = false
				})
				this.coupons[i].select = true
			}
		
}
}
</script>
<style scoped>
#app{
    width: 6.4rem;
    font-size: 0.14rem;
}
ul {
    list-style: none;
}
li {
    overflow: hidden;
    width: 5rem;
    margin-bottom: 0.1rem; 
}
.little {
    width: 0.95rem;
    float: left;
    height: 0.8rem;
    border-width: 1px 1px 1px 3px;
    border-color: #e5e5e5 #e5e5e5 #e5e5e5 orange;
    border-style: solid dashed solid solid;
    border-radius: 5px;
    color: orange;
    padding: 0.1rem;
    box-sizing: border-box;
    box-shadow: 0 2px 0 rgba(185, 181, 181, 0.5);
}
.little>div {
    padding-left: 0.1rem;
}
.big {
    width: 2.4rem;
    float: left;
    height: 0.8rem;
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
.big>p {
    line-height: 0.2rem;
}
.quan {
    display: block;
    position: absolute;
    color: #e5e5e5;
    bottom: -0.1rem;
    right: -0.13rem;
    font-size: 0.45rem;
    border: 1px solid #e5e5e5;
    width: 0.5rem;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    border-radius: 0.5rem;
    padding: 0.1rem;
}
.triangle {
    display: block;
    position: absolute;
    width: 0.3rem;
    height: 0.3rem;
    background-color: orange;
    transform: rotate(45deg);
    top: -0.15rem;
    right: -0.15rem;
    z-index: 999;
}
</style>
