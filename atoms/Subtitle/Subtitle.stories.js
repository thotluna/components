import React from 'react'
import Subtitle from './Subtitle'
import { options } from './constants'
import { getVariusTemplate, getOptionsArgTypes } from '../../helpers/storybook'

const Template = (args) => <Subtitle {...args} />
const ListTemplate = getVariusTemplate(Subtitle)

export default {
  title: 'Atoms/Subtitle',
  subtitle: Subtitle,
  args: {
    children: 'Consent doubt Tuckborough challenge destroying.',
  },
  argTypes: {
    children: { control: 'text' },
    color: getOptionsArgTypes(options.colors),
  },
}

export const Default = Template.bind({})

export const Colors = ListTemplate.bind({})
Colors.args = { items: options.colors.map((color) => ({ color })) }

export const Sizes = ListTemplate.bind({})
Sizes.args = { items: options.sizes.map((size) => ({ size })) }
