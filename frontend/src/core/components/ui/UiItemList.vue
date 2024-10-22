<template>
        <li 
            @mouseover="changeAdvice(props.word)" 
            @mouseleave="changeAdvice(null)" 
            class="item-list"> 
            <UiButton 
                :bType="bTypes.listItem"
            >
                {{ props.word.word }}
            </UiButton>
        </li>
</template>

<script setup lang="ts">
import type { Word } from '@/types/interfaces';
import UiButton from './UiButton.vue';
import { bTypes } from '@/types/enums';



interface Props {
    word: Word,
    currentLastWord: Word | null,
}
const props = defineProps<Props>()
const emit = defineEmits(['update:currentLastWord'])
const changeAdvice = (value: Word | null) => {
    emit('update:currentLastWord', value)
}
</script>

<style scoped>
.item-list {
    margin-bottom: 4px;
}
.item-list:last-child {
    margin-bottom: 0;
}
</style>