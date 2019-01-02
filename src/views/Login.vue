<template>
  <div class="container" :style="bgCls">
    <el-button @click="login">登录</el-button>
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
    height: 100vh;
  }
</style>
