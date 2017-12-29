<template>
	<div>
    <strong>{{ title }}:</strong> 
    <template v-for="(item, index) in items">
        <span v-if="index==0">{{ item.name }}</span>
        <span v-else>, {{ item.name }}</span>
    </template>
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