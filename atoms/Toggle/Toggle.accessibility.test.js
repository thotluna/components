import React from 'react'
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import { Default, Active, Inactive } from './Toggle.stories'
expect.extend(toHaveNoViolations)

it('renders toggle default', async () => {
  const { container } = render(<Default {...Default.args} />)
  expect(await axe(container)).toHaveNoViolations()
})
it('renders toggle Active', async () => {
  const { container } = render(<Active {...Active.args} />)
  expect(await axe(container)).toHaveNoViolations()
})
it('renders toggle inactive', async () => {
  const { container } = render(<Inactive {...Inactive.args} />)
  expect(await axe(container)).toHaveNoViolations()
})
