<template>
    <button
        class="default"
        :class="{
            'drop-down': props.bType === 'dropDown',
            'to': props.bType === 'to',
            'list-item': props.bType === 'listItem',
            'border': props.bType === 'border',
        }"
    >
        <slot/>
    </button>
</template>

<script setup lang="ts">
import type { bTypes } from '@/types/enums';


interface Props {
    bType?: bTypes,
}

const props = defineProps<Props>()

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
    background-color: aliceblue;
}
</style>
