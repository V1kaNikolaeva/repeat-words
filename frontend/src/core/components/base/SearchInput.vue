<template>
    <div class="wrapper-input" v-on-click-outside="close">
        <input 
            class="search-input" 
            :class="{ 'borderRadiusBottom' : inputType === 'borders' }" 
            v-bind="$attrs" 
            @focus="show = true" 
            @input="onInput"
        >
        <!-- Результат поиска -->
         <div class="top-in">
             <div v-if="props.modelValue && show" class="results-wrapper">
                 <slot name="search"/>
             </div>
             <slot name="advice"/>
         </div>
    </div>
</template>

<script setup lang="ts">
import { ref, shallowRef, type Ref } from 'vue';
import { vOnClickOutside } from '@vueuse/components'


interface Props {
    inputType: string,
    modelValue: string | number | undefined,
}

const props = defineProps<Props>()

const emit = defineEmits(['update:modelValue']);

const modelValue = ref(props.modelValue);

const show: Ref<boolean> = shallowRef(false)
const close = () => {
    show.value = false
}     
const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  modelValue.value = target.value;
  show.value = true
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
    border-radius: 20px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    overflow-y: auto;
    scrollbar-color: var(--scrollbar-color);
    scrollbar-width: thin;
    grid-template-columns: 50% 50%;
    max-height: 190px;
    background-color: var(--nav-blocks-color);    
    height: 100%;
}

/* .borderRadiusBottom {
    border-color: rgba(26, 24, 47, 0.15);
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
} */

</style>