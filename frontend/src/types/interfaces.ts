import type { Priorities } from "./enums";

export interface Word {
    readonly id: number,
    readonly word: string,
    readonly pinyin: string,
    readonly translate: string,
    readonly example: string,
}

export interface List {
    readonly id: number,
    name: string,
    priority: Priorities,
    words: Word[],
}

export interface Folder {
    readonly id: number,
    name: string,
}
