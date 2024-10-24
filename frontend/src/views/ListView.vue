<template>
    <MainContainer>
        <UiButton @click="isModalActive = true" :bType="bTypes.border">
            <template #text>
                Создать список
            </template> 
        </UiButton>
        <TheList v-if="localLists.length" />
        <UiModalWindowForm v-model:isModalActive="isModalActive">
            <ListForm></ListForm>
        </UiModalWindowForm>
    </MainContainer>
</template>

<script setup lang="ts">
import MainContainer from '@/core/components/containers/MainContainer.vue';
import UiButton from '@/core/components/ui/UiButton.vue';
import UiModalWindowForm from '@/core/components/ui/UiModalWindowForm.vue';
import ListForm from '@/modules/list/components/ListForm.vue';
import TheList from '@/modules/list/components/TheList.vue';
import { bTypes } from '@/types/enums';
import type { List } from '@/types/interfaces';
import { ref, type Ref } from 'vue';


const isModalActive: Ref<boolean> = ref(false)

const localLists: Ref<List[]> = ref([])

// const submit = (list: List) => {
//     localLists.value.push(list)
// }

</script>

<style scoped>

</style>
