<template>
    <table v-if="hsks?.length" class="list-container">
        <tbody>
            <TableItem type="table" v-for="(word, index) in hsks" :word="word" :key="index"/>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import { useWordsStore } from '@/store/words';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import TableItem from '../components/TableItem.vue';

const router = useRoute()
const wordsStore = useWordsStore()

const hsks = computed(() => {
    const data = router.name === 'hsk.hsk1' ? wordsStore.hsk1 : 
        router.name === 'hsk.hsk2' ? wordsStore.hsk2 :
        router.name === 'hsk.hsk3' ? wordsStore.hsk3 : 
        router.name === 'hsk.hsk4' ? wordsStore.hsk4 : 
        router.name === 'hsk.hsk5' ? wordsStore.hsk5 : 
        router.name === 'hsk.hsk6' ? wordsStore.hsk6 : null 
    return data
})
</script>

<style scoped>
.list-container {
    margin-top: 20px;
}
table {
  border-collapse: collapse;
  border-radius: 10px;
}
</style>