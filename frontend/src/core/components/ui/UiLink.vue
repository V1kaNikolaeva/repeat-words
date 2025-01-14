<template>
    <div class="link-container"
        :class="{ 'link-container-icons': $slots['icon'] }"
    >

        <div v-if="$slots['icon']">
            <slot name="icon"/>
        </div>
        <RouterLink 
            :activeClass="'active-link'"
            :class="{'hsk-link' : underline === 'base', 'header-link' : underline === 'header'}" 
            :to="{ name: props.pathName }">
            {{ props.text }}
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

}

.hsk-link {
    border: none;
}

.active-link {
    color: var(--font-color-active);
}

.header {
    border-radius: 10px;
}
.header-link {
    padding: 12px;
    font-weight: bold;
}
.link-container-icons {
    display: flex;
    align-items: center;
}
</style>