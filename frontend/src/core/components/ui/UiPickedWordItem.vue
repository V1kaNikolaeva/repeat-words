<template>
    <div class="picked-word-wrapper">
        <p class="picked-word">
            {{ props.pickedWord.word }}
        </p>
        <UiButton @click="cancel(props.pickedWord)" :bType="bTypes.exit">
            <template #right-icon>
                <IconDelete/>
            </template>
        </UiButton>
    </div>
</template>

<script setup lang="ts">
import type { Word } from '@/types/interfaces';
import UiButton from './UiButton.vue';
import { bTypes } from '@/types/enums';
import IconDelete from '../icons/IconDelete.vue';


const props = defineProps<{ pickedWord: Word }>()
const emit = defineEmits(['handler'])

const cancel = (word: Word) => {
    emit('handler', word)
}

</script>

<style scoped>
.picked-word-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 10px;
    border-radius: 10px;
    background-color: var(--light-blue);
}

</style>