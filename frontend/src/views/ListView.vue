<template>
    <MainContainer>
        <UiButton @click="isModalActive = true" :bType="bTypes.to">
            <template #text>
                Создать список
            </template> 
        </UiButton>
        <TheList v-if="localLists.length" :lists="localLists" />
        <UiModalWindowForm v-model:isModalActive="isModalActive">
            <ListForm @handler="submit"></ListForm>
        </UiModalWindowForm>
    </MainContainer>
</template>

<script setup lang="ts">
import MainContainer from '@/core/components/containers/MainContainer.vue';
import UiButton from '@/core/components/ui/UiButton.vue';
import UiModalWindowForm from '@/core/components/ui/UiModalWindowForm.vue';
import ListForm from '@/modules/list/components/ListForm.vue';
import TheList from '@/modules/list/components/TheList.vue';
import { bTypes, Priorities } from '@/types/enums';
import type { List } from '@/types/interfaces';
import { ref, type Ref } from 'vue';


const isModalActive: Ref<boolean> = ref(false)

const localLists: Ref<List[]> = ref([
    {
        id:1,
        name:"привет",
        priority:Priorities.default,
        words:[
            {id:1,word:"爱",pinyin:"ài",translate:"любить; любовь; любимый",example:"爱祖国 [ài zǔguó] — любить родину; 母爱 [mǔ’ài] — материнская любовь"},
            {id:4,word:"杯子",pinyin:"bēizi",translate:"стакан; кружка; бокал; рюмка",example:""}
        ]
    },
    {
        id:2,
        name:"Длинное имя",
        priority:Priorities.default,
        words:[

        ]
    },
    {
        id:3,
        name:"мои глаголы",
        priority:Priorities.important,
        words:[
            {id:4,word:"杯子杯子",pinyin:"bēizi",translate:"стакан; кружка; бокал; рюмка",example:""},
            {id:4,word:"杯子",pinyin:"bēizi",translate:"стакан; кружка; бокал; рюмка",example:""},

        ]
    },
])

const submit = (list: List) => {
    localLists.value.push(list)
}

</script>

<style scoped>

</style>
