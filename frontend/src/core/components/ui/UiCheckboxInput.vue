<template>
    <div>
      <label>{{ props.label }}</label>
      <input 
        type="checkbox" 
        :value="props.value"
        :checked="props.modelValue"
        @change="handleChange" 
      />
    </div>
  </template>

<script setup lang="ts">

interface Props {
    modelValue: boolean,
    value: string | boolean,
    label: string,
}

const props = defineProps<Props>();
const emit = defineEmits(['update:modelValue']);
const handleChange = () => {
  emit('update:modelValue', !props.modelValue);
};
</script>

<style scoped>

</style>