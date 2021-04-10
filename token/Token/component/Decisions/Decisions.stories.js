import Token from '../..'

import { decisions } from '../../..'

import {
  getTemplate,
  getListTemplate,
  getVariusTemplate,
} from '../../../../helpers/storybook'
import { getTokenItems } from '../../helpers'

const Template = getTemplate(Token.Color)
const ListTemplate = getListTemplate(Token.Color)

export default {
  title: 'Tokens/Decisions/Color',
  component: Token.Color,
  argTypes: {
    value: { control: null },
    label: { control: null },
  },
  parameters: { __sb: { mh: 250 } },
}

export const Default = Template.bind({})
Default.args = {
  label: '--color-primary',
  value: decisions.color.primary,
}

const ListTemplateBackground = getVariusTemplate(Token.Color)
const backgroundColor = [
  { label: '--color-dark-background', value: decisions.color.dark.background },
  {
    label: '--color-light-background',
    value: decisions.color.light.background,
  },
]

export const BackgroundColor = ListTemplateBackground.bind({})
BackgroundColor.args = {
  __sb: { fd: 'row' },
  items: backgroundColor,
}
BackgroundColor.parameters = {
  __sb: { fd: 'row' },
}

const getDecisionLightItem = getTokenItems(decisions.color.light, 'color')

export const FontColorWithBackgroundLight = ListTemplate.bind({})
FontColorWithBackgroundLight.args = {
  __sb: { fd: 'row', bc: decisions.color.light.background },
  items: getDecisionLightItem('font'),
}
FontColorWithBackgroundLight.parameters = {
  __sb: { fd: 'row', bc: decisions.color.light.background },
}

const getDecisionDarkItem = getTokenItems(decisions.color.dark, 'color')

export const FontColorWithBackgroundDark = ListTemplate.bind({})
FontColorWithBackgroundDark.args = {
  __sb: { fd: 'row', bc: decisions.color.dark.background },
  items: getDecisionDarkItem('font'),
}
FontColorWithBackgroundDark.parameters = {
  __sb: { fd: 'row', bc: decisions.color.dark.background },
}

export const ButtonColorWithBackgroundLight = ListTemplate.bind({})
ButtonColorWithBackgroundLight.args = {
  __sb: { fd: 'row', bc: decisions.color.light.background },
  items: getDecisionLightItem('button'),
}
ButtonColorWithBackgroundLight.parameters = {
  __sb: { fd: 'row', bc: decisions.color.light.background },
}

export const ButtonColorWithBackgroundDark = ListTemplate.bind({})
ButtonColorWithBackgroundDark.args = {
  __sb: { fd: 'row', bc: decisions.color.dark.background },
  items: getDecisionDarkItem('button'),
}
ButtonColorWithBackgroundDark.parameters = {
  __sb: { fd: 'row', bc: decisions.color.dark.background },
}
