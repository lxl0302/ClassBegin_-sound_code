<template>
  <div class="zong">
    <k-form :model="model" :rules="rules" ref="loginForm">
      <k-form-item label="用户名" prop="username">
        <k-input v-model="model.username" autocomplete="off"></k-input>
      </k-form-item>
      <k-form-item label="密码" prop="password">
        <k-input type="password" v-model="model.password" autocomplete="off"></k-input>
      </k-form-item>
      <k-form-item>
        <button @click="submitForm('loginForm')">提交</button>
      </k-form-item>
    </k-form>
  </div>
</template>

<script>
import KForm from './Form'
import KFormItem from './FromItem'
import KInput from './Input'

import KNotice from '../notice/KNotice'
export default {
  name: 'index',
  components: {
    KForm,
    KFormItem,
    KInput
  },
  data() {
    return {
      model: {username: "baiyan", password: ""},
      rules: {
        username: [{required: true, message: "请输入用户名"}],
        password: [{required: true, message: "请输入密码"}]
      }
    }
  },
  methods: {
    submitForm(form) {
      this.$refs[form].validateForm(valid => {
        const notice = this.$create(KNotice, {
          title: "温馨提示",
          message: valid ? "抓紧给老子登录!" : "校验失败",
          duration: 1000
        });
        notice.show()
      });
    }
  }
}
</script>
<style scoped>
.zong{
  height: 100%;
  width: 100%;
  padding-top: 100px;
  text-align: center;
}
</style>