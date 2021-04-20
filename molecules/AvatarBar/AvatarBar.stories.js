import React from 'react'
import AvatarBar from './AvatarBar'
import { options } from './constants'
import { getVariusTemplate, getOptionsArgTypes } from '../../helpers/storybook'

const Template = (args) => <AvatarBar {...args} />
const ListTemplate = getVariusTemplate(AvatarBar)

export default {
  title: 'Molecules/AvatarBar',
  avatarBar: AvatarBar,
  args: {
    user: {
      username: 'Eladio Feijoo',
      email: 'eladio.feijoo@gmail.com',
      avatar: 'https://i.pravatar.cc/300',
    },
    size: 'lg',
  },
  argTypes: {
    size: getOptionsArgTypes(options.sizes),
  },
}

export const Default = Template.bind({})

export const Size = ListTemplate.bind({})
Size.args = { items: options.sizes.map((size) => ({ size })) }
