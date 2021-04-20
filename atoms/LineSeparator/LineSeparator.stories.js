import React from 'react'
import LineSeparator from './LineSeparator'
import { options } from './constants'
import { getVariusTemplate, getOptionsArgTypes } from '../../helpers/storybook'

const Template = (args) => <LineSeparator {...args} />
const ListTemplate = getVariusTemplate(LineSeparator)

export default {
  title: 'Atoms/LineSeparator',
  lineSeparator: LineSeparator,
  args: {},
  argTypes: {
    color: getOptionsArgTypes(options.colors),
    size: getOptionsArgTypes(options.sizes),
  },
}

export const Default = Template.bind({})

export const Colors = ListTemplate.bind({})
Colors.args = { items: options.colors.map((color) => ({ color })) }

export const Sizes = ListTemplate.bind({})
Sizes.args = { items: options.sizes.map((size) => ({ size })) }
