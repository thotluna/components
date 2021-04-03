import { Button, options, styles } from '.'
import { options as iconOptions } from '../../atoms/Icons'
import {
  getListTemplate,
  getTemplate,
  getOptionsArgTypes,
} from '../../helpers/storybook'

const Template = getTemplate(Button, styles)
const ListTemplate = getListTemplate(Button, styles)

export default {
  title: 'Molecules/Button',
  component: Button,
  args: {
    children: 'Button',
  },
  argTypes: {
    children: { control: 'text' },
    type: getOptionsArgTypes(options.type),
    onClick: { defaultValue: null },
    iconLeft: getOptionsArgTypes(iconOptions.type),
    iconRight: getOptionsArgTypes(iconOptions.type),
  },
}

export const Default = Template.bind({})

export const Types = ListTemplate.bind({})
Types.args = {
  items: options.type.map((type) => ({ type })),
}

export const Inline = Template.bind({})
Inline.args = { isInline: true }

export const IconOnlyLeft = Template.bind({})
IconOnlyLeft.args = {
  iconLeft: 'check',
}

export const IconOnlyRight = Template.bind({})
IconOnlyRight.args = {
  iconRight: 'trash',
}
