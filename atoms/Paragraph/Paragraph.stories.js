import React from 'react'
import Paragraph from './Paragraph'
import { options } from './constants'
import { getVariusTemplate, getOptionsArgTypes } from '../../helpers/storybook'

const Template = (args) => <Paragraph {...args} />
const ListTemplate = getVariusTemplate(Paragraph)

export default {
  title: 'Atoms/Paragraph',
  component: Paragraph,
  args: {
    children: 'Consent doubt Tuckborough challenge destroying.',
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
