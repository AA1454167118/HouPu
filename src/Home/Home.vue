<template>
	<div class="home">
		<div class="loop">
			<router-link to="/"><img src="../assets/home/loop.png" alt=""></router-link>
		</div>
		<div class="nav">
			<div class="Grid-cell">
				<router-link to="/">
					<img src="../assets/home/nav-1.png" alt="">
	        		<p>0元体验</p>
				</router-link>	
      		</div>
	        <div class="Grid-cell nav-2">
	        	<router-link to="/">
	        		<img src="../assets/home/nav-2.png" alt="">
	        		<p>最新课程</p>
	        	</router-link>
	        </div>
	        <div class="Grid-cell">
	        	<router-link to="/">
	        		<img src="../assets/home/nav-3.png" alt="">
	          		<p>限时促销</p>
	        	</router-link>
	        </div>
	        <div class="Grid-cell">
	        	<router-link to="/">
	        		<img src="../assets/home/nav-4.png" alt="">
	          		<p>在线检测</p>
	        	</router-link>
	         </div>
		</div>
		<div class="kong"></div>
		<div class="hotCoursesTitle">
			<div class="titleBar"></div>
			<p>热门课程</p>
			<router-link to="/"><img src="../assets/home/more.png" alt="" class="more"></router-link>
		</div>
		<hr size="1" color="#e0e0e0" width="100%">
		<div class="hotCourses">
			<div class="videoCourses">
              <img src="../assets/home/videoCourses-1.png" alt="">
              <p class="videoName">高考化学复习精品课程</p>
          	</div>
            <div class="videoCourses">
              <img src="../assets/home/videoCourses-2.png" alt="">
              <p class="videoName">高中物理-相互作用</p>
          </div>
		</div>
		<div class="hotCourses">
			<div class="videoCourses">
              <img src="../assets/home/videoCourses-3.png" alt="">
              <p class="videoName">视频名称：五年级第一讲</p>
          	</div>
            <div class="videoCourses">
              <img src="../assets/home/videoCourses-4.png" alt="">
              <p class="videoName">视频名称：五年级第一讲</p>
          </div>
		</div>
		<div class="kong"></div>
		<div class="hotCoursesTitle">
			<div class="titleBar"></div>
			<p>名师介绍</p>
			<router-link to="/"><img src="../assets/home/more.png" alt="" class="more"></router-link>
		</div>
		<hr size="1" color="#e0e0e0" width="100%">
		<div class="master">
			<div class="masterMessage">
				<img src="../assets/home/lgy.png" alt="">
				<p>李国艺</p>
				<p class="masterinf">毕业于北京师范大学应用物理系，擅长高中物理、数学等</p>
			</div>
			<div class="masterMessage">
				<img src="../assets/home/lm.png" alt="">
				<p>刘敏</p>
				<p class="masterinf">毕业于北京师范大学应用物理系，擅长高中物理、数学等</p>
			</div>
			<div class="masterMessage">
				<img src="../assets/home/lgy.png" alt="">
				<p>刘敏</p>
				<p class="masterinf">毕业于北京师范大学应用物理系，擅长高中物理、数学等</p>
			</div>
			<div class="masterMessage">
				<img src="../assets/home/lm.png" alt="">
				<p>刘敏</p>
				<p class="masterinf">毕业于北京师范大学应用物理系，擅长高中物理、数学等</p>
			</div>
		</div>
		<div class="kong"></div>
		<div class="hotCoursesTitle">
			<div class="titleBar"></div>
			<p>优秀学员</p>
			<router-link to="/"><img src="../assets/home/more.png" alt="" class="more"></router-link>
		</div>
		<hr size="1" color="#e0e0e0" width="100%">
		<div class="excellentCadet">
			<div class="studentInformation">
				<div class="studentInformation-left">
					<img src="../assets/home/wmm.jpg" alt="">
				</div>
				<div class="studentInformation-right">
					<p style="margin-top:0.3rem;">王明明</p>
					<p class="studentInf">就读于北京外国语学校，在这学习一年</p>
				</div>				
			</div>
			<div class="studentInformation">
				<div class="studentInformation-left">
					<img src="../assets/home/wmm.jpg" alt="">
				</div>
				<div class="studentInformation-right">
					<p style="margin-top:0.3rem;">王明明</p>
					<p class="studentInf">就读于北京外国语学校，在这学习一年</p>
				</div>				
			</div>
		</div>
		<div class="excellentCadet">
			<div class="studentInformation">
				<div class="studentInformation-left">
					<img src="../assets/home/wmm.jpg" alt="">
				</div>
				<div class="studentInformation-right">
					<p style="margin-top:0.3rem;">王明明</p>
					<p class="studentInf">就读于北京外国语学校，在这学习一年</p>
				</div>				
			</div>
			<div class="studentInformation">
				<div class="studentInformation-left">
					<img src="../assets/home/wmm.jpg" alt="">
				</div>
				<div class="studentInformation-right">
					<p style="margin-top:0.3rem;">王明明</p>
					<p class="studentInf">就读于北京外国语学校，在这学习一年</p>
				</div>				
			</div>
		</div>
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
	
</script>
<style scoped>
.loop img{
	width: 100%;
}
.nav{
	display: flex;
	width: 6.4rem;
}
.Grid-cell{
	margin-left: 0.35rem;
    width: 1.6rem;
}
.Grid-cell p{
	margin-top: -0.1rem;
	margin-left: 0rem;
	font-size: 0.18rem;
	color: #343434;
}
.Grid-cell img{
	width: 0.9rem;
	height: 0.9rem;
}
.nav-2 img{
	width: 0.9rem;
	height: 0.9rem;
}
.kong{
	width: 6.4rem;
	height: 0.16rem;
	background: #f2f2f2;
	margin-top: 0.1rem;
}
.hotCoursesTitle{
	height: 0.52rem;
}
.titleBar{
	width: 0.08rem;
	height: 0.34rem;
	background: #0096ff;
	margin-left: 0.25rem;
	float: left;
}
.hotCoursesTitle p{
	margin: 0.4rem 0 -0.9rem 0.5rem;
	font-size: 0.24rem;
	color: #424242;
}
.hotCoursesTitle img{
	width: 0.75rem;
	margin-left: 0.1rem;
}
.hotCoursesTitle .more{
	width: 0.4rem;
	height: 0.11rem;
	float: right;
	margin-right: 0.3rem;
	margin-top: 0.05rem;
}
.hotCourses{
	display: flex;
	width: 6.4rem;
	margin-top: 0.3rem;
}
.videoCourses{
	margin-left: 0.25rem;
	width: 3.2rem;
	border-radius: 10%;
}
.videoCourses img{
	width: 2.7rem;
	height: 1.7rem;
}
.speaker{
	line-height: 0.3rem;
	text-align: center;
	margin-top: -0.3rem;
	width: 2.67rem;
	height: 0.3rem;
	border: 1px solid #999;
	font-size: 0.18rem;
}
.videoName{
	text-align: left;
	margin-bottom: 0.2rem;
	font-size: 0.2rem;
}
.master{
	display: flex;
	width: 6.4rem;
	margin-top: 0.3rem;
	height: 3rem;
}
.masterMessage{
	box-shadow: 0.05rem 0.05rem 0.05rem rgb(172, 172, 172);
	width: 1.4rem;
	margin-left: 0.2rem;
	height: 2.5rem;
}
.masterMessage img{
	width: 1.4rem;
	height: 1.2rem;
}
.masterMessage p{
	margin-left: 0.1rem;
	text-align: left;
	font-size: 0.18rem;
}
.masterMessage .masterinf{
	margin-top: 0.1rem;
	font-size: 0.13rem;
	color: #9a9a9a;
	position: relative;
	line-height: 0.25rem;
	height: 0.5rem;
	overflow: hidden;
}
.masterinf::after{
	content: "...";
	position: absolute;
	bottom: 0;
	right: 0;
}
.excellentCadet{
	display: flex;
	width: 6.4rem;
}
.studentInformation-left,.studentInformation-left{
	float: left;
}
.studentInformation{
	width: 3rem;
	height: 1.5rem;
	box-shadow: 0rem 0rem 0.1rem rgb(172, 172, 172);
	margin-top: 0.3rem;
	margin-left: 0.1rem;
}
.studentInformation-left{
	width: 1.5rem;
	height: 1rem;
}
.studentInformation img{
	width: 1rem;
	height: 1.1rem;
	margin-left: 0.1rem;
	margin-top: 0.2rem;
	border-radius: 50%;
}
.studentInformation p{
	font-size: 0.18rem;
	float: left;
}
.studentInf{
	clear:both;
	margin-left:1.45rem;
	margin-top:-0.3rem;
	color:#b6b6b6;
	position: relative;
	line-height: 0.25rem;
	height: 0.5rem;
	width: 1.4rem;
	overflow: hidden;
}
.studentInf::after{
	content: "...";
	position: absolute;
	bottom: 0;
	right: 0;
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