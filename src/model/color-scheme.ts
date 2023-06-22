import { atom } from 'nanostores'

const store = atom<'light' | 'dark'>(
  localStorage.getItem('preferred-color-scheme') === 'dark'
    ? 'dark'
    : localStorage.getItem('preferred-color-scheme') === 'light'
    ? 'light'
    : matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark'
)

store.subscribe((value) => {
  localStorage.setItem('preferred-color-scheme', value)
})

export const colorScheme = store
