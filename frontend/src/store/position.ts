import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { useWordsStore } from './words'

export const usePositionStore = defineStore('position', () => {
    const position: Ref<number> = ref(0)
    const wordsStore = useWordsStore()
    function init() {
        const currentPosition = Number(localStorage.getItem('position'))
        position.value = currentPosition ? currentPosition : 0
        localStorage.setItem('position', JSON.stringify(position.value))
    }
    function setPosition(newPosition: number) {
        position.value = newPosition
        localStorage.setItem('position', JSON.stringify(position.value))
    }
    function increment() {
        setPosition(position.value + 1)
    }
    function dicrement() {
        setPosition(position.value - 1)
    }
    function first() {
        setPosition(0)
    }
    function last() {
        setPosition(wordsStore.data.length - 1)
    }
    return { position, increment, dicrement, init, setPosition, first, last }
})
