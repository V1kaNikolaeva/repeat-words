<template>
    <p>Выберите тему</p>
    <UiRadioInput v-for="(input, index) in localThemes"
        :key="index"
        v-model="theme"
        :label="input.text"
        :value="input.value"
    />
</template>

<script setup lang="ts">
import { ref, watch, type Ref } from 'vue';
import UiRadioInput from '@/core/components/ui/UiRadioInput.vue';
import type { Theme } from '@/types/enums';
import { themes } from '@/core/options/choose';
import { useThemeStore } from '@/store/theme';

const themeStore = useThemeStore()

const localThemes = ref([...themes])

const theme: Ref<Theme> = ref(themeStore._theme)

watch(theme, () => {
    themeStore.setTheme(theme.value)
})

</script>

<style scoped>

</style>