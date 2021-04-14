import React from 'react'
import Snackbar from '.'
import { options } from './constants'
import { getVariusTemplate, getOptionsArgTypes } from '../../helpers/storybook'

const Template = (args) => <Snackbar {...args} />
const ListTemplate = getVariusTemplate(Snackbar)

export default {
  title: 'Molecules/Snackbar',
  snackbar: Snackbar,
  args: {
    children: 'Consent doubt Tuckborough challenge destroying.',
    icon: 'check',
    color: 'primary',
  },
  argTypes: {
    children: { control: 'text' },
    color: getOptionsArgTypes(options.colors),
  },
}

export const Default = Template.bind({})

export const Colors = ListTemplate.bind({})
Colors.args = { items: options.colors.map((color) => ({ color })) }
