import React from 'react'
import Icon from './Icon'
import { options } from './constants'
import { getOptionsArgTypes, getVariusTemplate } from '../../helpers/storybook'

const Template = (args) => <Icon {...args} />

const VariusTemplage = getVariusTemplate(Icon)

export default {
  title: 'Atoms/Icon',
  component: Icon,
  args: {
    color: 'sun',
    type: 'chevron-left',
    size: 'md',
    hasBorder: false,
  },
  argTypes: {
    color: getOptionsArgTypes(options.colors),
    size: getOptionsArgTypes(options.size),
    type: getOptionsArgTypes(options.type),
  },
  parameters: { __sb: { mh: 250, fd: 'row' } },
}

export const Default = Template.bind({})

export const Colors = VariusTemplage.bind({})
Colors.args = { items: options.colors.map((color) => ({ color })) }

export const Size = VariusTemplage.bind({})
Size.args = { items: options.size.map((size) => ({ size })) }

export const Type = VariusTemplage.bind({})
Type.args = { items: options.type.map((type) => ({ type })) }

export const HasBorder = VariusTemplage.bind({})
HasBorder.args = {
  hasBorder: true,
  items: options.colors.map((color) => ({ color })),
}

export const HasBorderSize = VariusTemplage.bind({})
HasBorderSize.args = {
  hasBorder: true,
  items: options.size.map((size) => ({ size })),
}
