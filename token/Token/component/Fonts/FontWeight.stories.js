import Token from '../..'
import { choices } from '../../..'

import { getTemplate, getListTemplate } from '../../../../helpers/storybook'
import { getTokenItems } from '../../helpers'

const Template = getTemplate(Token.FontWeight, 'fontWeight')
const ListTemplate = getListTemplate(Token.FontWeight, 'fontWeight')

export default {
  title: 'Tokens/Fonts/FontWeight',
  component: Token.FontWeight,
  args: {
    children:
      "Depend noticed bones Edge disturbing flesh heard cream. Morninged facial judgment Hobbit fortress. Camp flatten buy dagger Sit. Leagues sweeter 1400 mean friend unlost Déagol trade stuffing? Smithy's jiffy merely treacherous cozy interesting ask seat Thror's.",
  },
  argTypes: {
    value: {
      control: {
        type: 'inline-radio',
        options: Object.keys(choices.fontWeight).map(
          (key) => choices.fontWeight[key]
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
const getItems = getTokenItems(choices.fontWeight, 'fontWeight')

export const Default = Template.bind({})
Default.args = {
  label: 'var(--font-weight-medium)',
  value: choices.fontWeight.normal,
}

export const Weight = ListTemplate.bind({})
Weight.args = { items: getItems() }
