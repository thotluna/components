import { SubHeadings } from './SubHeadings'
import { options } from './constants'
import styles from './SubHeadings.module.css'
import {
  getListTemplate,
  getTemplate,
  getOptionsArgTypes,
} from '../../helpers/storybook'

const Template = getTemplate(SubHeadings, styles)
const ListTemplate = getListTemplate(SubHeadings, styles)

export default {
  title: 'Atoms/SubHeadings',
  component: SubHeadings,
  args: {
    children: 'Consent doubt Tuckborough challenge destroying.',
  },
  argTypes: {
    color: getOptionsArgTypes(options.colors),
    size: getOptionsArgTypes(options.sizes),
    weight: getOptionsArgTypes(options.weights),
    children: { control: 'text' },
  },
}

export const Default = Template.bind({})
Default.args = {
  children: 'Consent doubt Tuckborough challenge destroying.',
}

export const Colors = ListTemplate.bind({})
Colors.args = {
  items: options.colors.map((color) => ({ color })),
  children: 'Consent doubt Tuckborough challenge destroying.',
}

export const Sizes = ListTemplate.bind({})
Sizes.args = {
  items: options.sizes.map((size) => ({ size })),
  children: 'Consent doubt Tuckborough challenge destroying.',
}

export const Weights = ListTemplate.bind({})
Weights.args = {
  items: options.weights.map((weight) => ({ weight })),
  children: 'Consent doubt Tuckborough challenge destroying.',
}
