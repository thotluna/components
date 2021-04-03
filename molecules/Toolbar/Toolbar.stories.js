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

export const Default = Template.bind({})

export const OnlyIcon = Template.bind({})
OnlyIcon.args = { icon: 'chevron-left', title: null }

export const OnlyTitle = Template.bind({})
OnlyTitle.args = { icon: null, title: 'Home' }
