import Token from '../../..'
import { choices } from '../../../..'
import { decisions } from '../../../..'

import { getTemplate, getListTemplate } from '../../../../../helpers/storybook'
import { getTokenItems } from '../../../helpers'

export default {
  title: 'Tokens/Box-Shadow',
  component: Token.BoxShadow,
  args: {},
  argTypes: {
    value: {
      control: {
        type: 'select',
        options: Object.keys(choices.boxShadow).map(
          (key) => choices.boxShadow[key]
        ),
      },
    },
    isPlayground: { table: { disable: true } },
    label: { table: { disable: true } },
  },
}

const Template = getTemplate(Token.BoxShadow, {
  fontFamily: 'Open Sans',
  fontSize: '1.6rem',
})

export const Default = Template.bind({})
Default.args = {
  label: '--box-shadow-none',
  value: '0',
}

const getItems = getTokenItems(choices.boxShadow, 'boxShadow')
const ListTemplate = getListTemplate(Token.BoxShadow)

export const Familys = ListTemplate.bind({})
Familys.args = {
  items: getItems(),
}

const getDecisionLightItem = getTokenItems(decisions.color.light, 'color')

export const Light = ListTemplate.bind({})
Light.args = {
  __sb: { fd: 'row' },
  items: getDecisionLightItem('boxShadow'),
}

const getDecisionDarkItem = getTokenItems(decisions.color.dark, 'color')

export const Dark = ListTemplate.bind({})
Dark.args = {
  __sb: { fd: 'row' },
  items: getDecisionDarkItem('boxShadow'),
}
