<template>
  <div class="container">
    <div class="error-wrapper">
      <div class="clip">
        <div class="shadow">
          <countTo class="digit" :startVal="6" :endVal="parseInt(code/100)" :duration='800'></countTo>
        </div>
      </div>
      <div class="clip">
        <div class="shadow">
          <countTo class="digit" :startVal="9" :endVal="parseInt((code%100)/10)" :duration='1600'></countTo>
        </div>
      </div>
      <div class="clip">
        <div class="shadow">
          <countTo class="digit" :startVal="9" :endVal="parseInt(code%10)" :duration='2000'></countTo>
        </div>
      </div>
      <div class="msg">
        OH!
        <span class="triangle"></span>
      </div>
    </div>
    <h2 class="h1">{{msg}}</h2>
    <router-link to="/">
      <el-button type="primary">回到首页</el-button>
    </router-link>
  </div>
</template>

<script>
  import countTo from 'vue-count-to'

  export default {
    name: "ErrorCode",
    components: {countTo},
    props: {
      code: {
        type: Number,
        required: true
      },
      msg: {
        type: String,
        required: true
      }
    },
  }
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    .clip {
      display: inline-block;
      transform: skew(-45deg);
      .shadow {
        height: 180px;
        overflow: hidden;
      }
      .digit {
        position: relative;
        display: inline-block;
        top: 8%;
        width: 150px;
        height: 150px;
        line-height: 150px;
        font-size: 120px;
        font-weight: bold;
        color: white;
        background: #07B3F9;
        border-radius: 50%;
        transform: skew(45deg);
      }
      &:nth-of-type(1) .shadow::after, &:nth-of-type(2) .shadow::after {
        position: absolute;
        content: "";
        right: -4px;
        bottom: 0;
        z-index: 9999;
        height: 100%;
        width: 10px;
        background: linear-gradient(90deg, transparent, rgba(173, 173, 173, 0.8), transparent);
        border-radius: 50%;
      }
      &:nth-of-type(1) {
        width: 250px;
        .digit {
          right: -20%
        }
      }
      &:nth-of-type(2) {
        .shadow {
          width: 130px;
          overflow: hidden;
          box-shadow: inset 20px 0px 20px -15px rgba(150, 150, 150, 0.8), 20px 0px 20px -15px rgba(150, 150, 150, 0.8);
        }
        .digit {
          left: -10%;
        }
      }
      &:nth-of-type(3) {
        width: 250px;
        .digit {
          left: -20%;
        }
      }
    }
    .msg {
      position: relative;
      display: block;
      top: -190px;
      left: 0;
      width: 80px;
      height: 80px;
      line-height: 80px;
      background: #535353;
      color: #A2A2A2;
      border-radius: 50%;
      font-style: italic;
      font-size: 32px;
      z-index: 9999;
      .triangle {
        position: absolute;
        content: "";
        width: 0;
        height: 0;
        top: 70%;
        right: 0;
        border-left: 20px solid #535353;
        border-top: 15px solid transparent;
        border-bottom: 15px solid transparent;
        transform: rotate(45deg);
        z-index: 999;
      }
    }
    .h1 {
      padding-bottom: 20px;
      color: #A2A2A2;
      font-weight: bold;
    }
  }
</style>
