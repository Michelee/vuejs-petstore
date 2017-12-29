<template>
	<div>
    <strong>{{ title }}:</strong> 
    <span v-for="item in items">{{ item }}</span>
  </br> 
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style></style>