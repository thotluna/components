import React from 'react'
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import {
  Default,
  Colors,
  Size,
  TitelColors,
  TitelSizes,
} from './SeparatorLine.stories'
expect.extend(toHaveNoViolations)

const rules = {
  rules: {
    'landmark-no-duplicate-banner': { enabled: false },
    'landmark-unique': { enabled: false },
  },
}

it('renders Separator Line default', async () => {
  const { container } = render(<Default {...Default.args} />)
  expect(await axe(container)).toHaveNoViolations()
})

it('renders Separator Title and Colors', async () => {
  const { container } = render(<TitelColors {...TitelColors.args} />)
  const results = await axe(container, rules)
  expect(results).toHaveNoViolations()
})

it('renders Separator Line Colors', async () => {
  const { container } = render(<Colors {...Colors.args} />)
  const results = await axe(container, rules)
  expect(results).toHaveNoViolations()
})

it('renders Separator Line Size', async () => {
  const { container } = render(<Size {...Size.args} />)
  const results = await axe(container, rules)
  expect(results).toHaveNoViolations()
})
it('renders Separator Line TitelSizes', async () => {
  const { container } = render(<TitelSizes {...TitelSizes.args} />)
  const results = await axe(container, rules)
  expect(results).toHaveNoViolations()
})
