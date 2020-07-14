<template>
  <div class="item-class"> 
    <div @click="toggle">
      {{model.title}}
      <span v-if="isFolder">[{{open ? '-' : '+'}}]</span>
    </div>
    <ul v-show="open" v-if="isFolder" class="ul-class">
      <item class="item" v-for="model in model.children" :key="model.title" :model="model" />
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
    isFolder() {
      return this.model.children && this.model.children.length;
    }
  },
  methods: {
    toggle() {
      if (this.isFolder) {
        this.open = !this.open;
      }
    }
  }
};
</script>
<style scoped>
.item-class {
  list-style: none;
  background-color: green;
}
.ul-class{
  background-color: yellow;
}
</style>