import { Priorities, Theme } from "@/types/enums";

export const hiddenParts = [
    {
        part: 'word',
        checked: false,
        text: 'Слово'
    },
    {
        part: 'pinyin',
        checked: false,
        text: 'Пхиньинь'
    },
    {
        part: 'translate',
        checked: false,
        text: 'Перевод'
    },
];

export const themes = [
    {
        value: Theme.dark,
        text: 'Темная'
    },
    {
        value: Theme.light,
        text: 'Светля'
    },
]

export const selectPriority = [
    { name: 'Обычный', value: Priorities.default },
    { name: 'Средний', value: Priorities.medium },
    { name: 'Важный', value: Priorities.important },
]