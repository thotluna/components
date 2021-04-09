import React from 'react'
import ToggelDark from '.'

const Template = (args) => <ToggelDark {...args} />

export default {
  title: 'Atoms/ToggelDark',
  component: ToggelDark,
  args: {
    name: 'Dark mode',
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

export const Inactivo = Template.bind({})
Inactivo.args = { isChecked: false }
