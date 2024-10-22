<template>
  <div class="wrapper-head">
    <DropDown :list="settingsStore.lastWords" buttonText="Последние" listKey="word">
      <template #list>
        <UiItemList v-for="(word, index) in settingsStore.lastWords" :key="index" v-model:currentLastWord="currentLastWord" :word="word" @click="changePosition(word)"/>
      </template>
      <template v-if="currentLastWord" #advice>
        <div class="advice">
          <p>
            {{ currentLastWord?.translate }}
          </p>
        </div>
      </template>
    </DropDown>
    <UiButton @click="accident" @keyup.ctrl="accident" type="random" :bType="bTypes.border">Случайное</UiButton>
    <SearchInput
        :inputType="searchResult.length ? 'borders' : ''"
        type="text"
        placeholder="Поиск"
        v-model:modelValue="search"
        name=""
        id=""
      >
        <div v-if="searchResult.length">
          <SearchItem v-for="(word, index) in searchResult" :searchWord="word" :key="index" />
        </div>
    </SearchInput>

      <UiInput :inputType="''" type="number" placeholder="Позиция" v-model:modelValue="newPosition" name="" id="" />

    </div>
</template>

<script setup lang="ts">
import UiButton from '@/core/components/ui/UiButton.vue';
import UiInput from '@/core/components/ui/UiInput.vue';
import { usePositionStore } from '@/store/position';
import { useWordsStore } from '@/store/words';
import { computed, onBeforeUnmount, onMounted, ref, watchEffect, type Ref } from 'vue'
import SearchInput from '../components/SearchInput.vue';
import type { Word } from '@/types/interfaces';
import SearchItem from '../components/SearchItem.vue';
import DropDown from '@/core/components/base/DropDown.vue';
import { useSettingsStore } from '@/store/settings';
import UiItemList from '@/core/components/ui/UiItemList.vue';
import { bTypes } from '@/types/enums';

const wordsStore = useWordsStore()
const positionStore = usePositionStore()
const settingsStore = useSettingsStore()

const changePosition = (word: Word) => {
  // новая позиция слова определяется по поиску индекса 
    const newPosition = wordsStore.data.findIndex(item => word.word === item.word)
    // Если позиции не существует в данном уровне то
    // делаем слово недоступным для поиска
    if (newPosition === -1) {
        return
    }
    positionStore.setPosition(newPosition)
}

// Если наводим на последнее слово
const currentLastWord: Ref<Word | null> = ref(null)

// const closeSearch = () => {
//   search.value = ''
// }

//HSK


const data = wordsStore.data

//Поиск
const search: Ref<string> = ref('')
//Позиция
const newPosition: Ref<number | undefined> = ref()

watchEffect(() => {
  if (
    newPosition.value !== undefined &&
    newPosition.value <= data.length &&
    newPosition.value > 0
  ) {
    positionStore.setPosition(newPosition.value - 1)
  }
})

const searchResult = computed(() => {
  const searchList: Word[] = []

  if (search.value !== '') {
    for (let i = 0; i < data.length; i++) {
      if (
        data[i].word.toLowerCase().includes(search.value.toLowerCase()) ||
        data[i].translate.toLowerCase().includes(search.value.toLowerCase())
      ) {
        searchList.push(data[i])
        if (searchList.length >= 100) {
          return searchList
        }
      }
    }
  }
  return searchList
})


onMounted(() => {
    document.addEventListener('keyup', userCtrl, true);
})

onBeforeUnmount(() => {
    document.removeEventListener('keyup', userCtrl, true);
})

const userCtrl = (event: KeyboardEvent) => {
  if (event.key === 'Control') {
    accident()
  }
}

const accident = () => {
  const random = Math.round(0 + Math.random() * (wordsStore.data.length - 0))
  positionStore.setPosition(random)
}
</script>

<style scoped>
.advice {
    background-color: #fff;
    padding: 10px;
    border-radius: 10px;
    height: auto;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>