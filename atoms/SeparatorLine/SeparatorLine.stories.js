import { SeparatorLine } from './SeparatorLine'
import styles from './SeparatorLine.module.css'
import { options } from './constants'

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../helpers/storybook'

const Template = getTemplate(SeparatorLine, styles)
const ListTemplate = getListTemplate(SeparatorLine, styles)

export default {
  title: 'Atoms/SeparatorLine',
  component: SeparatorLine,
  args: {
    title: 'separator',
    size: 'sm',
  },
  argTypes: {
    color: getOptionsArgTypes(options.colors),
    size: getOptionsArgTypes(options.sizes),
  },
}

export const Default = Template.bind({})
Default.args = { title: 'separator' }

export const Colors = ListTemplate.bind({})
Colors.args = {
  items: options.colors.map((color) => ({ title: 'separator', color })),
}

export const Size = ListTemplate.bind({})
Size.args = {
  items: options.sizes.map((size) => ({ title: 'separator', size })),
}

export const TitelColors = ListTemplate.bind({})
TitelColors.args = {
  items: options.colors.map((color) => ({
    title: 'separator',
    isShowTitle: true,
    color,
  })),
}

export const TitelSizes = ListTemplate.bind({})
TitelSizes.args = {
  items: options.sizes.map((size) => ({
    title: 'separator',
    isShowTitle: true,
    size,
  })),
}
