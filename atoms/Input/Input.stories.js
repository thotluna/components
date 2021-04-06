import { Input, options, styles } from './index'

import {
  getListTemplate,
  getTemplate,
  getOptionsArgTypes,
} from '../../helpers/storybook'

const Template = getTemplate(Input, styles)
const ListTemplate = getListTemplate(Input, styles)

const args = {
  defaultValue: 'testing',
  placeholder: 'testing',
  label: 'Input',
  id: 'input',
  type: 'text',
}

export default {
  title: 'Atoms/Input',
  component: Input,
  args,
  argTypes: {
    type: getOptionsArgTypes(options.types),
  },
}

export const Default = Template.bind({})
Default.args = {
  ...args,
  id: '#1',
}

export const Value = Template.bind({})
Value.args = {
  ...args,
  id: '#2',
}

export const Types = ListTemplate.bind({})
Types.args = {
  items: options.types.map((type) => ({
    ...args,
    type,
    id: `type-${type}`,
  })),
}

export const Inline = Template.bind({})
Inline.args = {
  ...args,
  isInline: true,
  id: '#4',
}

export const isNotHideLabel = Template.bind({})
isNotHideLabel.args = {
  ...args,
  isHideLabel: false,
  id: '#5',
}
