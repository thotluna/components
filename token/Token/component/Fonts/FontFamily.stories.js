import Token from '../..'
import { choices } from '../../..'

import { getTemplate, getListTemplate } from '../../../../helpers/storybook'
import { getTokenItems } from '../../helpers'

export default {
  title: 'Tokens/Fonts/FontFamily',
  component: Token.FontFamily,
  args: {
    children:
      "Depend noticed bones Edge disturbing flesh heard cream. Morninged facial judgment Hobbit fortress. Camp flatten buy dagger Sit. Leagues sweeter 1400 mean friend unlost Déagol trade stuffing? Smithy's jiffy merely treacherous cozy interesting ask seat Thror's.",
  },
  argTypes: {
    value: {
      control: {
        type: 'inline-radio',
        options: Object.keys(choices.fontFamily).map(
          (key) => choices.fontFamily[key]
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

const Template = getTemplate(Token.FontFamily, {
  fontFamily: 'Open Sans',
  fontSize: '1.6rem',
})

export const Default = Template.bind({})
Default.args = {
  label: '--font-family-sans',
  value: 'Open Sans',
}

const getItems = getTokenItems(choices.fontFamily, 'fontFamily')
const ListTemplate = getListTemplate(Token.FontFamily)

export const Familys = ListTemplate.bind({})
Familys.args = {
  items: getItems(),
}
