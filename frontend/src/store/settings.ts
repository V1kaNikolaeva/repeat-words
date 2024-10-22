import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { Word } from '@/types/interfaces'

export const useSettingsStore = defineStore('settings', () => {
    const _level: Ref<number> = ref(1)

    // true - параметр скрыт от пользователя
    // false - параметр показан пользователю
    const _word: Ref<boolean> = ref(false)
    const _pinyin: Ref<boolean> = ref(false)
    const _translate: Ref<boolean> = ref(false)

    const lastWords: Ref<Word[]> = ref([])

    function init() {
        const currentLevel = Number(localStorage.getItem('level')) 
        const currentParts = localStorage.getItem('parts')
        const currentLastWords = localStorage.getItem('lastWords')

        _level.value = currentLevel ? currentLevel : 1
        localStorage.setItem('level', JSON.stringify(_level.value))

        // 0 - word
        // 1 - pinyin
        // 2 - translate
        const parsedParts = currentParts ? JSON.parse(currentParts) : null

        _word.value = parsedParts ? parsedParts[0] : false
        _pinyin.value = parsedParts ? parsedParts[1] : false
        _translate.value = parsedParts ? parsedParts[2] : false
        localStorage.setItem('parts', JSON.stringify([_word.value, _pinyin.value, _translate.value]))

        lastWords.value = currentLastWords ? JSON.parse(currentLastWords) : []
        localStorage.setItem('lastWords', JSON.stringify(lastWords.value))
    }
    function setLevel(newLevel: number) {
        _level.value = newLevel
        localStorage.setItem('level', JSON.stringify(_level.value))
    }

    function setParts(word: boolean, pinyin: boolean, translate: boolean) {
        _word.value = word
        _pinyin.value = pinyin
        _translate.value = translate
        localStorage.setItem('parts', JSON.stringify([_word.value, _pinyin.value, _translate.value]))
    }

    // Мои списки
    // Тест создать со списком из хск\своим списком. выбрать кол во элементов

    function addWord(newWord: Word) {
        if (!newWord) {
            return
        }
        if (lastWords.value.find(item => newWord.word === item.word)) {
            return
        }
        if (lastWords.value.length >= 5) {
            lastWords.value.pop()
        }
        lastWords.value.unshift(newWord)
        localStorage.setItem('lastWords', JSON.stringify(lastWords.value))
    }
    return { _level, _word, _pinyin, _translate, lastWords, init, setLevel, setParts, addWord }
})
