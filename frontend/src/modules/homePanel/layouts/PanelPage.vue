<template>
  <div class="wrapper-head">
    <DropDown :list="settingsStore.lastWords" buttonText="Последние" listKey="word">
      <template #list>
        <UiItemList v-for="(word, index) in settingsStore.lastWords" :key="index" v-model:currentWord="currentLastWord" :word="word" @click="changePosition(word)"/>
      </template>
      <template v-if="currentLastWord" #advice>
        <div class="advice">
          <p>
            {{ currentLastWord?.translate }}
          </p>
        </div>
      </template>
    </DropDown>
    <UiButton @click="accident" @keyup.ctrl="accident" type="random">
      <template #left-icon>
        <IconStar/>
      </template>
      <template #text>
        Случайное
      </template>
    </UiButton>
    <SearchInput
        :inputType="searchResult.length ? 'borders' : ''"
        type="text"
        placeholder="Поиск"
        v-model:modelValue="search"
        name=""
        id=""
      >
      <template v-if="searchResult.length" #search>
          <UiItemList v-for="(word, index) in searchResult" v-model:currentWord="currentSearchWord" :word="word" :key="index" @click="changePosition(word)"/>
      </template>
      <template v-if="currentSearchWord && searchResult.length" #advice>
        <div class="advice">
          <p>
            {{ currentSearchWord?.translate }}
          </p>
        </div>
      </template>
        
    </SearchInput>

      <!-- <UiInput :inputType="''" type="number" placeholder="Позиция" v-model:modelValue="newPosition" name="" id="" /> -->

    </div>
</template>

<script setup lang="ts">
import UiButton from '@/core/components/ui/UiButton.vue';
import { usePositionStore } from '@/store/position';
import { useWordsStore } from '@/store/words';
import { computed, onBeforeUnmount, onMounted, ref, type Ref } from 'vue'
import SearchInput from '../../../core/components/base/SearchInput.vue';
import type { Word } from '@/types/interfaces';
import DropDown from '@/core/components/base/DropDown.vue';
import { useSettingsStore } from '@/store/settings';
import UiItemList from '@/core/components/ui/UiItemList.vue';
import IconStar from '../../../core/components/icons/IconStar.vue';


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
const currentLastWord: Ref<Word | null> = ref(null);
// Если наводим на слово которое выдал поиск
const currentSearchWord: Ref<Word | null> = ref(null); 
// const closeSearch = () => {
//   search.value = ''
// }

//HSK


const data = wordsStore.data

//Поиск
const search: Ref<string> = ref('')


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
    document.addEventListener('keyup', useShift, true);
})

onBeforeUnmount(() => {
    document.removeEventListener('keyup', useShift, true);
})

const useShift = (event: KeyboardEvent) => {
  if (event.key === 'Shift') {
    accident()
  }
}

const accident = () => {
  const random = Math.round(0 + Math.random() * (wordsStore.data.length - 1))
  positionStore.setPosition(random)
}
</script>

<style scoped>

.wrapper-head {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 40px;
  background-color: var(--bg-second);
  padding: 20px;
  border-radius: 20px;
}
.advice {
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
  height: auto;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

</style>