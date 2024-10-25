<template>
    <div class="list-item">
        <button @click="info = !info">
            <div class="info">
                <p>{{ props.list.id }}</p>
                <p>{{ shortName }}</p>
                <p>{{ shortList }}</p>
            </div>
        </button>
    
            <div v-if="info" class="more-info">
                <UiButton :bType="bTypes.withColor" bgColor="--light-green">
                    <template #text>
                        Открыть
                    </template>
                </UiButton>
                <UiButton>
                    <template #text>
                        Изменить
                    </template>
                </UiButton>
                <UiButton>
                    <template #text>
                        Удалить
                    </template>
                </UiButton>
            </div>
        </div>
</template>

<script setup lang="ts">
import UiButton from '@/core/components/ui/UiButton.vue';
import { bTypes } from '@/types/enums';
import type { List } from '@/types/interfaces';
import { computed, ref, type Ref } from 'vue';


interface Props {
    list: List,
}
const props = defineProps<Props>()
const info: Ref<boolean> = ref(false)

const shortName = computed(() => {
    return props.list.name.length >= 10 ? `${props.list.name.slice(0, 10)}...` : props.list.name
})
const shortList = computed(() => {
    return props.list.words.length && 
            props.list.words[0]?.word.length <= 2 && 
            props.list.words[props.list.words.length - 1]?.word.length <= 2 ? 

        `${props.list.words[0]?.word}...${props.list.words[props.list.words.length - 1]?.word}` 

        : props.list.words[0]?.word.length >= 2 && 
        props.list.words[props.list.words.length - 1]?.word.length >= 2 ?

        `${props.list.words[0]?.word}...`
        
        : ''

})


</script>

<style scoped>
.list-item {

    margin-bottom: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    max-width: 240px;
    width: 100%;
    border-radius: 10px;
}
.info {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 18px;
}
</style>