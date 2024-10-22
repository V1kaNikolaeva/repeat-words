<template>
    <MainContainer>
        <WordItem type="one" :word="word" />
    </MainContainer>
</template>

<script setup lang="ts">
import MainContainer from '@/core/components/containers/MainContainer.vue';
import { usePositionStore } from '@/store/position';
import { useSettingsStore } from '@/store/settings';
import { useWordsStore } from '@/store/words';
import type { Word } from '@/types/interfaces';
import { ref, watchEffect, type Ref } from 'vue';
import WordItem from '../components/WordItem.vue';


const positionStore = usePositionStore()
const settingsStore = useSettingsStore()

//HSK
const wordsStore = useWordsStore()
const data = wordsStore.data

const word: Ref<Word> = ref(data[positionStore.position])

watchEffect(() => {
  word.value = data[positionStore.position]
  //Добовляем в недавние
  settingsStore.addWord(word.value)
})
</script>

<style scoped>

</style>