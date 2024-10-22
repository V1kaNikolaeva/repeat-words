<template>
    <tr
        v-if="props.word"
        class="table"
    >
        <td>{{ props.word?.id }}</td>
        <td>
        {{ props.word?.word }}
        </td>
        <td>
            {{ props.word?.pinyin }}
        </td>
        <td>
        {{ props.word?.translate }}
        </td>
        <td>{{ props.word?.example }}</td>
    </tr>
</template>

<script setup lang="ts">
import type { Word } from '@/types/interfaces'


type wordShow = 'one' | 'table'
interface Props {
  word: Word
  type: wordShow
}

const props = defineProps<Props>()

</script>

<style scoped>

td {
  text-align: start;
  width: 20%;
  padding: 10px;
}
tr {
  vertical-align: text-top;
}
tr:nth-child(even) { background: #e0e0e0; }
tr:nth-child(odd)  { background: #f3f3f3; }

</style>
