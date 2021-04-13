import React from 'react'
import Title from '.'
import { options } from './constants'
import { getVariusTemplate, getOptionsArgTypes } from '../../helpers/storybook'

const Template = (args) => <Title {...args} />
const ListTemplate = getVariusTemplate(Title)

export default {
  title: 'Atoms/Title',
  component: Title,
  args: {
    children: 'It is a Title.',
  },
  argTypes: {
    children: { control: 'text' },
    color: getOptionsArgTypes(options.colors),
    size: getOptionsArgTypes(options.sizes),
  },
}

export const Default = Template.bind({})

export const Colors = ListTemplate.bind({})
Colors.args = { items: options.colors.map((color) => ({ color })) }

export const Size = ListTemplate.bind({})
Size.args = { items: options.sizes.map((size) => ({ size })) }

export const SizeColor = ListTemplate.bind({})
SizeColor.args = {
  items: options.colors
    .map((color) => {
      return options.sizes.map((size) => {
        return { color, size }
      })
    })
    .flat(),
}
