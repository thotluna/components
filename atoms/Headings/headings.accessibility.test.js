import React from 'react'
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import { Default, Colors, Sizes, Weights } from './Headings.stories'
expect.extend(toHaveNoViolations)

const rules = {
  rules: {
    'landmark-no-duplicate-banner': { enabled: false },
    'landmark-unique': { enabled: false },
  },
}

it('renders headings default', async () => {
  const { container } = render(<Default {...Default.args} />)
  expect(await axe(container)).toHaveNoViolations()
})

it('renders headings Color', async () => {
  const { container } = render(<Colors {...Colors.args} />)
  const results = await axe(container, rules)
  expect(results).toHaveNoViolations()
})

it('renders headings Size', async () => {
  const { container } = render(<Sizes {...Sizes.args} />)
  const results = await axe(container, rules)
  expect(results).toHaveNoViolations()
})

it('renders headings Weights', async () => {
  const { container } = render(<Weights {...Weights.args} />)
  const results = await axe(container, rules)
  expect(results).toHaveNoViolations()
})
