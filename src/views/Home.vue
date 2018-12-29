<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="svg-wrapper" @click="handlerLike">
      <svg-icon icon-class="like" class-name="icon-like"></svg-icon>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    components: {},
    methods: {
      handlerLike() {
        console.log('like');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .icon-like {
    width: 100px;
    height: 100px;
  }
</style>
