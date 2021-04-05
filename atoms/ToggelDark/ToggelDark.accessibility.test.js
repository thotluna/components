import React from 'react'
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import { Default, Active } from './ToggelDark.stories'
expect.extend(toHaveNoViolations)

it('renders toggle dark default', async () => {
  const { container } = render(<Default {...Default.args} />)
  expect(await axe(container)).toHaveNoViolations()
})

it('renders toggle dark Active', async () => {
  const { container } = render(<Active {...Active.args} />)
  expect(await axe(container)).toHaveNoViolations()
})
