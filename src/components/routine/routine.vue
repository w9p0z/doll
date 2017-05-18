<template>
  <div class="wx_routine">
    <div class="routine_bar">
      <div class="iconfont icon-return-arrow" v-on:click="goBack"></div>
      <span>小程序</span>
    </div>
    <ul class="routine_list">
      <li v-for="item in $store.state.routineList">
        <router-link :to="item.url" tag="div" class="routine_list_info">
          <div class="routine_header_box">
            <div class="routine_header">
              <img :src="item.img">
            </div>
          </div>
          <div class="routine_desc_box">
            {{item.name}}
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    methods: {
      goBack() {
        this.$router.go(-1);
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .routine_bar{
    text-align: center;
    line-height: 50px;
    background: #e4e4e4;
  }
  .routine_bar .icon-return-arrow{
    position:absolute;
    left:10px;
  }
  .routine_list{
    position: relative;
    overflow-x: hidden;
    margin:10px auto;
    z-index: 1;
  }
  .routine_list li{
    position: relative;
    overflow: hidden;
  }
  .routine_list_info{
    position: relative;
    z-index: 2;
    left: 0;
    width: 100%;
    height: 80px;
    line-height: 80px;
    padding: 8px;
    background-color: #fff;
  }
  .routine_header img{
    width:70px;
  }
  .routine_header_box{
    position: relative;
    float: left;
  }
  .routine_header_box .routine_header{
    height: 100%;
    border-radius: 50%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    display: -webkit-flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    overflow: hidden;
    background: #dddbdb;
  }
  .routine_desc_box{
    position: absolute;
    left: 85px;
    right: 0;
    line-height: 70px;
    font-size: 15px;
    border-bottom: 1px solid #F7F7F7;
  }
</style>
