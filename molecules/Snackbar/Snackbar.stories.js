import React from 'react'
import Snackbar, { options } from '.'
import { getVariusTemplate, getOptionsArgTypes } from '../../helpers/storybook'

const Template = (args) => <Snackbar {...args} />
const ListTemplate = getVariusTemplate(Snackbar)

export default {
  title: 'Molecules/Snackbar',
  component: Snackbar,
  args: {
    children: 'Consent doubt Tuckborough challenge destroying.',
  },
  argTypes: {
    children: { control: 'text' },
    type: getOptionsArgTypes(options.types),
    color: getOptionsArgTypes(options.colors),
  },
}

export const Default = Template.bind({})

export const Types = ListTemplate.bind({})
Types.args = { items: options.types.map((type) => ({ type })) }
