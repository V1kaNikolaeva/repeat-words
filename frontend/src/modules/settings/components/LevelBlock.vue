<template>
    <p>Уровень</p>
    <UiRadioInput v-for="(input, index) in localLevels" 
        :key="index" 
        v-model="level" 
        :value="input.level" 
        :label="input.text" 
    />
</template>

<script setup lang="ts">
import { readyMadeLists } from '@/core/options/hsk';
import { usePositionStore } from '@/store/position';
import { useSettingsStore } from '@/store/settings';
import { useWordsStore } from '@/store/words';
import type { Radio } from '@/types/types';
import type { Word } from '@/types/interfaces';
import { ref, watch, type Ref } from 'vue';
import UiRadioInput from '@/core/components/ui/UiRadioInput.vue';



const settingsStore = useSettingsStore()
const wordsStore = useWordsStore()
const positionStore = usePositionStore()
const localLevels: Ref<Radio[]> = ref([...readyMadeLists])

const level: Ref<number> = ref(settingsStore._level)


// HUITA
watch(level, () => {
    console.log('level changed')
    // устанавливаем новый выбранный уровень
    settingsStore.setLevel(level.value)

    // В зависимости от нового уровня устанавливаем новые данные
    // Уровень учтен в wordStore
    wordsStore.setNewData()

    // Меняем позицию чтобы не выйти за пределы
    // Если новая позиция больше предыдущей

    // undefind выйдет в том случае если при третьем уровне позиция 344,
    // а на первом их всего 150 -> значит старое значение не найдется
    const oldItem: Word | undefined = wordsStore.oldData[positionStore.position] 
    console.log(wordsStore.data.findIndex(item => item.word === oldItem.word))

    if (wordsStore.data.length > wordsStore.oldData.length && positionStore.position <= wordsStore.oldData.length) {

        console.log('Position in highter level')

        const newPosition = wordsStore.data.findIndex(item => item.word === oldItem.word)
        console.log(newPosition)
        positionStore.setPosition(newPosition)
        wordsStore.oldData = wordsStore.data
    } else {
        if (oldItem) {
            const newPosition = wordsStore.data.findIndex(item => item.word === oldItem.word) 
            console.log(newPosition)
            
            if (newPosition === -1) {
                positionStore.last()
                wordsStore.oldData = wordsStore.data
            } else {
                // Позиция найдена значит вставляем ее
                positionStore.setPosition(newPosition)
                // Ставим старые данные для следущей смены уровня
                wordsStore.oldData = wordsStore.data
            }
        } 
    }
})

</script>

<style scoped>

</style>