<template>
  <div class="example">
    {{ msg }}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'hello vue'
      }
    },
  }
</script>

<style lang="scss" scoped>
  .example {
    text-align: center;
    color: red;
  }
</style>
