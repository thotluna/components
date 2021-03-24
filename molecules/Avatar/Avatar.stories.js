import React from 'react'
import Avatar from './Avatar'

export default {
  title: 'Molecules/Avatar',
  component: Avatar,
}

const Template = (args) => <Avatar {...args}>Hello Component</Avatar>

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Component',
}
