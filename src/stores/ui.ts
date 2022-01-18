import { writable } from "svelte/store"

export const menuIsOpen = writable(false)

export const imageModalIsOpen = writable(false)

export const imageModalUrl = writable('')
