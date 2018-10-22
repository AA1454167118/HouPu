<template>
    <div class="details">
        <div class="head">
            <span @click="goBack" class="goBack">返回</span>
            <span class="close">关闭</span>
            <span class="title">厚朴教育-课程</span>
            <span class="more"><img src="../assets/Comments/more.png" alt=""></span>
        </div>
        <div>
            <div class="videoTitle">
                <img src="../assets/Course/goBack.png" alt="" class="goToBack" @click="goBack">
                <span>五年级物理课第一讲</span>
                <img src="../assets/Course/write.png" alt="" class="write">
            </div>
        </div>
        <div class="video">
           <video-player class="video-player vjs-custom-skin"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions">
            </video-player>
        </div>
        <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="stretchRule">
            <el-tab-pane label="课程目录" name="first">
                <p class="chapters"><span>●</span>&emsp;第1章  高中物理相互作用</p>
                <div class="chaptersList">
                    <p class="downOn">▷&emsp;1-1相互作用的含义<span>8:20</span></p>
                    <p class="other">▷&emsp;1-2相互作用的影响<span>8:20</span></p>
                    <p class="other">▷&emsp;1-3相互作用的用途<span>8:20</span></p>
                    <p class="other">▷&emsp;1-4相互作用的按理分析<span>8:20</span></p>
                </div>
                <p class="chapters"><span>●</span>&emsp;第2章  高中物理相互作用</p>
                <div class="chaptersList">
                    <p class="other">▷&emsp;1-3相互作用的用途<span>8:20</span></p>
                    <p class="other">▷&emsp;1-4相互作用的按理分析<span>8:20</span></p>
                </div>
                <p class="chapters"><span>●</span>&emsp;第3章  总结</p>
                <div class="chaptersListLast">
                    <p class="other">▷&emsp;1-3相互作用的用途<span>8:20</span></p>
                </div>
                <div class="download">
                    <span>【章节测试】初中物理试题（上）</span><img src="../assets/Course/download.png" alt="">
                </div>
                <div class="download">
                    <span>【讲义下载】初中物理试题（上）</span><img src="../assets/Course/download.png" alt="">
                </div>
                <div style="height:1rem;"></div>
                <div class="footer">
                    <div class="actualPayments">
                        <span>￥600.00</span>
                    </div>
                    <div class="submitOrder">
                        <p>立即订购</p>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="课程简介" name="second">简介简介简介</el-tab-pane>
            <el-tab-pane label="课程评论" name="third">角色管理33</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
export default{
    data(){
        return{
            activeName: 'first',
            stretchRule:true,
             playerOptions: {
                //playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                autoplay: false, //如果true,浏览器准备好时开始回放。
                muted: false, // 默认情况下将会消除任何音频。
                loop: false, // 导致视频一结束就重新开始。
                preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                language: 'zh-CN',
                aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                sources: [{
                type: "application/x-mpegURL",
                src: "../assets/Course/test.mp4" //你的m3u8地址（必填）
                }],
                poster: "../assets/Course/test.jpg", //你的封面地址
                // width: document.documentElement.clientWidth,
                notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                 controlBar: {
                  timeDivider: true,
                  durationDisplay: true,
                  remainingTimeDisplay: false,
                  fullscreenToggle: true //全屏按钮
                 }
            } 
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        goBack () {
            this.$router.go(-1)
        },
    },
}
</script>
<style scoped>
.details{
    width: 6.4rem;
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
    margin-left: 0.3rem;
}
.more{
    display: inline-block;
    margin-left: 1.5rem;
}
.more img{
    width: 0.4rem;
    height: 0.1rem;
}
.videoTitle{
    width: 6.4rem;
    height: 0.9rem;
    background: #2d2f3b;
    line-height: 0.35rem;
}
.videoTitle span{
    font-size: 0.28rem;
    color: #fff;
    display: inline-block;
    margin-left: 1rem;
}
.goToBack{
    width: 0.27rem;
    height: 0.3rem;
    margin-left: 0.3rem;
}
.write{
    width: 0.26rem;
    height: 0.28rem;
    margin-top: 0.1rem;
    margin-left: 1rem;
}
.video-js{
    height: 2.65rem;
}
.chapters{
    color: #424242;
    font-size: 0.26rem;
    margin-left: 0.3rem;
    line-height: 0.4rem;
}
.chapters span{
    font-size: 0.5rem;
    color: #d9dce1;
}
.chaptersList{
    width: 6.1rem;
    margin-top: -0.2rem;
    margin-bottom: -0.2rem;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    margin-left: 0.45rem;
    border-left: 1px solid #d9dce1;
    font-size: 0.23rem;
}
.downOn{
    color: #0196fd;
}
.chaptersList p{
    margin-left: 0.3rem;
    position: relative;
}
.chaptersList p span{
    position: absolute;
    right: 0.5rem;
}
.other{
    margin-top: 0.2rem;
    color:#999;
}
.chaptersListLast{
    width: 6.1rem;
    margin-top: -0.2rem;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    margin-left: 0.45rem;
    font-size: 0.23rem;
}
.chaptersListLast p{
    margin-left: 0.3rem;
    position: relative;
}
.chaptersListLast p span{
    position: absolute;
    right: 0.5rem;
}
.download{
    width: 6.4rem;
    height: 1.07rem;
    padding-left: 0.3rem;
    border-top: 1px solid #e0e0e0;
    font-size: 0.26rem;
    color: #434343;
    line-height: 1rem;
    position: relative;
}
.download img{
    width: 0.44rem;
    height: 0.44rem;
    position: absolute;
    right: 0.6rem;
    top: 0.3rem;
}
.footer{
    width: 6.4rem;
    height: 1rem;
    background: #fff;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #e0e0e0;
}
.actualPayments,.submitOrder{
    float: left;
}
.actualPayments{
    width: 2rem;
    height: 1rem;
    margin-left: 0.3rem;
    line-height: 0.5rem;
}
.submitOrder{
    width: 3.75rem;
    height: 1rem;
    margin-left: 0.35rem;
    background: #0099ff;
    text-align: center;
    color: #fff;
    font-size: 0.35rem;
    line-height: 1rem;
}
.actualPayments span{
    font-size: 0.26rem;
    color: #fd6801;
}
</style>


