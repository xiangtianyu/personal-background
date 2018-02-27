<template>
  <el-container>
    <el-header><Header></Header></el-header>
    <el-container>
      <el-aside width="200px">
        <SideBar :activeIndex="activeIndex"></SideBar>
      </el-aside>
      <el-main>
        <el-button :loading="false" style="margin-left: 10px; float: right;" type="success" @click="submitForm()">发布
        </el-button>
        <div class="createPost-main-container">
          <el-form class="form-container" :model="postForm" :rules="rules" ref="postForm">
            <el-row>
              <el-col :span="21">
                <el-tooltip class="item" effect="dark" content="标题" placement="top">
                  <el-form-item label-width="50px" label="标题:" class="postInfo-container-item">
                    <el-input style='min-width:150px;' v-model="postForm.title">
                    </el-input>
                  </el-form-item>
                </el-tooltip>

                <div class="postInfo-container">
                  <el-row>
                    <el-col :span="8">
                      <el-tooltip class="item" effect="dark" content="作者姓名" placement="top">
                        <el-form-item label-width="50px" label="作者:" class="postInfo-container-item">
                          <el-input style='min-width:150px;' v-model="postForm.author">
                          </el-input>
                        </el-form-item>
                      </el-tooltip>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
            </el-row>

            <el-form-item style="margin-bottom: 40px;" label-width="45px" label="摘要:">
              <el-input type="textarea" class="article-textarea" :rows="1" autosize placeholder="请输入内容" v-model="postForm.body">
              </el-input>
            </el-form-item>

            <div class="editor-container">
              <tinymce :height=400 ref="editor" v-model="postForm.content"></tinymce>
            </div>

            <div class="x-tag">

            </div>
          </el-form>
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
      const validateRequire = (rule, value, callback) => {
        if (value === '') {
          this.$message({
            message: rule.field + '为必传项',
            type: 'error'
          })
          callback(null)
        } else {
          callback()
        }
      }
      return {
        activeIndex: "2",
        postForm: {content: "", body: "", title: "", author: ""},
        rules: {
          title: [{ validator: validateRequire }],
          body: [{ validator: validateRequire }],
          author: [{ validator: validateRequire }]
        }
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
