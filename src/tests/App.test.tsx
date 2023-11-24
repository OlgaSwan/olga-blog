import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import './match-media'

import { SharedBtn } from '../model/diary'
import { TagInput } from 'src/model/tag'
import { getUrl } from 'src/model/diary/shared-btn'
import { MenuComponent } from 'src/shared/template/abstract/menu/menu'

describe('Testing SharedBtn', () => {
  const id = '1'
  test('Testing URL', async () => {
    render(<SharedBtn diary_id={id} />)
    const url = getUrl(id)
    const button = screen.getByRole('button')
    userEvent.setup()
    await userEvent.click(button)
    const testingUrl = await window.navigator.clipboard.readText()
    expect(testingUrl).toEqual(url)
  })
})

describe('Testing Menu', () => {
  test('Testing theme changing', async () => {
    render(<MenuComponent />)
    expect(screen.getByTitle('menu')).toBeInTheDocument()
  })
})

describe('Testing TagInput', () => {
  test('Testing tag actual rendering', async () => {
    render(<TagInput suggestions={['vite', 'js', 'ts']} />)
    const input = screen.getByTitle('text-input')
    await userEvent.type(input, 'vite')
    await userEvent.keyboard('Enter')
    
    const tag = screen.getByText('vite')
    expect(tag).toBeInTheDocument()
  })
})
