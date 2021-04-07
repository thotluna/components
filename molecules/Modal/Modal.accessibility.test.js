import React from 'react'
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import { Default, WithTitleAndFooter } from './Modal.stories'
expect.extend(toHaveNoViolations)

const rules = {
  rules: {
    'landmark-no-duplicate-banner': { enabled: false },
    'landmark-unique': { enabled: false },
  },
}

it('renders Modal default', async () => {
  const { container } = render(<Default {...Default.args} />)
  const results = await axe(container, rules)
  expect(results).toHaveNoViolations()
})
it('renders Modal WithTitleAndFooter', async () => {
  const { container } = render(
    <WithTitleAndFooter {...WithTitleAndFooter.args} />
  )
  const results = await axe(container, rules)
  expect(results).toHaveNoViolations()
})
