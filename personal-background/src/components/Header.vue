<template>
  <el-row>
    <el-col :span="24">
      <div class="line"></div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo main-nav"
        mode="horizontal"
        @select="handleSelect"
        background-color="#99a9bf"
        text-color="#fff"
        active-text-color="#000000">
        <el-menu-item index="1">首页</el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: ''
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        let href = ["/console"];
        window.location.href = href[key-1];
        console.log(key, keyPath, this);
      }
    }
  }
</script>

<style>
  .main-nav {
    padding-left: 70px;
  }

  a {
    text-decoration: none;
    font-size: 16px;
  }
</style>
