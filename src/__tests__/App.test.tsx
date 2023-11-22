import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Component from '../app/component'

test('Renders the test component', () => {
  render(<Component />)

  expect(screen.getByTitle('heading')).toHaveTextContent('Component Heading')
})
test('main testing', () => {
  render(<Component />)

  const resetBtn = screen.getByText('Reset')
  const input = screen.getByPlaceholderText('Enter text')
  expect(resetBtn).toBeTruthy()
  expect(resetBtn).not.toBeDisabled()
  userEvent.click(resetBtn)
  expect(input).toHaveValue('')
})

test('footer testing', () => {
  render(<Component />)
  expect(screen.getByTitle('footering')).toBeTruthy()
  expect(screen.getByPlaceholderText('Disabled')).toBeDisabled()
})
