<template>
    <div class="container">
    <div class="toggle-container">
      <div>
        <UiButton :bType="bTypes.to" @click="back" :disabled="positionStore.position === 0">
          назад
        </UiButton>
      </div>
      <div class="pages">
        <p><UiButton @click="first">1...</UiButton></p>
        <p>{{ positionStore.position + 1 }}/{{ wordsStore.data.length }}</p>
        <p><UiButton @click="last" :text="``" type="to">{{ `...${wordsStore.data.length}` }}</UiButton></p>
      </div>
      <div>
        <UiButton
          :bType="bTypes.to"
          @click="forward"
          :disabled="positionStore.position >= wordsStore.data.length - 1"
        >вперед</UiButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UiButton from '@/core/components/ui/UiButton.vue';
import { usePositionStore } from '@/store/position';
import { useWordsStore } from '@/store/words';
import { bTypes } from '@/types/enums';


const positionStore = usePositionStore()
//HSK
const wordsStore = useWordsStore()

const back = () => {
  positionStore.dicrement()
}
const forward = () => {
  positionStore.increment()
}

const first = () => {
  positionStore.first()
}
const last = () => {
  positionStore.last()
}
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
</style>