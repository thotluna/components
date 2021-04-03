import React from 'react'
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import { Default, OnlyIcon, OnlyTitle } from './Toolbar.stories'
expect.extend(toHaveNoViolations)

const rules = {
  rules: {
    'landmark-no-duplicate-banner': { enabled: false },
    'landmark-unique': { enabled: false },
  },
}

it('renders toolbar default', async () => {
  const { container } = render(<Default {...Default.args} />)
  expect(await axe(container)).toHaveNoViolations()
})

it('renders toolbar OnlyIcon', async () => {
  const { container } = render(<OnlyIcon {...OnlyIcon.args} />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

it('renders toolbar OnlyTitle', async () => {
  const { container } = render(<OnlyTitle {...OnlyTitle.args} />)
  const results = await axe(container, rules)
  expect(results).toHaveNoViolations()
})
