import type { Priorities } from "./enums";

export interface Word {
    id: string,
    word: string,
    pinyin: string,
    translate: string,
    example: string,
}

export interface List {
    id?: number,
    name: string,
    priority: Priorities,
    words?: Word | [],
}
