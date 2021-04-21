import React from 'react'
import Checkbox from './Checkbox'

const Template = (args) => <Checkbox {...args} />

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  args: {
    id: 'check',
    ariaLabel: 'check',
    isChecked: false,
    onChecked: (checked) => console.log(checked),
  },
  argTypes: {
    isChecked: { control: 'boolean' },
  },
}

export const Default = Template.bind({})

export const Checked = Template.bind({})
Checked.args = { isChecked: true }
