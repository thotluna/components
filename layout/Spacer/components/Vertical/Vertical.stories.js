import React from 'react'
import Vertical from '.'
import { options } from '../..'

import {
  getVariusTemplate,
  getOptionsArgTypes,
} from '../../../../helpers/storybook'

const Template = (args) => <Vertical {...args} />
const ListTemplate = getVariusTemplate(Vertical)

export default {
  title: 'Layout/Spacer/Vertical',
  component: Vertical,
  args: {
    height: 100,
    maxHeight: 100,
    isPlayground: true,
  },
  argTypes: {
    size: getOptionsArgTypes(options.sizes),
    height: { control: 'number' },
    maxHeight: { control: 'number' },
    isPlayground: { control: 'boolean' },
  },
  parameters: { __sb: { fd: 'row' } },
}

export const Default = Template.bind({})

export const Sizes = ListTemplate.bind({})
Sizes.args = { items: options.sizes.map((size) => ({ size })) }
