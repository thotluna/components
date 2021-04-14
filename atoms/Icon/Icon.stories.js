import React from 'react'
import Icon, { options } from '.'
import { getVariusTemplate, getOptionsArgTypes } from '../../helpers/storybook'

const Template = (args) => <Icon {...args} />
const ListTemplate = getVariusTemplate(Icon)

export default {
  title: 'Atoms/Icon',
  icon: Icon,
  args: {
    type: 'save',
  },
  argTypes: {
    type: getOptionsArgTypes(options.types),
    color: getOptionsArgTypes(options.colors),
    size: getOptionsArgTypes(options.sizes),
  },
  parameters: {
    __sb: { fd: 'row' },
  },
}

export const Default = Template.bind({})

export const Colors = ListTemplate.bind({})
Colors.args = { items: options.colors.map((color) => ({ color })) }

export const Size = ListTemplate.bind({})
Size.args = { items: options.sizes.map((size) => ({ size })) }

export const TypeSize = ListTemplate.bind({})
TypeSize.args = {
  items: options.types
    .map((type) =>
      options.sizes.map((size) => ({
        type,
        size,
      }))
    )
    .flat(),
}

export const TypeColor = ListTemplate.bind({})
TypeColor.args = {
  items: options.types
    .map((type) =>
      options.colors.map((color) => ({
        type,
        size: 'md',
        color,
      }))
    )
    .flat(),
}
