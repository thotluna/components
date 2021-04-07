import React from 'react'
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import {
  Default,
  ImageDecorative,
  ImageRounded,
  ImageWithBorder,
  ImageRounderWithBorder,
} from './Picture.stories'
expect.extend(toHaveNoViolations)

it('renders Picture default', async () => {
  const { container } = render(<Default {...Default.args} />)
  expect(await axe(container)).toHaveNoViolations()
})

it('renders Picture ImageDecorative', async () => {
  const { container } = render(<ImageDecorative {...ImageDecorative.args} />)
  expect(await axe(container)).toHaveNoViolations()
})

it('renders Picture ImageRounded', async () => {
  const { container } = render(<ImageRounded {...ImageRounded.args} />)
  expect(await axe(container)).toHaveNoViolations()
})

it('renders Picture ImageWithBorder', async () => {
  const { container } = render(<ImageWithBorder {...ImageWithBorder.args} />)
  expect(await axe(container)).toHaveNoViolations()
})

it('renders Picture ImageRounderWithBorder', async () => {
  const { container } = render(
    <ImageRounderWithBorder {...ImageRounderWithBorder.args} />
  )
  expect(await axe(container)).toHaveNoViolations()
})
