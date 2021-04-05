import { Check } from './Check'
import styles from './Check.module.css'
import { getTemplate } from '../../helpers/storybook'

const Template = getTemplate(Check, styles)

export default {
  title: 'Molecules/Check',
  component: Check,
  args: {
    isChecked: false,
  },
  argTypes: {
    children: { control: 'text' },
  },
}

export const Default = Template.bind({})
Default.args = { isChecked: false }

export const Active = Template.bind({})
Active.args = { isChecked: true }
