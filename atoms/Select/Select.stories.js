import React from 'react'
import Select from './index'

const Template = (args) => <Select {...args} />

export default {
  title: 'Atoms/Select',
  component: Select,
  args: {
    options: [
      { text: 'First', value: 1 },
      { text: 'Second', value: 2 },
      { text: 'Third', value: 3 },
    ],
    value: 2,
  },
  argTypes: {
    options: {
      description: '**array of shaped objects:**',
      table: {
        type: {
          summary: 'object',
          detail: "{ text: 'string', value: 'string|number'}",
        },
      },
    },
    onChange: { table: { disable: true } },
    ref: { table: { disable: true } },
  },
}

const args = {
  isInline: false,
  isHideLabel: true,
  label: 'Select',
  options: [
    { text: 'First', value: 1 },
    { text: 'Second', value: 2 },
    { text: 'Third', value: 3 },
  ],
  value: 2,
}

export const Default = Template.bind({})
Default.args = { id: '#1', ...args }

export const Value = Template.bind({})
Value.args = { id: '#2', ...args, value: 2 }

export const Inline = Template.bind({})
Inline.args = { id: '#3', ...args, isInline: true }

export const LabelShow = Template.bind({})
LabelShow.args = { id: '#4', ...args, isHideLabel: false }
