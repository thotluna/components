import React from 'react'
import Card, { options } from '.'
import { getVariusTemplate, getOptionsArgTypes } from '../../helpers/storybook'

const Template = (args) => <Card {...args} />
const ListTemplate = getVariusTemplate(Card)

export default {
  title: 'Atoms/Card',
  component: Card,
  args: {
    children:
      'Lacerations coaster sort comings windlance happily EIf-witch handful unbefitting? Decide rising startled Aragorn invitations midnight deserves fortunes innards. You cannot hide. I see you. There is no life in the void. Only death. Mirror Emyn dreamed!',
  },
  argTypes: {
    color: getOptionsArgTypes(options.colors),
    size: getOptionsArgTypes(options.sizes),
    children: { control: 'text' },
    onClick: { table: { disable: true } },
  },
}

export const Default = Template.bind({})

export const Clickable = Template.bind({})
Clickable.args = {
  isClickable: true,
}

export const Dragabble = Template.bind({})
Dragabble.args = {
  isDraggable: true,
}

export const Colors = ListTemplate.bind({})
Colors.args = { items: options.colors.map((color) => ({ color })) }

export const Sizes = ListTemplate.bind({})
Sizes.args = { items: options.sizes.map((size) => ({ size })) }
