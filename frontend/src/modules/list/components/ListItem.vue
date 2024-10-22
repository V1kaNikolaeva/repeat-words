<template>
    <div class="list-item">
        <p>{{ props.list.id }}</p>
        <p>{{ props.list.name }}</p>
        <p>{{ props.list.priority }}</p>
        <p>{{ props.list.words }}</p>
    </div>
</template>

<script setup lang="ts">
import type { List } from '@/types/interfaces';


interface Props {
    list: List,
}
const props = defineProps<Props>()

</script>

<style scoped>
.list-item {
    display: flex;
    flex-direction: row;
}
</style>