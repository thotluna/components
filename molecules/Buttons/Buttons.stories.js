import React from 'react'
import Button, { options } from '.'
import { getVariusTemplate, getOptionsArgTypes } from '../../helpers/storybook'

import { options as iconOptions } from '../../atoms/Icons'

const Template = (args) => <Button {...args} />
const ListTemplate = getVariusTemplate(Button)

export default {
  title: 'Molecules/Button',
  component: Button,
  args: {
    children: 'button',
    ariaLabel: 'button',
  },
  argTypes: {
    children: { control: 'text' },
    size: getOptionsArgTypes(options.size),
    color: getOptionsArgTypes(options.color),
    icon: getOptionsArgTypes(iconOptions.type),
    iconRight: getOptionsArgTypes(iconOptions.type),
  },
  parameters: { __sb: { mh: 250 } },
}

const args = {
  children: 'button',
  ariaLabel: 'button',
}

export const Default = Template.bind({})
Default.args = { ...args }

export const Size = ListTemplate.bind({})
Size.args = { items: options.size.map((size) => ({ ...args, size })) }

export const Color = ListTemplate.bind({})
Color.args = { items: options.color.map((color) => ({ ...args, color })) }

export const LeftIcon = ListTemplate.bind({})
LeftIcon.args = {
  ...args,
  icon: 'check',
  items: options.color.map((color) => ({ color })),
}

export const RightIcon = ListTemplate.bind({})
RightIcon.args = {
  ...args,
  iconRight: 'check',
  items: options.color.map((color) => ({ color })),
}

export const OnlyIcon = ListTemplate.bind({})
OnlyIcon.args = {
  ...args,
  isOnlyIcon: true,
  size: 'mini',
  children: null,
  color: 'inverted',
  items: iconOptions.type.map((icon) => ({ icon })),
}
OnlyIcon.parameters = {
  __sb: { fd: 'row' },
}
