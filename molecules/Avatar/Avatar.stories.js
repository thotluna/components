import React from 'react'
import Avatar from '../../molecules/Avatar'

export default {
  // TODO: revise why not change Component
  title: 'molecules/Component',
  component: Avatar,
  // TODO: remove argType o change by more appropriate
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

// TODO: delete other stories below

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
