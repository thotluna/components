import React from 'react'
import Button from '.'
import { options } from './constants'
import { options as iconOptions } from '../../atoms/Icon'
import { getVariusTemplate, getOptionsArgTypes } from '../../helpers/storybook'

const Template = (args) => <Button {...args} />
const ListTemplate = getVariusTemplate(Button)

export default {
  title: 'Molecules/Button',
  button: Button,
  args: {
    id: '#1',
    ariaLabel: 'Butron Text',
    value: 'BUTTON',
  },
  argTypes: {
    value: { control: 'text' },
    isCompact: { control: 'boolean' },
    icon: getOptionsArgTypes(iconOptions.types),
    iconRight: getOptionsArgTypes(iconOptions.types),
    color: getOptionsArgTypes(options.colors),
    onClick: { action: 'clicked' },
  },
}

export const Default = Template.bind({})

export const Colors = ListTemplate.bind({})
Colors.args = {
  items: options.colors.map((color, index) => ({ color, id: `${index}` })),
}

export const ColorsCompact = ListTemplate.bind({})
ColorsCompact.args = {
  items: options.colors.map((color, index) => ({
    color,
    id: `${index}`,
    isCompact: true,
  })),
}

export const IconOnly = ListTemplate.bind({})
IconOnly.args = {
  items: iconOptions.types
    .map((icon, index) => {
      return options.colors.map((color, i) => {
        return {
          id: `${index}-${i}`,
          icon,
          color,
          value: '',
        }
      })
    })
    .flat(),
}
IconOnly.parameters = {
  __sb: { fd: 'row' },
}

export const ColorsIcon = ListTemplate.bind({})
ColorsIcon.args = {
  items: options.colors.map((color, i) => {
    return {
      id: `ColorAndIcon-${i}`,
      icon: 'check',
      color,
    }
  }),
}
