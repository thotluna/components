import React from 'react'
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import { Default, Colors } from './TasksCounter.stories'
expect.extend(toHaveNoViolations)

const rules = {
  rules: {
    'landmark-no-duplicate-banner': { enabled: false },
    'landmark-unique': { enabled: false },
  },
}

it('renders avatar default', async () => {
  const { container } = render(<Default {...Default.args} />)
  const results = await axe(container, rules)
  expect(results).toHaveNoViolations()
})

it('renders avatar Color', async () => {
  const { container } = render(<Colors {...Colors.args} />)
  const results = await axe(container, rules)
  expect(results).toHaveNoViolations()
})
