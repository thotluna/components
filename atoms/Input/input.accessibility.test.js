import React from 'react'
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

// import '@testing-library/jest-dom/extend-expect'

//👇 Imports a specific story for the test
import { Default, Value, Types, Inline } from './Input.stories'
expect.extend(toHaveNoViolations)

it('renders parragraph default', async () => {
  const { container } = render(<Default {...Default.args} />)
  expect(await axe(container)).toHaveNoViolations()
})

it('renders parragraph Value', async () => {
  const { container } = render(<Value {...Value.args} />)
  expect(await axe(container)).toHaveNoViolations()
})

it('renders parragraph Types', async () => {
  const { container } = render(<Types {...Types.args} />)
  expect(await axe(container)).toHaveNoViolations()
})

it('renders parragraph Inline', async () => {
  const { container } = render(<Inline {...Inline.args} />)
  expect(await axe(container)).toHaveNoViolations()
})
