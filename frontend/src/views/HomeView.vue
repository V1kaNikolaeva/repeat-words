<template>
  <div class="home-main-el-wrapper">
    <PanelPage />
    <WordPage />
    <SwitcherPage />

  </div>
  <div class="panel-choose-list-wrapper">
    
    <h2>HSK</h2>
    <div class="ready-made-hsk-lists">
      <div v-for="list in readyMadeLists"
        :style="`${list.backgroundRgb} ${list.linearGradient}`"
        :key="list.level" class="ready-made-list">
        <p class="hsk-name-in-lists">{{ list.text }}</p>
        <p class="hsk-level-in-lists">{{ list.level }}</p>
      </div>
    </div>

    <h2>Готовые списки</h2>
    <div class="ready-made-lists">

    </div>

    <h2>Ваши списки</h2>
    <div class="user-made-lists">
      <div v-for="list in readyMadeLists" :key="list.level" class="ready-made-list">
        <p>{{ list.text }}</p>
      </div>
    </div>
  </div>



</template>

<script setup lang="ts">
import SwitcherPage from '@/modules/word/layouts/SwitcherPage.vue'
import WordPage from '@/modules/word/layouts/WordPage.vue'
import PanelPage from '@/modules/homePanel/layouts/PanelPage.vue';
import { useWordsStore } from '@/store/words';
import { readyMadeLists } from '../core/options/hsk'

const wordsStore = useWordsStore()






</script>

<style scoped>
.home-main-el-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 36px);
  border: 1px solid var(--main-blocks-color);
  border-radius: 20px;
  margin-right: 6px;
}

.panel-choose-list-wrapper {
  display: flex;
  flex-direction: column;

  padding-top: 60px;
}

.ready-made-lists,
.user-made-lists,
.ready-made-hsk-lists {
  display: grid;
  justify-content: start;
  grid-template-columns: repeat(auto-fill, minmax(auto, 120px));
  gap: 4px;
  
}

.ready-made-list {
  position: relative;
  z-index: 1;
  width: 100px;
  height: 100px;
  /* background: rgb(45,45,45);
  background: linear-gradient(299deg, rgba(45,45,45,1) 31%, rgba(73,73,73,1) 100%); */
  border-radius: 20px;
  text-align: center;
  vertical-align: middle;
}
.hsk-level-in-lists {
  position: relative;
  z-index: 2;
  translate: 26% -34%;
  /* transform: rotate(6deg); */
  font-size: 60px;
  margin: 0;
}
.hsk-name-in-lists {
  font-size: 20px;
}
</style>
