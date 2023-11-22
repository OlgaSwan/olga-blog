import { render } from '@testing-library/react'
import Component from '../app/component'

test('demo', () => {
  expect(true).toBe(true)
})

test('Renders the main page', () => {
  render(<Component />)
  expect(true).toBeTruthy()
})
