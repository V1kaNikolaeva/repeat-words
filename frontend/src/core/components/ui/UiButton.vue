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
            'inputToText': props.bType === 'inputToText',
        }"
    >
    <div :class="{'button-content-container' : $slots['left-icon'], 'inputAndtext': $slots['input'] && $slots['text'] && $slots['line']}">
        <div v-if="$slots['input']">
            <slot name="input"/>

        </div>
        <div v-if="$slots['left-icon']">
            <slot name="left-icon"/>
        </div>
        <div v-if="$slots['line']">
            <slot name="line"/>
        </div>
        <div v-if="$slots['text']">
            <slot name="text"/>
        </div>
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
    font-family: 'FZKai-Z03';
    font-size: var(--medium);
    background-color: var(--white);
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
.button-content-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
}
.inputToText {
    height: auto;
    width: 152px;
}
.inputAndtext {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
</style>
