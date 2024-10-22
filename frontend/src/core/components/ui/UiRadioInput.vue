<template>
    <div>
      <label>{{ props.label }}</label>
      <input 
        type="radio" 
        :value="props.value"
        :checked="isChecked" 
        @change="handleChange" 
        name="radio"
      />
    </div>
  </template>

<script setup lang="ts">
import type { Theme } from '@/types/enums';
import { computed } from 'vue';

interface Props {
    modelValue: number | Theme,
    value: number | string | Theme,
    label: string,
}
const isChecked = computed(() => props.modelValue === props.value);
const props = defineProps<Props>();
const emit = defineEmits(['update:modelValue']);
const handleChange = () => {
  emit('update:modelValue', props.value);
};
</script>

<style scoped>

</style>