import React from 'react'
import Input from './Input'

const Template = (args) => <Input {...args} />

export default {
  title: 'Molecules/Input',
  input: Input,
  args: {
    id: 'input',
    label: 'input',
    placeholder: 'is placeholder',
    isShowLabel: true,
    isError: false,
    errorMessage: 'this is a message error',
  },
  argTypes: {
    value: { control: 'text' },
    isError: { control: 'boolean' },
    isShowLabel: { control: 'boolean' },
    isCompact: { control: 'boolean' },
    keyEnterMessage: { control: 'text' },
  },
}

export const Default = Template.bind({})

export const DefaultCompact = Template.bind({})
DefaultCompact.args = {
  isCompact: true,
}

export const DefaultWithoutLabel = Template.bind({})
DefaultWithoutLabel.args = {
  isShowLabel: false,
}

export const DefaultError = Template.bind({})
DefaultError.args = {
  isError: true,
}

export const DefaultErrorWithoutLabel = Template.bind({})
DefaultErrorWithoutLabel.args = {
  isError: true,
  isShowLabel: false,
}

export const DefaultWithKeyEnterMessage = Template.bind({})
DefaultWithKeyEnterMessage.args = {
  keyEnterMessage: 'Enter for continued',
}
