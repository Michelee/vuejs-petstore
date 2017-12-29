<template>
	<div>
		<strong>{{ title }}: </strong>
		<span v-if="value">{{ value }}</span>
        <span else>{{ id }}</span>
	</div>
</template>

<script>
export default {
  props: {
    title: {
		type: String,
		default: ''
    },
    value: {
		type: String,
		default: ''
    },
    id: {
    	type: Number,
    	default: 0
    }
  }
}
</script>

<style></style>