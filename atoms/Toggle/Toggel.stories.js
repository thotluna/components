import React from 'react'
import Toggel from '.'

const Template = (args) => <Toggel {...args} />

export default {
  title: 'Atoms/Toggel',
  component: Toggel,
  args: {
    name: 'Toggel',
  },
  argTypes: {
    onChange: {
      table: {
        disable: true,
      },
    },
  },
}

export const Default = Template.bind({})

export const Active = Template.bind({})
Active.args = { isChecked: true }

export const Inactive = Template.bind({})
Inactive.args = { isChecked: false }
