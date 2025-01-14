<template>
    <div class="container">
    <div class="toggle-container">
      <div
        :class="{ 'hide-button': hideBackButton }"
      >
        <UiButton :bType="bTypes.to" @click="back">
          <template #left-icon>
            <IconArrowLeft/>
          </template>
        </UiButton>
      </div>
      <div class="pages">
        <p><UiButton @click="first">
          <template #text>
            1...
          </template>
        </UiButton></p>


        
        <UiButton :bType="bTypes.inputToText" @click="changeInputNewPosition">
          <template #input>
            <UiInput v-if="inputNewPosition" ref="posInput" v-on-click-outside="close" :inputType="'pos'" type="number" v-model:modelValue="newPosition" name="" id="" />
            <p class="pPos" v-else-if="!inputNewPosition">{{ positionStore.position + 1 }}</p>
          </template>

          <template #line>
            <p>/</p>
          </template>

          <template #text>

            <p class="pPos">{{ wordsStore.data.length }}</p>
          </template>
        </UiButton>
        
        
        <p><UiButton @click="last" :text="``" type="to">
          <template #text>
            {{ `...${wordsStore.data.length}` }}
          </template>
        </UiButton>
        </p>
      </div>
      <div
        :class="{ 'hide-button': hideForwardButton }"
      >
        <UiButton
          :bType="bTypes.to"
          @click="forward"
        >
        <template #left-icon>
          <IconArrowRight/>
        </template>
      </UiButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconArrowLeft from '@/core/components/icons/IconArrowLeft.vue';
import IconArrowRight from '@/core/components/icons/IconArrowRight.vue';
import UiButton from '@/core/components/ui/UiButton.vue';
import UiInput from '@/core/components/ui/UiInput.vue';
import { usePositionStore } from '@/store/position';
import { useWordsStore } from '@/store/words';
import { bTypes } from '@/types/enums';
import { computed, onBeforeUnmount, onMounted, type Ref, ref, watchEffect } from 'vue';
import { vOnClickOutside } from '@vueuse/components'


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
const data = wordsStore.data

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

const inputNewPosition: Ref<boolean> = ref(false)

const changeInputNewPosition = () => {
  inputNewPosition.value = true
}
const close = () => {
  inputNewPosition.value = false
}

onMounted(() => {
    document.addEventListener('keyup', useEnter, true);
})

onBeforeUnmount(() => {
    document.removeEventListener('keyup', useEnter, true);
})

const useEnter = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    inputNewPosition.value = false

  }
}
const hideBackButton = computed(() => {
  return positionStore.position === 0
})

const hideForwardButton = computed(() => {
  return positionStore.position >= wordsStore.data.length - 1
})

</script>

<style scoped>
.toggle-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.container {
  background-color: var(--main-blocks-color);
  border-radius: 20px;
}
.pages {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 300px;
}
.pPos {
  width: 60px;
}
.hide-button {
  visibility: hidden;
}
</style>