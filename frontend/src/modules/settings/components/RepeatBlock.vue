<template>
                    <p>Какая часть будет закрыта для повторения</p>
                <CheckboxInput v-for="(input, index) in localHiddenParts" 
                    :key="index" 
                    v-model="input.checked" 
                    :value="input.checked" 
                    :label="input.text"  
                />
</template>

<script setup lang="ts">
import { hiddenParts } from '@/core/options/choose';
import CheckboxInput from '@/core/components/ui/UiCheckboxInput.vue';
import { useSettingsStore } from '@/store/settings';
import type { Checkbox } from '@/types/types';
import { ref, watch, watchEffect, type Ref } from 'vue';



const localHiddenParts: Ref<Checkbox[]> = ref([...hiddenParts])

const settingsStore = useSettingsStore()

watchEffect(() => {
    localHiddenParts.value[0].checked = settingsStore._word
    localHiddenParts.value[1].checked = settingsStore._pinyin
    localHiddenParts.value[2].checked = settingsStore._translate
})

watch(localHiddenParts, () => {
    // 0 - word
    // 1 - pinyin
    // 2 - translate
    settingsStore.setParts(localHiddenParts.value[0].checked, localHiddenParts.value[1].checked, localHiddenParts.value[2].checked)
}, { deep: true })
</script>

<style scoped>

</style>