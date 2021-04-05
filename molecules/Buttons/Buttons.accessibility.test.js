import React from 'react'
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import { Default, Size, Color, LeftIcon, OnlyIcon } from './Buttons.stories'
expect.extend(toHaveNoViolations)

const rules = {
  rules: {
    'landmark-no-duplicate-banner': { enabled: false },
    'landmark-unique': { enabled: false },
  },
}

it('renders Button default', async () => {
  const { container } = render(<Default {...Default.args} />)
  const results = await axe(container, rules)
  expect(results).toHaveNoViolations()
})
it('renders Button Size', async () => {
  const { container } = render(<Size {...Size.args} />)
  const results = await axe(container, rules)
  expect(results).toHaveNoViolations()
})
it('renders Button Color', async () => {
  const { container } = render(<Color {...Color.args} />)
  const results = await axe(container, rules)
  expect(results).toHaveNoViolations()
})
it('renders Button OnlyIcon', async () => {
  const { container } = render(<OnlyIcon {...OnlyIcon.args} />)
  const results = await axe(container, rules)
  expect(results).toHaveNoViolations()
})
it('renders Button LeftIcon', async () => {
  const { container } = render(<LeftIcon {...LeftIcon.args} />)
  const results = await axe(container, rules)
  expect(results).toHaveNoViolations()
})
