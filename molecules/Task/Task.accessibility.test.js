import React from 'react'
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import {
  Default,
  Long,
  Checked,
  Pending,
  Types,
  PendingTypes,
} from './Task.stories'
expect.extend(toHaveNoViolations)

it('renders Task default', async () => {
  const { container } = render(<Default {...Default.args} />)
  expect(await axe(container)).toHaveNoViolations()
})
it('renders Task Long', async () => {
  const { container } = render(<Long {...Long.args} />)
  expect(await axe(container)).toHaveNoViolations()
})
it('renders Task Checked', async () => {
  const { container } = render(<Checked {...Checked.args} />)
  expect(await axe(container)).toHaveNoViolations()
})
it('renders Task Pending', async () => {
  const { container } = render(<Pending {...Pending.args} />)
  expect(await axe(container)).toHaveNoViolations()
})
it('renders Task Types', async () => {
  const { container } = render(<Types {...Types.args} />)
  expect(await axe(container)).toHaveNoViolations()
})
it('renders Task PendingTypes', async () => {
  const { container } = render(<PendingTypes {...PendingTypes.args} />)
  expect(await axe(container)).toHaveNoViolations()
})
