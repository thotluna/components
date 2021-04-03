import Icon from './Icon'
import { options } from './constants'
import styles from './Icon.module.css'
import {
  getListTemplate,
  getTemplate,
  getOptionsArgTypes,
} from '../../helpers/storybook'

const Template = getTemplate(Icon, styles)
const ListTemplate = getListTemplate(Icon, styles)

export default {
  title: 'Atoms/Icon',
  component: Icon,
  args: {
    color: 'primary',
    type: 'chevron-left',
    size: 'sm',
    hasBorder: false,
  },
  argTypes: {
    color: getOptionsArgTypes(options.colors),
    size: getOptionsArgTypes(options.size),
    type: getOptionsArgTypes(options.type),
  },
  parameters: { __sb: { mh: 250, fd: 'row' } },
}

export const Default = Template.bind({})

export const Colors = ListTemplate.bind({})
Colors.args = { items: options.colors.map((color) => ({ color })) }

export const Size = ListTemplate.bind({})
Size.args = { items: options.size.map((size) => ({ size })) }

export const Type = ListTemplate.bind({})
Type.args = { items: options.type.map((type) => ({ type })) }

export const HasBorder = ListTemplate.bind({})
HasBorder.args = {
  hasBorder: true,
  items: options.colors.map((color) => ({ color })),
}
