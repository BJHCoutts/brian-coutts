import { writable, Writable } from "svelte/store"

export const menuIsOpen: Writable<boolean> = writable(false)

export const imageModalIsOpen: Writable<boolean> = writable(false)

export const imageModalUrl: Writable<string> = writable('')
