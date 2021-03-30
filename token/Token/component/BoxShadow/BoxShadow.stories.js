import Token from '../..'
import { choices } from '../../..'

import { getTemplate, getListTemplate } from '../../../../helpers/storybook'
import { getTokenItems } from '../../helpers'

export default {
  title: 'Tokens/Box-Shadow',
  component: Token.BoxShadow,
  args: {
    children:
      "Depend noticed bones Edge disturbing flesh heard cream. Morninged facial judgment Hobbit fortress. Camp flatten buy dagger Sit. Leagues sweeter 1400 mean friend unlost Déagol trade stuffing? Smithy's jiffy merely treacherous cozy interesting ask seat Thror's.",
  },
  argTypes: {
    value: {
      control: {
        type: 'inline-radio',
        options: Object.keys(choices.boxShadow).map(
          (key) => choices.boxShadow[key]
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
