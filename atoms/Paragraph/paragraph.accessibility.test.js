import React from 'react'
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

// import '@testing-library/jest-dom/extend-expect'

//👇 Imports a specific story for the test
import { Default, Colors, Size, IsInline } from './Paragraph.stories'
expect.extend(toHaveNoViolations)

it('renders parragraph default', async () => {
  const { container } = render(<Default {...Default.args} />)
  expect(await axe(container)).toHaveNoViolations()
})

it('renders parragraph Color', async () => {
  const { container } = render(<Colors {...Colors.args} />)
  expect(await axe(container)).toHaveNoViolations()
})

it('renders parragraph Size', async () => {
  const { container } = render(<Size {...Size.args} />)
  expect(await axe(container)).toHaveNoViolations()
})

it('renders parragraph IsInline', async () => {
  const { container } = render(<IsInline {...IsInline.args} />)
  expect(await axe(container)).toHaveNoViolations()
})
