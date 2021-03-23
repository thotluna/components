import React from 'react'
import Avatar from '../../molecules/Avatar'

export default {
  title: 'molecules/Component',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <Avatar {...args}>Hello Component</Avatar>

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Component',
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Component',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Component',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Component',
}
