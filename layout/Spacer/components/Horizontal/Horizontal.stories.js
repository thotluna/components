import React from 'react'
import Horizontal from '.'
import { options } from '../..'

import {
  getVariusTemplate,
  getOptionsArgTypes,
} from '../../../../helpers/storybook'

const Template = (args) => <Horizontal {...args} />
const ListTemplate = getVariusTemplate(Horizontal)

export default {
  title: 'Layout/Spacer/Horizontal',
  component: Horizontal,
  args: { isPlayground: true },
  argTypes: {
    size: getOptionsArgTypes(options.sizes),
    isPlayground: { control: 'boolean' },
  },
}

export const Default = Template.bind({})

export const Sizes = ListTemplate.bind({})
Sizes.args = { items: options.sizes.map((size) => ({ size })) }
