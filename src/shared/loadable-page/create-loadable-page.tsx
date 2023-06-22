import React from 'react'
import loadable from '@loadable/component'
import pMinDelay from 'p-min-delay'
import pRetry from 'p-retry'
import pTimeout from 'p-timeout'

import { Placeholder } from './placeholder'

// prettier-ignore
export const createLoadablePage = (promiseConstructor: () => PromiseLike<any>) => (
  loadable(
    () =>
      pMinDelay(
        pRetry(
          () => pTimeout(
            promiseConstructor(),
            { milliseconds: 2000 },
          ),
          { retries: 3 },
        ),
        500,
      ),
    { fallback: <Placeholder /> },
  )
)
