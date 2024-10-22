import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { Theme } from '@/types/enums'

export const useThemeStore = defineStore('theme', () => {
    const _theme: Ref<Theme> = ref(Theme.dark)

    function init() {
        const currentTheme = localStorage.getItem('theme')
        console.log(currentTheme)
        _theme.value = currentTheme ? JSON.parse(currentTheme) : Theme.dark
    }

    function setTheme(newTheme: Theme) {
        _theme.value = newTheme
        console.log(newTheme)
        localStorage.setItem('theme', JSON.stringify(_theme.value))
    }

    return { setTheme, init, _theme }
})