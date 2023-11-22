import React, { FunctionComponent, useState } from 'react'

const Component: FunctionComponent = () => {
  const [state, setState] = useState('testing')
  return (
    <>
      <header title='heading'>Component Heading</header>
      <main>
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

export default Component
