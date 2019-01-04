<template>
  <div class="container" :style="bgCls">
    <div class="form" @keyup.enter="press">
      <el-input class="input">
        <template slot="prepend">用户名</template>
      </el-input>
      <el-input class="input">
        <template slot="prepend">密&emsp;码</template>
      </el-input>
      <el-button class="btn" @click="login">登录</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    created() {
    },
    methods: {
      login() {
        localStorage.setItem('accessToken', 'tt')
        this.$router.push({
          path: '/'
        })
      },
      press() {
        this.login()
        console.log('press')
      },
      /**
       * 随机生成范围数
       * @param start 开始
       * @param end 结束
       * @returns {*}
       */
      rangeNumber(start, end) {
        return start + Math.random() * (end - start)
      }
    },
    computed: {
      bgCls() {
        return {
          background: 'linear-gradient(to left bottom, hsl(' + this.rangeNumber(0, 255) + ', 100%, 85%) 0%,hsl(' + this.rangeNumber(0, 255) + ', 100%, 85%) 100%)'
        };
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    .form {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      width: 600px;
      height: 350px;
      background: rgba(0, 0, 0, .1);
    }
    .input {
      width: 400px;
      margin-bottom: 15px;
    }
    .btn {
      width: 400px;
      margin-top: 15px;
    }
  }
</style>
