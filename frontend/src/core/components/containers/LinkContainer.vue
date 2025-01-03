<template>
    <div class="hsk-links-container">
        <slot/>
    </div>
</template>

<script setup lang="ts">
interface Props {
    direction: string,
}
const props = defineProps<Props>()
</script>

<style scoped>
.hsk-links-container {
    display: flex;
    flex-direction: v-bind(direction);
    gap: 20px;
}
</style>