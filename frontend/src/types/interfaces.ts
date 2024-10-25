import type { Priorities } from "./enums";

export interface Word {
    id: number,
    word: string,
    pinyin: string,
    translate: string,
    example: string,
}

export interface List {
    id: number,
    name: string,
    priority: Priorities,
    words: Word[],
}

export interface Folder {
    id: number,
    name: string,
}
