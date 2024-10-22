<template>
    <MainContainer>
        <UiButton @click="isModalActive = !isModalActive" :bType="bTypes.border">Создать список</UiButton>
        <TheList v-if="localLists.length" />
        <UiModalWindow v-if="isModalActive">
            <ListForm @handler="submit"></ListForm>
        </UiModalWindow>
    </MainContainer>
</template>

<script setup lang="ts">
import MainContainer from '@/core/components/containers/MainContainer.vue';
import UiButton from '@/core/components/ui/UiButton.vue';
import UiModalWindow from '@/core/components/ui/UiModalWindow.vue';
import ListForm from '@/modules/list/components/ListForm.vue';
import TheList from '@/modules/list/components/TheList.vue';
import { bTypes } from '@/types/enums';
import type { List } from '@/types/interfaces';
import { ref, type Ref } from 'vue';


const isModalActive: Ref<boolean> = ref(false)

const localLists: Ref<List[] | []> = ref([])

const submit = (list: List) => {
    localLists.value.push(list)
}

</script>

<style scoped>

</style>
