<template>

    <button @mouseover="show(true)" @mouseleave="show(false)" class="search-result" @click="changePosition">
        <p class="search-word">{{ props.searchWord.word }}</p>
    </button>

</template>

<script setup lang="ts">
import { usePositionStore } from '@/store/position';
import { useWordsStore } from '@/store/words';
import type { Word } from '@/types/interfaces';
import { computed, ref, type Ref } from 'vue';


interface Props {
    searchWord: Word,
    bottom?: string,
}
const props = defineProps<Props>()

const positionStore = usePositionStore()
const wordsStore = useWordsStore()

const newPosition = computed(() => {
// новая позиция слова определяется по поиску индекса 
return wordsStore.data.findIndex(item => props.searchWord.word === item.word) 
})

const changePosition = () => {
// Если позиции не существует в данном уровне то
// делаем слово недоступным для поиска
if (newPosition.value === -1) {
    return
}
positionStore.setPosition(newPosition.value)
}
const showInfo: Ref<boolean> = ref(false)
const cursorBlocked: Ref<string> = ref('')

const show = (value: boolean) => {
// if (newPosition.value === -1) {
//     cursorBlocked.value = 'not-allowed'
// } else {
//     cursorBlocked.value = 'pointer'
// }
showInfo.value = value
}

</script>

<style scoped>
.search-result {
    padding: 5px;
    height: fit-content;
    user-select: none;
    cursor: v-bind(cursorBlocked);
    border-radius: 10px;
    background-color: rgba(26, 24, 47, 0.15);
}
.search-word {
    user-select: none;
    font-size: 18px;
    margin: 0;
    height: 100%;
}
.info {
    position: fixed;
    top: v-bind(bottom);
    width: 160px;
    background-color: #fff;
    padding: 10px;
    border-radius: 10px;
    height: auto;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.info-text {
    user-select: none;

    font-size: 16px;

}
</style>