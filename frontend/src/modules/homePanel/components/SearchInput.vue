<template>
    <div class="wrapper-input">
        <input class="search-input" :class="{ 'borderRadiusBottom' : inputType === 'borders' }" v-bind="$attrs" @input="onInput">
        <!-- Результат поиска -->
         <slot/>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


interface Props {
    inputType: string,
    modelValue: string | number | undefined,
}

const props = defineProps<Props>()

const emit = defineEmits(['update:modelValue']);

const modelValue = ref(props.modelValue);
const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  modelValue.value = target.value;
  emit('update:modelValue', target.value);
};
</script>

<style scoped>
.borderRadiusBottom {
    border-color: rgba(26, 24, 47, 0.15);
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
}
</style>