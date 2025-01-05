<template>
    <div class="home-main-el-wrapper">
      <PanelPage/>
      <WordPage/>
      <SwitcherPage/>

    </div>
    <div class="panel-choose-list-wrapper">
      <div class="list1">

      </div>
    </div>
    


</template>

<script setup lang="ts">
import SwitcherPage from '@/modules/word/layouts/SwitcherPage.vue'
import WordPage from '@/modules/word/layouts/WordPage.vue'
import PanelPage from '@/modules/homePanel/layouts/PanelPage.vue';






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
.list1 {
  width: 200px;
  height: 200px;
}


</style>
