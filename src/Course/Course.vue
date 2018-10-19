<template>
    <div class="outerLayer">
        <div class="header">
           <ul>
               <li><span @click="dialogTableVisible = true">语文</span><img src="../assets/Course/subscript.png" alt=""><img src="../assets/Course/shu.png" alt="" class="shu"></li>
               <li><span @click="dialogTableVisible = true">数学</span><img src="../assets/Course/subscript.png" alt=""><img src="../assets/Course/shu.png" alt="" class="shu"></li>
               <li><span @click="dialogTableVisible = true">英语</span><img src="../assets/Course/subscript.png" alt=""><img src="../assets/Course/shu.png" alt="" class="shu"></li>
               <li><span @click="dialogTableVisible = true">物理</span><img src="../assets/Course/subscript.png" alt=""><img src="../assets/Course/shu.png" alt="" class="shu"></li>
               <li><span @click="dialogTableVisible = true">科学</span><img src="../assets/Course/subscript.png" alt=""></li>
           </ul>
           <div class="search">
               <router-link to="/"><img src="../assets/Course/search.png" alt=""></router-link>
           </div>
        </div>
        <hr size="1" color="#e0e0e0" width="100%">
        <div>
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="stretch" >
                    <el-tab-pane label="专题课">
                        <div class="hotCourses">
                            <div class="videoCourses">
                                <img src="../assets/home/videoCourses-1.png" alt="">
                                <p><span>高考化学复习</span><span class="mianfei">免费</span></p>                            
                            </div>
                            <div class="videoCourses">
                                <img src="../assets/home/videoCourses-2.png" alt="">
                                <p><span>高中物理-相互作用</span><span class="mianfei">免费</span></p>
                            </div>
                        </div>
                        <div class="hotCourses">
                            <div class="videoCourses">
                                <img src="../assets/home/videoCourses-1.png" alt="">
                                <p><span>高考化学复习</span><span class="mianfei">免费</span></p>                            
                            </div>
                            <div class="videoCourses">
                                <img src="../assets/home/videoCourses-2.png" alt="">
                                <p><span>高中物理-相互作用</span><span class="mianfei">免费</span></p>
                            </div>
                        </div>
                        <div class="hotCourses">
                            <div class="videoCourses">
                                <img src="../assets/home/videoCourses-1.png" alt="">
                                <p><span>高考化学复习</span><span class="mianfei">免费</span></p>                            
                            </div>
                            <div class="videoCourses">
                                <img src="../assets/home/videoCourses-2.png" alt="">
                                <p><span>高中物理-相互作用</span><span class="mianfei">免费</span></p>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="长期班">
                        <div class="hotCourses">
                            <div class="videoCourses">
                                <img src="../assets/home/videoCourses-1.png" alt="">
                                <p><span>高考化学复习</span><span class="mianfei">免费</span></p>                            
                            </div>
                            <div class="videoCourses">
                                <img src="../assets/home/videoCourses-2.png" alt="">
                                <p><span>高中物理-相互作用</span><span class="mianfei">免费</span></p>
                            </div>
                        </div>
                        <div class="hotCourses">
                            <div class="videoCourses">
                                <img src="../assets/home/videoCourses-1.png" alt="">
                                <p><span>高考化学复习</span><span class="feiyong">￥200</span></p>                            
                            </div>
                            <div class="videoCourses">
                                <img src="../assets/home/videoCourses-2.png" alt="">
                                <p><span>高中物理-相互作用</span><span class="mianfei">免费</span></p>
                            </div>
                        </div>
                        <div class="hotCourses">
                            <div class="videoCourses">
                                <img src="../assets/home/videoCourses-1.png" alt="">
                                <p><span>高考化学复习</span><span class="mianfei">免费</span></p>                            
                            </div>
                            <div class="videoCourses">
                                <img src="../assets/home/videoCourses-2.png" alt="">
                                <p><span>高中物理-相互作用</span><span class="mianfei">免费</span></p>
                            </div>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </el-tabs>
        </div>
        <el-dialog :visible.sync="dialogTableVisible" width="70%">
            <el-row>
                <el-col :span="24"><p style="text-align:center;fontSize:0.2rem;color:#424242;">设置我的年级</p></el-col>
            </el-row>
            <p style="fontSize:0.2rem;color:#989898;marginBottom:0.1rem;">小学</p>
            <el-row>
                <el-col :span="8"><el-button size="small" round>一年级</el-button></el-col>
                <el-col :span="8"><el-button size="small" round>二年级</el-button></el-col>
                <el-col :span="8"><el-button size="small" round>三年级</el-button></el-col>
            </el-row>
            <el-row>
                <el-col :span="8"><el-button size="small" round>四年级</el-button></el-col>
                <el-col :span="8"><el-button size="small" round>五年级</el-button></el-col>
                <el-col :span="8"><el-button size="small" round>六年级</el-button></el-col>
            </el-row>
            <p style="fontSize:0.2rem;color:#989898;marginBottom:0.1rem;">初中</p>
            <el-row>
                <el-col :span="8"><el-button size="small" round>初一</el-button></el-col>
                <el-col :span="8"><el-button size="small" round>初二</el-button></el-col>
                <el-col :span="8"><el-button size="small" round>初三</el-button></el-col>
            </el-row>
            <p style="fontSize:0.2rem;color:#989898;marginBottom:0.1rem;">高中</p>
            <el-row>
                <el-col :span="8"><el-button size="small" round>高一</el-button></el-col>
                <el-col :span="8"><el-button size="small" round>高二</el-button></el-col>
                <el-col :span="8"><el-button size="small" round>高三</el-button></el-col>
            </el-row>
        </el-dialog>
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
  data () {
    return {
      dialogTableVisible: false,
      activeName: 'second',
      dialogFormVisible: false,
      stretch:'true'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style scoped>
.outerLayer{
width: 6.4rem;
}
.header{
position: relative;
margin-top: 0.1rem;
}
.header li{
float: left;
list-style: none;
text-align: center;
width: 1.2rem;
height: 0.5rem;
font-size: 0.25rem;
color: #a0a0a0;
}
.header li img{
margin-left: 0.05rem;
}
.search img{
width: 0.32rem;
height: 0.32rem;
position: absolute;
right: 0.1rem;
}
.header li .shu{
width: 0.01rem;
height: 0.24rem;
margin-left: 0.3rem;
}
.CurriculumCategory{
background: #000;
}
.hotCourses{
width: 6.4rem;
display: flex;
}
.videoCourses{
margin-left: 0.22rem;
width: 3.2rem;
border-radius: 10%;
}
.videoCourses img{
width: 2.8rem;
height: 1.7rem;
}
.videoName{
text-align: left;
margin-bottom: 0.2rem;
font-size: 0.2rem;
}
.videoCourses p{
margin-top: -1rem;
}
.videoCourses p span{
font-size: 0.2rem;
}
.mianfei{
font-size: 0.2rem;
display: block;
margin-top: 0.8rem;
margin-right: 0.16rem;
float: right;
color: #aed9ae;
}
.feiyong{
font-size: 0.2rem;
display: block;
margin-top: 0.8rem;
margin-right: 0.16rem;
float: right;
color: #ffaf55;
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
.el-row {
margin-bottom: 20px;
}
.bg-purple-dark {
background: #99a9bf;
}
.grid-content {
border-radius: 4px;
min-height: 36px;
}
</style>
