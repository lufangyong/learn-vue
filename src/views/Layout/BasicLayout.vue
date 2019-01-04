<template>
  <div class="container">
    <el-container>
      <el-aside width="250px">
        <el-scrollbar wrap-class="scrollbar-wrapper">
          <el-menu
            default-active="2"
            class="menu-vertical"
            @open="handleOpen"
            @close="handleClose"
            :router="true">
            <el-menu-item index="/">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>个人中心</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/about">about</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-container class="main-container">
        <el-header class="header">Header</el-header>
        <el-main>
          <keep-alive>
            <router-view/>
          </keep-alive>
        </el-main>
        <el-footer class="footer">Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "BasicLayout",
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    .menu-vertical {
      width: 250px;
      height: 100vh;
      text-align: left;
      box-sizing: border-box;
    }
    .main-container {
      height: 100vh;
    }
    .header {
      line-height: 60px;
      text-align: center;
      background-color: #B3C0D1;
    }
    .footer {
      line-height: 60px;
      text-align: center;
      background-color: #B3C0D1;
    }
  }
</style>
