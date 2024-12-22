<template>
    <div class="wrapper-input">
        <input class="search-input" :class="{ 'borderRadiusBottom' : inputType === 'borders' }" v-bind="$attrs" @input="onInput">
        <!-- Результат поиска -->
         <div class="top-in">
             <div class="results-wrapper">
                 <slot name="search"/>
             </div>
             <slot name="advice"/>
         </div>
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
.search-input {
    max-width: 160px;
    /* width: 100%; */
    margin-bottom: 4px;
}
.top-in {
    position: absolute;
    width: 220px;
    z-index: 5;

}
.wrapper-input {
    width: 220px;
}
.results-wrapper {
    display: grid;
    border-radius: 10px;
    overflow-y: auto;
    grid-template-columns: 50% 50%;
    max-height: 160px;
    background-color: #dadada;    
    height: 100%;
}

.borderRadiusBottom {
    border-color: rgba(26, 24, 47, 0.15);
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
}
.advice {
    background-color: var(--white);
    padding: 10px;
    border-radius: 10px;
    height: auto;
    margin-top: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>