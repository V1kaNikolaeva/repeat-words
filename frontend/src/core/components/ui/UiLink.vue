<template>
    <div class="link-container">
        <RouterLink 
            :activeClass="underline === 'base' ? 'active-link' : underline === 'header' ? 'header' : ''"
            :class="{'hsk-link' : underline === 'base', 'header-link' : underline === 'header'}" 
            :to="{ name: props.pathName }">{{ props.text }}
        </RouterLink>
    </div>
</template>

<script setup lang="ts">

interface Props {
    pathName: string,
    text: string,
    underline: string,
}
const props = defineProps<Props>()

</script>

<style scoped>
.link-container {

    padding: 10px;
}

.hsk-link {
    border: none;
}

.active-link {
    border-bottom: 1px solid rgb(0, 0, 0);
}

.header {
    background-color: #e5e5e5;
    border-radius: 10px;
}
.header-link {
    padding: 12px;
}
</style>