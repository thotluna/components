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

const args = {
  id: 'check#',
  name: 'check',
  defaultChecked: false,
}

export default {
  title: 'Atoms/Check',
  component: Check,
  args,
  argTypes: {
    color: getOptionsArgTypes(options.colors),
    size: getOptionsArgTypes(options.sizes),
    isChecked: {
      control: {
        type: 'boolean',
      },
    },
  },
}

export const Default = Template.bind({})
Default.args = { ...args, id: 'check:false' }

export const ActiveColor = ListTemplate.bind({})
ActiveColor.args = {
  items: options.colors.map((color) => ({
    ...args,
    id: `true:${color}`,
    defaultChecked: true,
    color,
  })),
}

export const InactiveColor = ListTemplate.bind({})
InactiveColor.args = {
  items: options.colors.map((color) => ({
    ...args,
    id: `false:${color}`,
    color,
  })),
}
