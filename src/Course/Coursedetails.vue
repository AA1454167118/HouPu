<template>
    <div class="details">
        <div class="header">
            <div class="title">
                <div class="back left">
                    <router-link class="text" to="/">
                      <span>back</span> 
                    </router-link>
                </div> 
                 <div class="wrap right">
                    <router-link class="text" to="/">
                      <span>back2</span> 
                    </router-link>
                </div>               
                <div class="center">
                    <p class="ke">五年级物理第一讲</p>
                </div>
            </div>
        </div>
        <div class="nav"></div>
        <div class="video">
                <img class="hdImg" src="../assets/Course/Img.png" style="display:none">
            <div class="video-container f-pa">
                <div class="blur-video f-pa">
                    <div class="u-edu">
                        <img class="cimg" src="../assets/Course/Img.png" style="width:100%">
                        <a class="playbtn f-pa"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                
            };
        }
    }
</script>
<style scoped>
.details{
    width: 6.4rem;
}
.header{  
    height: 0.88rem;
    background-color: #2d2f3b;
    padding: 0.3rem 0.29rem;
    box-sizing:border-box;
}

.back .text{
    display: block;
    text-indent: -999px;
}
.title .back{
    background-image: url(../assets/Course/fanhui.png);
    height: 0.3rem;
    background-repeat: no-repeat;
    background-size: 0.3rem;
    min-width: 0.4rem;
    display: inline-block;
}
.center{
    float: right;
    margin-right: 0.07rem;
}
.center .ke {
font-size: 0.25rem;
color: #ffffff;
text-align: center;
width: 5rem;
}
.title .wrap{
    background-image: url(../assets/Course/fankui.png);
    height: 0.3rem;
    float: right;
    background-repeat: no-repeat;
    background-size: 0.3rem;
    min-width: 0.4rem;
    margin-right: -7px;
       
}
.wrap .text{
    display: block;
    text-indent: -1999px;
}
.video .hdImg{
    width: 100%;
    vertical-align: top;
}
.video .u-edu{
    height: 3.09rem;
    overflow: hidden;
    position: relative;
    left: 0;
    top: 0;
    cursor: pointer;
    text-align: center;
    background: #000;
}
.video .video-container{
    width: 100%;
    height: auto !important;
}
.u-edu .playbtn{
    left: 0;
    right: 0;
    top: 0;
    bottom: 3.5px;
    background-color: rgba(0, 0, 0, 0.4);
}
/* 清楚浮动 */
.nav::after{
content:"";
display:block;
clear:both;
}
div .playbtn{
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    margin: 0;
    background-color: rgba(0, 0, 0, 0.4);
    background: url(../assets/Course/播放.png)
}
/* 相对定位 */
.f-pa{
        position: absolute;
}


















/* 调整播放图标的大小,透明度的大小参考网站
https://study.163.com/course/introduction/1003737008.htm */
</style>


