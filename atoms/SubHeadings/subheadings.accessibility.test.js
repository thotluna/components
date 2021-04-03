import React from 'react'
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import { Default, Colors, Sizes, Weights } from './SubHeadings.stories'
expect.extend(toHaveNoViolations)

it('renders subheading default', async () => {
  const { container } = render(<Default {...Default.args} />)
  expect(await axe(container)).toHaveNoViolations()
})

it('renders subheading Color', async () => {
  const { container } = render(<Colors {...Colors.args} />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

it('renders subheading Size', async () => {
  const { container } = render(<Sizes {...Sizes.args} />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

it('renders subheading Weights', async () => {
  const { container } = render(<Weights {...Weights.args} />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
