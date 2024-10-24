<template>
    <!-- <form  action=""> -->
        <InputInFormContainer>
            <UiInput 
            :inputType="''" 
            type="text" 
            required="required"
            placeholder="Название списка" 
            v-model:modelValue="localList.name" 
            name="" 
            id="">
        </UiInput>
    </InputInFormContainer>
    

    <div class="words-list">
        <InputInFormContainer>
            <SearchInput
                :inputType="searchResult.length ? 'borders' : ''"
                type="text"
                placeholder="Выбрать слова"
                v-model:modelValue="search"
                name=""
                id=""
            >
            <template v-if="searchResult.length" #search>
                <UiItemList v-for="(word, index) in searchResult" v-model:currentWord="currentSearchWord" :word="word" :key="index" @click="addWord(word)"/>
            </template>
            <template v-if="currentSearchWord && searchResult.length" #advice>
                <div class="advice">
                    <p>
                        {{ currentSearchWord?.translate }}
                    </p>
                </div>
            </template>
            
            </SearchInput>
        </InputInFormContainer>
        <div class="picked-words">
            <UiPickedWordItem @handler="cancel" v-for="(word, index) in localList.words" :key="index" :pickedWord="word"/>
        </div>
    </div>
    <InputInFormContainer>
        <UiSelect
            :items="selectPriority"
            :showItemFirst="Priorities.default"
            labelText="Приоритет"
        >
        
        </UiSelect>
    </InputInFormContainer>
    
        <!-- <UiButton type="submit" @handler="submit" :bType="bTypes.border">
            Создать
        </UiButton> -->
    <!-- </form> -->
</template>

<script setup lang="ts">
import SearchInput from '@/core/components/base/SearchInput.vue';
import InputInFormContainer from '@/core/components/containers/InputInFormContainer.vue';
import UiInput from '@/core/components/ui/UiInput.vue';
import UiItemList from '@/core/components/ui/UiItemList.vue';
import UiPickedWordItem from '@/core/components/ui/UiPickedWordItem.vue';
import UiSelect from '@/core/components/ui/UiSelect.vue';
import { selectPriority } from '@/core/options/choose';
import { useWordsStore } from '@/store/words';
import { Priorities } from '@/types/enums';
import type { List, Word } from '@/types/interfaces';
import { computed, ref, type Ref } from 'vue';

const localList: Ref<List> = ref({
    id: Math.random(),
    name: '',
    priority: Priorities.default,
    words: []
})

const wordsStore = useWordsStore()
const data = wordsStore.data

// const emit = defineEmits(['handler'])

// const submit = () => {
//     emit('handler', localList.value)
// }
const currentSearchWord: Ref<Word | null> = ref(null); 
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

const addWord = (word: Word) => {
    localList.value.words?.push(word)
}

const cancel = (word: Word) => {
    console.log(word)
}

</script>

<style scoped>
.words-list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.advice {
    background-color: var(--white);
    padding: 10px;
    border-radius: 10px;
    height: auto;
    margin-top: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.picked-words {
    display: grid;
    padding: 4px;
    grid-template-columns: auto auto auto auto;
    gap: 4px;
    max-height: 140px;
    overflow-y: auto;
}

</style>