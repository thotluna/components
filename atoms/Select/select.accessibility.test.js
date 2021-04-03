import React from 'react'
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import { Default, Value, Inline, LabelShow } from './Select.stories'
expect.extend(toHaveNoViolations)

it('renders select default', async () => {
  const { container } = render(<Default {...Default.args} />)
  expect(await axe(container)).toHaveNoViolations()
})

it('renders select value', async () => {
  const { container } = render(<Value {...Value.args} />)
  expect(await axe(container)).toHaveNoViolations()
})

it('renders select Inline', async () => {
  const { container } = render(<Inline {...Inline.args} />)
  expect(await axe(container)).toHaveNoViolations()
})

it('renders select LabelShow', async () => {
  const { container } = render(<LabelShow {...LabelShow.args} />)
  expect(await axe(container)).toHaveNoViolations()
})
