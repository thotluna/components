import React from 'react'
import { Title, options } from '.'
import { getVariusTemplate, getOptionsArgTypes } from '../../helpers/storybook'

const Template = (args) => <Title {...args} />
const ListTemplate = getVariusTemplate(Title)

export default {
  title: 'Atoms/Title',
  component: Title,
  args: {
    size: 'md',
    color: 'primary',
    children: 'Consent doubt Tuckborough challenge destroying.',
  },
  argTypes: {
    children: { control: 'text' },
    color: getOptionsArgTypes(options.colors),
    size: getOptionsArgTypes(options.sizes),
  },
}

export const Default = Template.bind({})

export const Sizes = ListTemplate.bind({})
Sizes.args = { items: options.sizes.map((size) => ({ size })) }

export const Colors = ListTemplate.bind({})
Colors.args = { items: options.colors.map((color) => ({ color })) }
