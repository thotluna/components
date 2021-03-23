import React from 'react'
import Componet from '../../atomic/Componet'

export default {
  title: 'atomic/Component',
  component: Componet,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <Componet {...args}>Hello Component</Componet>

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
