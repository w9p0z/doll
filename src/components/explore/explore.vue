<template>
  <!--发现组件-->
  <div class="outter" :class="{'hideLeft':$route.path.split('/').length>2}">
    <header class="app-header" :class="{'header-hide':!$store.state.headerStatus}">
      <wx-header :pageName="pageName"></wx-header>
    </header>
    <div id="explore">
      <section>
        <div class="weui-cells">
          <router-link to="/moments" class="weui-cell weui-cell_access" tag="div" v-on:click.native="momentNewMsg=false">
            <div class="weui-cell__hd">
              <img src="../../assets/images/find_icon-circle.png" >
            </div>
            <div class="weui-cell__bd" style="line-height: 28px;">
              朋友圈
            </div>
            <div class="weui-cell__ft">
              <div class="home__notice" v-show="momentNewMsg">
                <img src="https://sinacloud.net/vue-wechat/images/headers/yehua.jpg" alt="" class="">
                <i class="new-msg-dot"></i>
              </div>
            </div>
          </router-link>
        </div>
        <div class="weui-cells">
          <div class="weui-cell weui-cell_access" id="scanCell">
            <div class="weui-cell__hd">
             <img src="../../assets/images/find_icon-qrcode.png" >
            </div>
            <div class="weui-cell__bd">
              扫一扫
            </div>
          </div>
          <div class="weui-cell weui-cell_access">
            <div class="weui-cell__hd">
              <img src="../../assets/images/find_icon-shake.png">
            </div>
            <div class="weui-cell__bd">
              摇一摇
            </div>
          </div>
        </div>
        <div class="weui-cells">
          <div class="weui-cell weui-cell_access">
            <div class="weui-cell__hd">
              <img src="../../assets/images/find_icon-locationservice.png">
            </div>
            <div class="weui-cell__bd">
              附近的人
            </div>
          </div>
          <div class="weui-cell weui-cell_access">
            <div class="weui-cell__hd">
              <img src="../../assets/images/find_icon-bottle.png">
            </div>
            <div class="weui-cell__bd">
              漂流瓶
            </div>
          </div>
        </div>

        <div class="weui-cells">
          <a href="http://wq.jd.com" class="weui-cell weui-cell_access">
            <div class="weui-cell__hd">
              <img src="../../assets/images/find_icon-shopping.png">
            </div>
            <div class="weui-cell__bd">
              购物
            </div>
          </a>
          <div class="weui-cell weui-cell_access">
            <div class="weui-cell__hd">
              <img src="../../assets/images/find_icon-moregame.png">
            </div>
            <div class="weui-cell__bd">
              游戏
            </div>
          </div>
        </div>

        <div class="weui-cells">
          <router-link to="/routine" class="weui-cell weui-cell_access" tag="div" v-on:click.native="momentNewMsg=false">
            <div class="weui-cell__hd">
              <img src="../../assets/images/xiaochengxu.png" >
            </div>
            <div class="weui-cell__bd" style="line-height: 28px;">
              小程序
            </div>
          </router-link>
        </div>
      </section>
    </div>
    <footer class="app-footer">
      <wx-nav></wx-nav>
    </footer>
  </div>
</template>
<script>
    import WxHeader from '../common/wx-header';
    import WxNav from '../common/wx-nav.vue';
    export default {
        mixins: [window.mixin],
        data() {
            return {
                pageName: "发现",
                momentNewMsg: true
            }
        },
        activated() {
            this.$store.commit("toggleTipsStatus", -1)
        },
        components: {
          WxHeader,
          WxNav
        }
    }
</script>
<style>
    @import "../../assets/css/explore.css";
    @import "../../assets/css/base.css";
    @import "../../assets/css/common.css";
    @import "../../assets/css/wx-header.css";
</style>
