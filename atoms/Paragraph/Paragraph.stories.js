import { Paragraph, options, styles } from '.'
import {
  getListTemplate,
  getTemplate,
  getOptionsArgTypes,
} from '../../helpers/storybook'

const Template = getTemplate(Paragraph, styles)
const ListTemplate = getListTemplate(Paragraph, styles)

export default {
  title: 'Atoms/Paragraph',
  component: Paragraph,
  args: {
    children: 'Consent doubt Tuckborough challenge destroying.',
  },
  argTypes: {
    children: { control: 'text' },
    color: getOptionsArgTypes(options.colors),
  },
}

export const Default = Template.bind({})

export const Colors = ListTemplate.bind({})
Colors.args = { items: options.colors.map((color) => ({ color })) }
