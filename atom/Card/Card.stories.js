import React from 'react'
import Card from './Card'

export default {
  title: 'atomic/Card',
  component: Card,
}

const Template = (args) => <Card {...args}>Hello Component</Card>

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Component',
}
