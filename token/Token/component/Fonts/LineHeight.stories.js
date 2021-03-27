import Token from '../..'
import { choices } from '../../..'

import { getTemplate, getListTemplate } from '../../../../helpers/storybook'
import { getTokenItems } from '../../helpers'

const Template = getTemplate(Token.LineHeight)
const ListTemplate = getListTemplate(Token.LineHeight)

export default {
  title: 'Tokens/Fonts/LineHeight',
  component: Token.LineHeight,
  args: {
    children:
      "Depend noticed bones Edge disturbing flesh heard cream. Morninged facial judgment Hobbit fortress. Camp flatten buy dagger Sit. Leagues sweeter 1400 mean friend unlost Déagol trade stuffing? Smithy's jiffy merely treacherous cozy interesting ask seat Thror's.",
  },
  argTypes: {
    value: {
      control: {
        type: 'inline-radio',
        options: Object.keys(choices.lineHeight).map(
          (key) => choices.lineHeight[key]
        ),
      },
    },
    isPlayground: {
      table: {
        disable: true,
      },
    },
    label: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
}
const getItems = getTokenItems(choices.lineHeight, 'lineHeight')

export const Default = Template.bind({})
Default.args = {
  label: '--line-height-base',
  value: choices.lineHeight.base,
}

export const Sizes = ListTemplate.bind({})
Sizes.args = { items: getItems() }
