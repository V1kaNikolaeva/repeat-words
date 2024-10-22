<template>
  <MainContainer>

    
    <PanelPage/>
    <WordPage/>
    <SwitcherPage/>
  </MainContainer>

</template>

<script setup lang="ts">
import SwitcherPage from '@/modules/word/layouts/SwitcherPage.vue'
import MainContainer from '@/core/components/containers/MainContainer.vue'
import WordPage from '@/modules/word/layouts/WordPage.vue'
import PanelPage from '@/modules/homePanel/layouts/PanelPage.vue';






</script>

<style scoped>
.toggle-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}
.container {
  position: fixed;
  bottom: 0;
  left: 20px;
  right: 20px;
}
.pages {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 300px;
}

.wrapper-head {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 50px;
}
</style>
