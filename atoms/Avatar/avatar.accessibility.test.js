import React from 'react'
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import { Default, Size } from './Avatar.stories'
expect.extend(toHaveNoViolations)

it('renders avatar default', async () => {
  const { container } = render(<Default {...Default.args} />)
  expect(await axe(container)).toHaveNoViolations()
})

it('renders avatar Size', async () => {
  const { container } = render(<Size {...Size.args} />)
  expect(await axe(container)).toHaveNoViolations()
})
