import React from 'react'
import ImageDragDrop from './ImageDragDrop'
import { options } from './constants'
import { getVariusTemplate, getOptionsArgTypes } from '../../helpers/storybook'

const Template = (args) => <ImageDragDrop {...args} />
const ListTemplate = getVariusTemplate(ImageDragDrop)

export default {
  title: 'Molecules/ImageDragDrop',
  component: ImageDragDrop,
  args: {
    width: 150,
    handelFile: () => {},
  },
  argTypes: {
    children: { control: 'text' },
    color: getOptionsArgTypes(options.colors),
  },
}

export const Default = Template.bind({})

export const Colors = ListTemplate.bind({})
Colors.args = { items: options.colors.map((color) => ({ color })) }
