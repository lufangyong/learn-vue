<template>
  <error-code :code="404" msg="抱歉! 找不到该页面"/>
</template>

<script>
  import ErrorCode from '@/components/ErrorCode.vue'

  export default {
    name: "notFound",
    components: {ErrorCode},
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>

</style>
