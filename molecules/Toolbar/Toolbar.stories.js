import React from 'react'
import Toolbar from '.'

const Template = (args) => <Toolbar {...args} />

export default {
  title: 'Molecules/Toolbar',
  toolbar: Toolbar,
  args: {
    listLink: [
      { link: '#', name: 'Home' },
      { link: '#', name: 'Task' },
    ],
    children: 'Home',
  },
  argTypes: {
    children: { control: 'text' },
  },
}

export const Default = Template.bind({})

export const DefaultWithOnBack = Template.bind({})
DefaultWithOnBack.args = {
  onBack: () => {},
}
