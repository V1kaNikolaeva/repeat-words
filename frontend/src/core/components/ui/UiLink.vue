<template>
    <div class="link-container">
        <RouterLink activeClass="active-link" class="hsk-link" :to="{ name: props.pathName }">{{ props.text }}</RouterLink>
    </div>
</template>

<script setup lang="ts">

interface Props {
    pathName: string,
    text: string
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
</style>