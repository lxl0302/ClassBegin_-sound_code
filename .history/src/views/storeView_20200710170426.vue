<template>
  <div class="storezong">
    <div class="shichuang">
      {{this.$store.state.masterName}}
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {}
}
</script>
<style scoped>
.storezong {
  position: absolute;
  top: 66px;
  left: 22px;
  
  height: 66px;
  width: 222px;
  background-color: rgba(235, 236, 173, 0.795);
  border-radius: 10px;
  text-align: center;
}
.shichuang {
  width: 60%;
  height: 40%;
  margin: 12px auto;
  background-color: #fff;
}
</style>