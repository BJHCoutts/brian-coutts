import { writable } from 'svelte/store'
import { spring } from 'svelte/motion'

export const menuIsOpen = writable(false)

export const imageModalIsOpen = writable(false)

export const imageModalUrl = writable('')

export const innerMenuSpring = spring(0,{
	stiffness: .1,
	damping: .7,
});

export const outerMenuSpring = spring(0,{
	stiffness: .2,
	damping: .9,
});

export const handleMenuClick = ():void => {
	menuIsOpen.update(menuIsOpenValue => !menuIsOpenValue)
	innerMenuSpring.update(innerMenuSpringValue => innerMenuSpringValue === 0 ? 70 : 0)
	outerMenuSpring.update(outerMenuSpringValue => outerMenuSpringValue === 0 ? 80 : 0)
}