import { atom } from 'nanostores'

// prettier-ignore
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

export const colorScheme = {
  store,
  toggle: () => {
    store.set(store.get() === 'light' ? 'dark': 'light')
  }
}
