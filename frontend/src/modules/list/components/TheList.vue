<template>
    <div class="lists-container">
        <ListItem v-for="(list, index) in props.lists" :key="index" :list="list" />
    </div>
</template>

<script setup lang="ts">
import type { List } from '@/types/interfaces';
import ListItem from './ListItem.vue';


interface Props {
    lists: List[]
}
const props = defineProps<Props>()

</script>

<style scoped>
.lists-container {
    padding-top: 30px;
}
</style>