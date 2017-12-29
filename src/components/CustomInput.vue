<template>
	<div>
      <label :for="id">{{ label }}</label>
      <input :type="type" :id="id" :value="value" @input="setValue($event.target.value)">
    </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      default: 'Form Input'
    },
    id: {
      type: String,
      default: 'form_input'
    },
    value: {
    	type: String,
    	default: ''
    }
  },
  methods: {
  	setValue(val){
  		this.$emit('input', val);
  	}
  }
}
</script>

<style></style>
