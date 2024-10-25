<template>
    <button
        class="default"
        :class="{
            'drop-down': props.bType === 'dropDown',
            'to': props.bType === 'to',
            'list-item': props.bType === 'listItem',
            'border': props.bType === 'border',
            'exit': props.bType === 'exit',
            'select': props.bType === 'select',
            'withColor': props.bType === 'withColor',
        }"
    >
    <div v-if="$slots['text']">
        <slot name="text"/>
    </div>
    <div v-if="$slots['right-icon']">
        <slot name="right-icon"/>
    </div>
    </button>
</template>

<script setup lang="ts">
import type { bTypes } from '@/types/enums';
import { computed } from 'vue';


interface Props {
    bType?: bTypes,
    borderRadiusPosition?: boolean,
    bgColor?: string,
}

const props = defineProps<Props>()
const borderPosition = computed(() => {
    return props.borderRadiusPosition ? '10px 10px 0px 0px' : '10px 10px 10px 10px'
})
const bgC = computed(() => {
    return props.bgColor ? props.bgColor : `--white`
})
</script>

<style scoped>

.to {
    background-color: var(--light-green);
}
.default {
    max-width: 220px;
}
.drop-down {
    border: 1px solid black;
    max-width: 220px;
    min-width: 160px;
}
.border {
    border: 1px solid black;
}
.list-item {
    background-color: var(--light-blue);
}
.exit {
    width: auto;
    background-color: transparent;
}
.select {
  width: 130px;
  border: 1px solid black;
  border-radius: v-bind(borderPosition);
}
.withColor {
    background-color: v-bind(bgC);
}
</style>
