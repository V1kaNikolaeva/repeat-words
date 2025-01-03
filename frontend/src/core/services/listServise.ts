import { Priorities } from "@/types/enums";
import type { List } from "@/types/interfaces";

export function list(): List {
    return {
        id: Math.random(),
        name: '',
        priority: Priorities.default,
        words: []
    }
}