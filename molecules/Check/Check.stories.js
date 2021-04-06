import { Check } from './Check'
import styles from './Check.module.css'
import { options } from './constants'
import {
  getListTemplate,
  getOptionsArgTypes,
  getTemplate,
} from '../../helpers/storybook'

const Template = getTemplate(Check, styles)
const ListTemplate = getListTemplate(Check, styles)

export default {
  title: 'Molecules/Check',
  component: Check,
  args: {
    id: 'check#',
    name: 'check',
    isChecked: false,
  },
  argTypes: {
    children: { control: 'text' },
    color: getOptionsArgTypes(options.colors),
    size: getOptionsArgTypes(options.sizes),
  },
}

const args = {
  id: 'check#',
  name: 'check',
  isChecked: false,
}

export const Default = Template.bind({})
Default.args = { ...args, id: 'check:false', isChecked: false }

export const ActiveColor = ListTemplate.bind({})
ActiveColor.args = {
  items: options.colors.map((color) => ({
    ...args,
    id: `true:${color}`,
    isChecked: true,
    color,
  })),
}

export const InactiveColor = ListTemplate.bind({})
InactiveColor.args = {
  items: options.colors.map((color) => ({
    ...args,
    id: `false:${color}`,
    isChecked: false,
    color,
  })),
}
