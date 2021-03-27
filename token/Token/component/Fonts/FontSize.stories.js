import Token from '../..'
import { choices } from '../../..'

import { getTemplate, getListTemplate } from '../../../../helpers/storybook'
import { getTokenItems } from '../../helpers'

const Template = getTemplate(Token.FontSize)
const ListTemplate = getListTemplate(Token.FontSize)

export default {
  title: 'Tokens/Fonts/FontSize',
  component: Token.FontSize,
  args: {
    children:
      "Depend noticed bones Edge disturbing flesh heard cream. Morninged facial judgment Hobbit fortress. Camp flatten buy dagger Sit. Leagues sweeter 1400 mean friend unlost Déagol trade stuffing? Smithy's jiffy merely treacherous cozy interesting ask seat Thror's.",
  },
  argTypes: {
    value: {
      control: {
        type: 'inline-radio',
        options: Object.keys(choices.fontSize).map(
          (key) => choices.fontSize[key]
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
const getItems = getTokenItems(choices.fontSize, 'fontSize')

export const Default = Template.bind({})
Default.args = {
  label: 'var(--font-size-base)',
  value: choices.fontSize.base,
}

export const Sizes = ListTemplate.bind({})
Sizes.args = { items: getItems() }
