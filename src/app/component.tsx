import React, { FunctionComponent, useEffect, useState } from 'react'

export const Component: FunctionComponent = () => {
  const [state, setState] = useState('testing')
  const [data, setData] = useState<string | null>(null)
  useEffect(() => {
    setTimeout(() => setData('something'), 100)
  })
  return (
    <>
      <header title='heading'>Component Heading</header>
      <main>
        {data && (
          <div title='data' style={{ border: '1px' }}>
            data
          </div>
        )}
        <input placeholder='Enter text' type='text' value={state} onChange={e => setState(e.target.value)} />
        <button onClick={() => setState('')}>Reset</button>
      </main>
      <footer title='footering'>
        <button placeholder='Disabled' disabled={true}>
          Disabled
        </button>
      </footer>
    </>
  )
}

type ArrElement = number | string | null | undefined
export const mapArrToStrings = (arr: ArrElement[]) => {
  return arr.filter(e => Number.isInteger(e)).map(String)
}

export const square = (number: number) => {
  if (number === 1) return number
  return Math.pow(number, number)
}

type Callback = (a: number, b: number) => number

export const delayFunc: Callback = (x, y) => x + y

export const delay = (callback: Callback, ms: number) =>
  new Promise(resolve => setTimeout(() => resolve(callback(5, 5)), ms))
