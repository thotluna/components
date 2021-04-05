import React from 'react'
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import { Default, Active } from './Check.stories'
expect.extend(toHaveNoViolations)

it('renders Check default', async () => {
  const { container } = render(<Default {...Default.args} />)
  expect(await axe(container)).toHaveNoViolations()
})

it('renders Check Active', async () => {
  const { container } = render(<Active {...Active.args} />)
  expect(await axe(container)).toHaveNoViolations()
})
