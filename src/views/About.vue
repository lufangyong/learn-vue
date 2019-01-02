<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{userInfo.name}}</div>
    <el-button @click="modifyUserName">修改用户名</el-button>
  </div>
</template>

<script>
  import { mapMutations, mapGetters} from 'vuex';

  export default {
    computed: {
      // ...mapState(['userInfo'])
      ...mapGetters(['userInfo'])
    },
    methods: {
      modifyUserName() {
        this.updateInfo({
          name: 'ho ho ho'
        })

        // this.setUserInfo({
        //   name: 'ho ho ho'
        // })
      },
      ...mapMutations({
        setUserInfo: 'SET_USER_INFO',
        updateInfo: 'UPDATE_USER_INFO'
      })
    }
  }
</script>
