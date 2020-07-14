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
export default {
  name: '',
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
      this.$refs[form].validate(valid => {
        if(valid) {
          alert('登陆成功')
        } else {
          alert('登陆失败')
        }
      });
    }
  }
}
</script>
<style scoped>
.zong{
  height: 100%;
  width: 100%;
  text-align: center;
}
</style>