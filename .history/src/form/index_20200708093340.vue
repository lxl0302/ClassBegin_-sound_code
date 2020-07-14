<template>
  <div class="zong">
    <k-form>
      <k-form-item>
        <k-input></k-input>
      </k-form-item>
      <k-form-item>
        <k-input></k-input>
      </k-form-item>
      <k-form-item>
        <button>提交</button>
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
    return {}
  },
  computed: {},
  mounted() {},
  methods: {}
}
</script>
<style scoped>
.zong{
  height: 100%;
  width: 100%;
  text-align: center;
}
</style>