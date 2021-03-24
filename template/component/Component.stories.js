import React from 'react'
import Componet from './Componet'

export default {
  title: 'atomic/Componet',
  component: Componet,
}

const Template = (args) => <Componet {...args}>Hello Component</Componet>

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Component',
}
