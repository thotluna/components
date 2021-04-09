import React from 'react'
import Input, { options } from './index'

import { getVariusTemplate, getOptionsArgTypes } from '../../helpers/storybook'

const Template = (args) => <Input {...args} />
const ListTemplate = getVariusTemplate(Input)

export default {
  title: 'Atoms/Input',
  component: Input,
  args: {
    id: '#1',
    defaultValue: 'testing',
    placeholder: 'testing',
    label: 'Input',
    type: 'text',
  },
  argTypes: {
    type: getOptionsArgTypes(options.types),
  },
}

export const Default = Template.bind({})

export const Types = ListTemplate.bind({})
Types.args = {
  items: options.types.map((type) => ({
    id: `type-${type}`,
    type,
  })),
}

export const Inline = Template.bind({})
Inline.args = {
  id: '#4',
  isInline: true,
}

export const isNotHideLabel = Template.bind({})
isNotHideLabel.args = {
  isHideLabel: false,
  id: '#5',
}
