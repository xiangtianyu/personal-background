<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-vertical-demo"
    @select="handleSelect">
    <el-menu-item index="1">
      <i class="el-icon-menu"></i>
      <span slot="title">文章列表</span>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">新建文章</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-menu"></i>
      <span slot="title">测试测试</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: 'SideBar',
    data () {
      return {

      }
    },
    props: {
      activeIndex: {
        type: String
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        let href = ["/console", "writeBlog", "/console"];
        window.location.href = href[key-1];
        console.log(key, keyPath, this);
      }
    }
  }
</script>
