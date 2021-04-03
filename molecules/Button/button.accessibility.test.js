import React from 'react'
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import {
  Default,
  Types,
  Inline,
  IconOnlyLeft,
  IconOnlyRight,
} from './Button.stories'
expect.extend(toHaveNoViolations)

const rules = {
  rules: {
    'landmark-no-duplicate-banner': { enabled: false },
    'landmark-unique': { enabled: false },
  },
}

it('renders avatar default', async () => {
  const { container } = render(<Default {...Default.args} />)
  expect(await axe(container)).toHaveNoViolations()
})

it('renders avatar Type', async () => {
  const { container } = render(<Types {...Types.args} />)
  const results = await axe(container, rules)
  expect(results).toHaveNoViolations()
})

it('renders avatar Inline', async () => {
  const { container } = render(<Inline {...Inline.args} />)
  const results = await axe(container, rules)
  expect(results).toHaveNoViolations()
})

it('renders avatar IconOnlyLeft', async () => {
  const { container } = render(<IconOnlyLeft {...IconOnlyLeft.args} />)
  const results = await axe(container, rules)
  expect(results).toHaveNoViolations()
})

it('renders avatar IconOnlyRight', async () => {
  const { container } = render(<IconOnlyRight {...IconOnlyRight.args} />)
  const results = await axe(container, rules)
  expect(results).toHaveNoViolations()
})
