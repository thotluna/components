import { Toolbar, styles } from './index'
import { options as iconOptions } from '../../atoms/Icons'
import {
  // getListTemplate,
  getTemplate,
  getOptionsArgTypes,
} from '../../helpers/storybook'

const Template = getTemplate(Toolbar, styles)
// const ListTemplate = getListTemplate(Toolbar, styles)

export default {
  title: 'Molecules/Toolbar',
  component: Toolbar,
  args: {
    title: 'Login',
    icon: 'chevron-left',
  },
  argTypes: {
    title: { control: 'text' },
    icon: getOptionsArgTypes(iconOptions.type),
  },
}

const args = {
  title: 'Login',
  icon: 'chevron-left',
  label: 'back',
}

export const Default = Template.bind({})
Default.args = { ...args, label: 'back' }

export const OnlyIcon = Template.bind({})
OnlyIcon.args = { ...args, icon: 'chevron-left', title: null }

export const OnlyTitle = Template.bind({})
OnlyTitle.args = { ...args, icon: null, title: 'Home' }
