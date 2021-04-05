import { Buttons, options, styles } from '.'
import {
  getListTemplate,
  getTemplate,
  getOptionsArgTypes,
} from '../../helpers/storybook'

import { options as iconOptions } from '../../atoms/Icons'

const Template = getTemplate(Buttons, styles)
const ListTemplate = getListTemplate(Buttons, styles)

export default {
  title: 'Molecules/Buttons',
  component: Buttons,
  args: {
    children: 'button',
    ariaLabel: 'button',
  },
  argTypes: {
    children: { control: 'text' },
    size: getOptionsArgTypes(options.size),
    color: getOptionsArgTypes(options.color),
    icon: getOptionsArgTypes(iconOptions.type),
    iconRight: getOptionsArgTypes(iconOptions.type),
  },
}

const args = {
  children: 'button',
  ariaLabel: 'button',
}

export const Default = Template.bind({})
Default.args = { ...args }

export const Size = ListTemplate.bind({})
Size.args = { items: options.size.map((size) => ({ ...args, size })) }

export const Color = ListTemplate.bind({})
Color.args = { items: options.color.map((color) => ({ ...args, color })) }

export const LeftIcon = ListTemplate.bind({})
LeftIcon.args = {
  ...args,
  icon: 'check',
  items: options.color.map((color) => ({ color })),
}

export const OnlyIcon = ListTemplate.bind({})
OnlyIcon.args = {
  ...args,
  isOnlyIcon: true,
  size: 'mini',
  children: null,
  items: iconOptions.type.map((icon) => ({ icon })),
}
