<template>
  <div class="zong">
    <k-form :model="model" :rules="rules" ref="loginForm">
      <k-form-item label="用户名" prop="username">
        <k-input></k-input>
      </k-form-item>
      <k-form-item label="密码" prop="password">
        <k-input></k-input>
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
    submitForm() {}
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