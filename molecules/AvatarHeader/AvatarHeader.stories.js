import React from 'react'
import AvatarHeader, { options } from '.'
import { getVariusTemplate, getOptionsArgTypes } from '../../helpers/storybook'

const Template = (args) => <AvatarHeader {...args} />
const ListTemplate = getVariusTemplate(AvatarHeader)

export default {
  title: 'Molecules/AvatarHeader',
  component: AvatarHeader,
  args: {
    src: 'https://picsum.photos/id/1027/200/200',
    size: 'md',
    title: 'ThotLuna',
    subtitle: 'thotluna@gmail.com',
  },
  argTypes: {
    src: { control: 'text' },
    size: getOptionsArgTypes(options.size),
  },
}

const args = {
  src: 'https://picsum.photos/id/1027/200/200',
  size: 'md',
  title: 'ThotLuna',
  subtitle: 'thotluna@gmail.com',
}

export const Default = Template.bind({})
Default.args = { ...args }

export const Size = ListTemplate.bind({})
Size.args = { items: options.size.map((size) => ({ size })), ...args }
