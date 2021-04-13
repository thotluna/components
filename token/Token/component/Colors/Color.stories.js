import Token from '../..'

import { choices, decisions } from '../../..'

import { getTemplate, getListTemplate } from '../../../../helpers/storybook'
import { getTokenItems } from '../../helpers'

const Template = getTemplate(Token.Color)
const ListTemplate = getListTemplate(Token.Color)

export default {
  title: 'Tokens/Color',
  component: Token.Color,
  argTypes: {
    value: { control: null },
    label: { control: null },
  },
  parameters: { __sb: { mh: 250 } },
}

const getItems = getTokenItems(choices.color, 'color')

export const Default = Template.bind({})
Default.args = {
  label: '--color-primary',
  value: decisions.color.primary,
}

export const Base = ListTemplate.bind({})
Base.args = { items: getItems('base') }
Base.parameters = {
  __sb: { fd: 'row' },
}

export const Brand = ListTemplate.bind({})
Brand.args = { items: getItems('brand') }
Brand.parameters = {
  __sb: { mh: 300 },
}
