/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Container, { options } from '.'
import { getOptionsArgTypes, getVariusTemplate } from '../../helpers/storybook'

const Template = (args) => <Container {...args} />
const VariusTemplage = getVariusTemplate(Container)

export default {
  title: 'Layout/Container',
  component: Container,
  args: {
    children: (
      <p style={{ color: '#ffffff', fontSize: '18px' }}>
        I can't remember anything Can't tell if this is true or dream Deep down
        inside I feel the scream This terrible silence stops in me Now that the
        war is through with me I'm waking up, I cannot see That there is not
        much left of me Nothing is real but pain now Hold my breath as I wish
        for death Oh please, God, wake me
      </p>
    ),
    isPlayground: true,
    type: 'full',
  },
  argTypes: {
    children: { control: 'text' },
    isPlayground: { control: 'boolean' },
    type: getOptionsArgTypes(options.types),
  },
}

export const Default = Template.bind({})

export const Types = VariusTemplage.bind({})
Types.args = { items: options.types.map((type) => ({ type })) }
