<template>
  <el-container>
    <el-header><Header></Header></el-header>
    <el-container>
      <el-aside width="200px">
        <SideBar></SideBar>
      </el-aside>
      <el-main>
        <div class="editor-container">
          <tinymce :height=400 ref="editor" v-model="postForm.content"></tinymce>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import Tinymce from '@/components/Tinymce'
  import SideBar from '@/components/Sidebar'
  import Header from '@/components/Header'

  export default {
    name: 'console',
    components: { Tinymce, SideBar, Header },
    data() {
      return {
        postForm: {content: ""}
      }
    }
  }
</script>

<style>
  .el-header {
    padding: 0
  }
</style>
