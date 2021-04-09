import React from 'react'
import Check, { options } from '.'
import { getVariusTemplate, getOptionsArgTypes } from '../../helpers/storybook'

const Template = (args) => <Check {...args} />
const ListTemplate = getVariusTemplate(Check)

export default {
  title: 'Atoms/Check',
  component: Check,
  args: {
    id: 'check#',
    name: 'check',
    defaultChecked: false,
  },
  argTypes: {
    color: getOptionsArgTypes(options.colors),
    size: getOptionsArgTypes(options.sizes),
    isChecked: {
      control: {
        type: 'boolean',
      },
    },
  },
}

export const Default = Template.bind({})

export const ActiveColor = ListTemplate.bind({})
ActiveColor.args = {
  items: options.colors.map((color) => ({
    id: `true:${color}`,
    isChecked: true,
    color,
  })),
}

export const InactiveColor = ListTemplate.bind({})
InactiveColor.args = {
  items: options.colors.map((color) => ({
    id: `false:${color}`,
    isChecked: false,
    color,
  })),
}
