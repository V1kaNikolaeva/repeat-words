<template>
    <form  action="">

        <UiInput 
            :inputType="''" 
            type="text" 
            required="required"
            placeholder="Имя" 
            v-model:modelValue="localList.name" 
            name="" 
            id="">
        </UiInput>

        <UiSelect
            :items="selectPriority"
            :showItemFirst="Priorities.default"
            labelText="Приоритет"
        >

        </UiSelect>
        <!-- <UiInput 
            :inputType="''" 
            type="text" 
            placeholder="Слова" 
            v-model:modelValue="localList.words" 
            name="" 
            id="">
        </UiInput> -->
        <UiButton type="submit" @click.prevent="submit" :bType="bTypes.border">Создать</UiButton>
    </form>
</template>

<script setup lang="ts">
import UiButton from '@/core/components/ui/UiButton.vue';
import UiInput from '@/core/components/ui/UiInput.vue';
import UiSelect from '@/core/components/ui/UiSelect.vue';
import { selectPriority } from '@/core/options/choose';
import { bTypes, Priorities } from '@/types/enums';
import type { List } from '@/types/interfaces';
import { ref, type Ref } from 'vue';


const emit = defineEmits(['handler'])

const submit = () => {
    emit('handler', localList.value)
}

const localList: Ref<List> = ref({
    id: Math.random(),
    name: '',
    priority: Priorities.default,
    words: []
})

</script>

<style scoped>

</style>