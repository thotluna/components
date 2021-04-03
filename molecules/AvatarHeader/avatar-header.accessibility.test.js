import React from 'react'
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import { Default, Size } from './AvatarHeader.stories'
expect.extend(toHaveNoViolations)

const rules = {
  rules: {
    'landmark-no-duplicate-banner': { enabled: false },
    'landmark-unique': { enabled: false },
  },
}

it('renders avatar default', async () => {
  const { container } = render(<Default {...Default.args} />)
  expect(await axe(container)).toHaveNoViolations()
})

it('renders avatar Size', async () => {
  const { container } = render(<Size {...Size.args} />)
  const results = await axe(container, rules)
  expect(results).toHaveNoViolations()
})
