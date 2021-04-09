import React from 'react'
import Spacer, { options } from '.'

import { getVariusTemplate, getOptionsArgTypes } from '../../helpers/storybook'

const Template = (args) => <Spacer {...args} />
const ListTemplate = getVariusTemplate(Spacer)

export default {
  title: 'Layout/Spacer/Default',
  component: Spacer,
  args: { isPlayground: true },
  argTypes: {
    size: getOptionsArgTypes(options.sizes),
  },
  parameters: { __sb: { fd: 'row' } },
}

export const Default = Template.bind({})

export const Sizes = ListTemplate.bind({})
Sizes.args = { items: options.sizes.map((size) => ({ size })) }
