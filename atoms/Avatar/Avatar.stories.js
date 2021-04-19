import React from 'react'
import Avatar from './Avatar'
import { options } from './constants'
import { getVariusTemplate, getOptionsArgTypes } from '../../helpers/storybook'

const Template = (args) => <Avatar {...args} />
const ListTemplate = getVariusTemplate(Avatar)

export default {
  title: 'Atoms/Avatar',
  avatar: Avatar,
  args: {
    src: 'https://i.pravatar.cc/300',
  },
  argTypes: {
    children: { control: 'text' },
    size: getOptionsArgTypes(options.sizes),
  },
}

export const Default = Template.bind({})

export const Sizes = ListTemplate.bind({})
Sizes.args = { items: options.sizes.map((size) => ({ size })) }
