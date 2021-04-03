import React from 'react'
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import { Default, Clickable, Dragabble, Colors, Sizes } from './Card.stories'
expect.extend(toHaveNoViolations)

it('renders Card default', async () => {
  const { container } = render(<Default {...Default.args} />)
  expect(await axe(container)).toHaveNoViolations()
})

it('renders Card Clickable', async () => {
  const { container } = render(<Clickable {...Clickable.args} />)
  expect(await axe(container)).toHaveNoViolations()
})

it('renders Card Dragabble', async () => {
  const { container } = render(<Dragabble {...Dragabble.args} />)
  expect(await axe(container)).toHaveNoViolations()
})

it('renders Card Colors', async () => {
  const { container } = render(<Colors {...Colors.args} />)
  expect(await axe(container)).toHaveNoViolations()
})

it('renders Card Sizes', async () => {
  const { container } = render(<Sizes {...Sizes.args} />)
  expect(await axe(container)).toHaveNoViolations()
})
