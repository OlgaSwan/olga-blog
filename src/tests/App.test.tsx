import { afterAll, beforeAll, describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { SharedBtn } from '../model/diary'
import { Component, delay, delayFunc, mapArrToStrings, square } from '../app/component'
// Component
describe('Testing component', () => {
  test('heading testing', () => {
    render(<Component />)

    expect(screen.getByTitle('heading')).toBeInTheDocument()
    expect(screen.getByTitle('heading')).toHaveTextContent('Component Heading')
  })
  test('main testing', async () => {
    render(<Component />)

    const divData = await screen.findByTitle('data')
    expect(divData).toBeInTheDocument()
    expect(divData).toHaveStyle('border: 1px')

    const resetBtn = screen.getByText('Reset')
    const input = screen.getByPlaceholderText('Enter text')
    await userEvent.type(input, ' example')
    expect(input).toHaveValue('testing example')
    expect(resetBtn).toBeInTheDocument()
    expect(resetBtn).not.toBeDisabled()
    await userEvent.click(resetBtn)
    expect(input).not.toHaveValue(undefined)
    expect(input).toHaveValue('')

    expect(resetBtn).toMatchSnapshot()
    expect(input).toMatchSnapshot()
  })
  test('footer testing', () => {
    render(<Component />)

    expect(screen.getByTitle('footering')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Disabled')).toBeDisabled()
  })
})

// mapArrToString
describe('Mapping to string', () => {
  test('Number array', () => {
    expect(mapArrToStrings([1, 2, 3])).toStrictEqual(['1', '2', '3'])
  })
  test('Mix array', () => {
    expect(mapArrToStrings([1, 2, 3, 'str', null, undefined])).toStrictEqual(['1', '2', '3'])
  })
})

describe('square', () => {
  let mockValue: number
  beforeAll(() => {
    mockValue = Math.round(Math.random())
  })
  test('Simple', () => {
    expect(square(mockValue)).toBe(Math.pow(mockValue, mockValue))
    expect(square(mockValue)).not.toBeUndefined()

    const spyMathPow = vi.spyOn(Math, 'pow')
    square(1)
    expect(spyMathPow).not.toHaveBeenCalled()
  })

  afterAll(() => {
    vi.clearAllMocks()
  })
})

describe('delay', () => {
  test('Delay Function', async () => {
    const sum = await delay(delayFunc, 1000)
    expect(sum).toBe(10)
  })
})

describe('Testing components', () => {
  test('Testing SharedBtn', async () => {
    render(<SharedBtn diary_id='1' />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })
})
