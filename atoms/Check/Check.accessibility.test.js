import React from 'react'
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import { Default, ActiveColor, InactiveColor } from './Check.stories'
expect.extend(toHaveNoViolations)

it('renders Check default', async () => {
  const { container } = render(<Default {...Default.args} />)
  expect(await axe(container)).toHaveNoViolations()
})

it('renders Check ActiveColor', async () => {
  const { container } = render(<ActiveColor {...ActiveColor.args} />)
  expect(await axe(container)).toHaveNoViolations()
})
it('renders Check InactiveColor', async () => {
  const { container } = render(<InactiveColor {...InactiveColor.args} />)
  expect(await axe(container)).toHaveNoViolations()
})
