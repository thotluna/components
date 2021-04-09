import React from 'react'
import Toolbar from './index'
import { options as iconOptions } from '../../atoms/Icons'
import { getOptionsArgTypes } from '../../helpers/storybook'

const Template = (args) => <Toolbar {...args} />

export default {
  title: 'Molecules/Toolbar',
  component: Toolbar,
  args: {
    title: 'Login',
    icon: 'chevron-left',
    label: 'back',
  },
  argTypes: {
    title: { control: 'text' },
    icon: getOptionsArgTypes(iconOptions.type),
  },
}

export const Default = Template.bind({})

export const OnlyIcon = Template.bind({})
OnlyIcon.args = { icon: 'chevron-left', title: null }

export const OnlyTitle = Template.bind({})
OnlyTitle.args = { icon: null, title: 'Home' }
