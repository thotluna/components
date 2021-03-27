import Token from '../..'
import { choices } from '../../..'

import { getTemplate, getListTemplate } from '../../../../helpers/storybook'
import { getTokenItems } from '../../helpers'

export default {
  title: 'Tokens/BorderWidth',
  component: Token.BorderWidth,
  args: {
    children:
      "Depend noticed bones Edge disturbing flesh heard cream. Morninged facial judgment Hobbit fortress. Camp flatten buy dagger Sit. Leagues sweeter 1400 mean friend unlost Déagol trade stuffing? Smithy's jiffy merely treacherous cozy interesting ask seat Thror's.",
  },
  argTypes: {
    value: {
      control: {
        type: 'inline-radio',
        options: Object.keys(choices.borderWidth).map(
          (key) => choices.borderWidth[key]
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

const Template = getTemplate(Token.BorderWidth)

export const Default = Template.bind({})
Default.args = {
  label: '--border-width-none',
  value: '0',
}

const getItems = getTokenItems(choices.borderWidth, 'borderWidth')
const ListTemplate = getListTemplate(Token.BorderWidth)

export const Borders = ListTemplate.bind({})
Borders.args = {
  items: getItems(),
}
