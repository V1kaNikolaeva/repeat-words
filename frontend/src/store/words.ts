import type { Word } from '@/types/interfaces'
import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { useSettingsStore } from './settings'
import data1 from '../../chinese/hsk1.json'
import data2 from '../../chinese/hsk2.json'
import data3 from '../../chinese/hsk3.json'
import data4 from '../../chinese/hsk4.json'
import data5 from '../../chinese/hsk5.json'
import data6 from '../../chinese/hsk6.json'


export const useWordsStore = defineStore('words', () => {
    const settingsStore = useSettingsStore()
    const hsk1: Word[] = data1
    const hsk2: Word[] = data2
    const hsk3: Word[] = data3
    const hsk4: Word[] = data4
    const hsk5: Word[] = data5
    const hsk6: Word[] = data6

    // bread какй то
    
    const data: Ref<Word[]> = ref(settingsStore._level === 1 ? hsk1 :
        settingsStore._level === 2 ? hsk2 :
        settingsStore._level === 3 ? hsk3 :
        settingsStore._level === 4 ? hsk4 :
        settingsStore._level === 5 ? hsk5 :
        settingsStore._level === 6 ? hsk6 :
        hsk1)

    // Меняется вручную для проверки в SettingsView.vue
    const oldData: Ref<Word[]> = ref([...data.value])

    function setNewData() {
        data.value = settingsStore._level === 1 ? hsk1 :
        settingsStore._level === 2 ? hsk2 :
        settingsStore._level === 3 ? hsk3 :
        settingsStore._level === 4 ? hsk4 :
        settingsStore._level === 5 ? hsk5 :
        settingsStore._level === 6 ? hsk6 :
        hsk1
        
    }

    return { data, oldData, setNewData,hsk1,hsk2,hsk3,hsk4,hsk5,hsk6 }
})