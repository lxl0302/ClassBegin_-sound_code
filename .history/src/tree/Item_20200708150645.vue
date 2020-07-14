<template>
  <div class="item-class"> 
    <div @click="toggle">
      {{model.title}}
      <span v-if="open">[{{open ? '-' : '+'}}]</span>
    </div>
    <ul v-show="open"  class="ul-class">
      <item class="item-class" v-for="model in model.children" :key="model.title" :model="model" />
    </ul>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    model: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      open: false
    };
  },
  computed: {
    // isFolder() {
    //   return this.model.children && this.model.children.length;
    // }
  },
  methods: {
    toggle() {
      // if (this.isFolder) {
        this.open = !this.open;
      // }
    }
  }
};
</script>
<style scoped>
.item-class {
  list-style: none;
  background-color: rgb(172, 197, 172, 0.2);
}
.ul-class{
  background-color: rgb(255, 255, 0);
}
</style>