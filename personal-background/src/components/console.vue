<template>
  <el-container>
    <el-header><Header></Header></el-header>
    <el-container>
      <el-aside width="200px">
        <SideBar :activeIndex="activeIndex"></SideBar>
      </el-aside>
      <el-main>
        <el-button style="margin-left: 10px; float: left;" type="success" @click="gotoWrite()">写文章
        </el-button>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="title"
            label="标题"
            width="180">
          </el-table-column>
          <el-table-column
            prop="author"
            label="作者"
            width="180">
          </el-table-column>
          <el-table-column
            prop="body"
            label="摘要">
          </el-table-column>
          <el-table-column
            prop="date"
            label="日期"
            width="120">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
              <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
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
        activeIndex: "1",
        postForm: {content: ""},
        tableData: [{
          date: '2016-05-02',
          author: '项天宇',
          title: '崇明是个好地方',
          body: '崇明是个好地方崇明是个好地方崇明是个好地方崇明是个好地方崇明是个好地方崇明是个好地方'
        }, {
          date: '2016-05-02',
          author: '项天宇',
          title: '崇明是个好地方',
          body: '崇明是个好地方崇明是个好地方崇明是个好地方崇明是个好地方崇明是个好地方崇明是个好地方'
        }, {
          date: '2016-05-02',
          author: '项天宇',
          title: '崇明是个好地方',
          body: '崇明是个好地方崇明是个好地方崇明是个好地方崇明是个好地方崇明是个好地方崇明是个好地方'
        }, {
          date: '2016-05-02',
          author: '项天宇',
          title: '崇明是个好地方',
          body: '崇明是个好地方崇明是个好地方崇明是个好地方崇明是个好地方崇明是个好地方崇明是个好地方'
        }]
      }
    },
    methods: {
      gotoWrite() {
        this.$router.push({ path: '/writeBlog', replace: true})
      }
    }
  }
</script>

<style>
  .el-header {
    padding: 0
  }

  tbody {
    text-align: left;
  }
</style>
