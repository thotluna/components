import { Select, styles } from './index'
import { getTemplate } from '../../helpers/storybook'

const Template = getTemplate(Select, styles)

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
    onChange: { defaultValue: null },
  },
}

const args = {
  options: [
    { text: 'First', value: 1 },
    { text: 'Second', value: 2 },
    { text: 'Third', value: 3 },
  ],
  value: 2,
  label: 'Select test',
}

export const Default = Template.bind({})
Default.args = { ...args, id: '#1' }

export const Value = Template.bind({})
Value.args = { ...args, value: 2, id: '#2' }

export const Inline = Template.bind({})
Inline.args = { ...args, isInline: true, id: '#3' }

export const LabelShow = Template.bind({})
LabelShow.args = { ...args, id: '#4', isHideLabel: false }
