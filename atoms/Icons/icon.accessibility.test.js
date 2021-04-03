import React from 'react'
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import { Default, Colors, Size, Type, HasBorder } from './Icon.stories'
expect.extend(toHaveNoViolations)

it('renders icons default', async () => {
  const { container } = render(<Default {...Default.args} />)
  expect(await axe(container)).toHaveNoViolations()
})

it('renders icons Color', async () => {
  const { container } = render(<Colors {...Colors.args} />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

it('renders icons Size', async () => {
  const { container } = render(<Size {...Size.args} />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

it('renders icons type', async () => {
  const { container } = render(<Type {...Type.args} />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

it('renders icons HasBorder', async () => {
  const { container } = render(<HasBorder {...HasBorder.args} />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
