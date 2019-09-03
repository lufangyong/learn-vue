<template>
  <error-code :code="403" msg="抱歉! 您无权限访问该页面"/>
</template>

<script>
  import ErrorCode from '@/components/ErrorCode.vue'

  export default {
    name: "forbidden",
    components: {ErrorCode},
  }
</script>

<style scoped>

</style>
