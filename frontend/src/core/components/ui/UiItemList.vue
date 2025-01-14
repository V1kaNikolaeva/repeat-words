<template>
        <li
            @mouseover="changeAdvice(props.word)" 
            @mouseleave="changeAdvice(null)" 
            class="item-list"> 
            <UiButton 
                :bType="bTypes.listItem"
            >
                <template #text>
                    {{ props.word.word }}
                </template>
            </UiButton>
        </li>
</template>

<script setup lang="ts">
import type { Word } from '@/types/interfaces';
import UiButton from './UiButton.vue';
import { bTypes } from '@/types/enums';



interface Props {
    word: Word,
    currentWord: Word | null,
}
const props = defineProps<Props>()
const emit = defineEmits(['update:currentWord'])
const changeAdvice = (value: Word | null) => {
    emit('update:currentWord', value)
}
</script>

<style scoped>
.item-list {
    margin: 4px;
}
.item-list:last-child {
    /* margin-bottom: 0; */
}
</style>