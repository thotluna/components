import React from 'react'
import Paragraph, { options } from '.'
import { getVariusTemplate, getOptionsArgTypes } from '../../helpers/storybook'

const Template = (args) => <Paragraph {...args} />
const ListTemplate = getVariusTemplate(Paragraph)

export default {
  title: 'Atoms/Paragraph',
  component: Paragraph,
  args: {
    children:
      "I can't remember anything Can't tell if this is true or dream deep down inside I feel the scream This terrible silence stops in me Now that the war is through with me I'm waking up, I cannot see That there is not much left of me Nothing is real but pain now",
  },
  argTypes: {
    children: { control: 'text' },
    color: getOptionsArgTypes(options.colors),
    size: getOptionsArgTypes(options.size),
  },
}

export const Default = Template.bind({})

export const Colors = ListTemplate.bind({})
Colors.args = { items: options.colors.map((color) => ({ color })) }

export const Size = ListTemplate.bind({})
Size.args = { items: options.size.map((size) => ({ size })) }

export const IsInline = Template.bind({})
IsInline.args = { isInline: true, children: 'it is paragraph inline' }
