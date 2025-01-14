<template>
    <div
      v-if="props.word"
      class="word"
    >
      
        <component 
          :is="(settingsStore._word || showItems.word) && settingsStore._word ? 'button' : 'div'" 
          class="hidden-wrapper"
          :class="{ 'close': settingsStore._word && showItems.word }"
          @click="showItems.word = !showItems.word"
        >
        <p  class="word-item" :class="{ 'hidden': settingsStore._word && showItems.word }">
          {{ props.word?.word }}
        </p>
        </component>

  
  
      <component 
        :is="(settingsStore._pinyin || showItems.pinyin) && settingsStore._pinyin ? 'button' : 'div'" 
        class="hidden-wrapper"
        :class="{ 'close': settingsStore._pinyin && showItems.pinyin }"
        @click="showItems.pinyin = !showItems.pinyin" 
      >
  
        <p  class="prop" :class="{ 'hidden': settingsStore._pinyin && showItems.pinyin }">
          {{ props.word?.pinyin }}
        </p>
      </component>
  
        <component 
          :is="(settingsStore._translate || showItems.translate) && settingsStore._translate ? 'button' : 'div'" 
          class="hidden-wrapper"
          :class="{ 'close': settingsStore._translate && showItems.translate }"
          @click="showItems.translate = !showItems.translate" 
        >
        <p  class="prop" :class="{ 'hidden': settingsStore._translate && showItems.translate }">
          {{ props.word?.translate }}
        </p>
        </component>
  
    </div>
  </template>
  
  <script setup lang="ts">
  import type { Word } from '@/types/interfaces'
  import { useSettingsStore } from '@/store/settings';
  import { ref, type Ref } from 'vue';
  
  interface Props {
    word: Word
  }
  
  const props = defineProps<Props>()
  
  const settingsStore = useSettingsStore()
  const showItems: Ref<{ word: boolean, pinyin: boolean, translate: boolean }> = ref({
    word: true,
    pinyin: true,
    translate: true,
  })
  
  </script>
  
  <style scoped>
  .word {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-rows: repeat(3, 110px);
    /* grid-template-columns: repeat(1, 310px); */
  }

  .word-item {
    font-family: 'FZKai-Z03';
    margin-top: 0;
    font-size: 38px;
  }
  
  td {
    text-align: start;
    width: 20%;
    padding: 10px;
  }
  tr {
    vertical-align: text-top;
  }
  tr:nth-child(even) { background: #e0e0e0; }
  tr:nth-child(odd)  { background: #f3f3f3; }
  p {
    position: relative;
    z-index: 1;
  }
  .hidden-wrapper {
    border-radius: 10px;
    font-size: 20px;
    font-weight: 400;
    max-width: 400px;
    margin: 4px;
    padding: 0;
    text-align: center;
  }
  .hidden-wrapper.close {
    background-color: #f3f3f3;
  }
  .hidden {
    visibility: hidden;
  }
  </style>