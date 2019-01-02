<template>
  <div class="container">
    <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: "BasicLayout"
  }
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
}
</style>
