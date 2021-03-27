import Token from '../..'
import { choices } from '../../..'

import { getTemplate, getListTemplate } from '../../../../helpers/storybook'
import { getTokenItems } from '../../helpers'

const Template = getTemplate(Token.LetterSpacing)
const ListTemplate = getListTemplate(Token.LetterSpacing)

export default {
  title: 'Tokens/Fonts/LetterSpacing',
  component: Token.LetterSpacing,
  args: {
    children:
      "Depend noticed bones Edge disturbing flesh heard cream. Morninged facial judgment Hobbit fortress. Camp flatten buy dagger Sit. Leagues sweeter 1400 mean friend unlost Déagol trade stuffing? Smithy's jiffy merely treacherous cozy interesting ask seat Thror's.",
  },
  argTypes: {
    value: {
      control: {
        type: 'inline-radio',
        options: Object.keys(choices.letterSpacing).map(
          (key) => choices.letterSpacing[key]
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
const getItems = getTokenItems(choices.letterSpacing, 'letterSpacing')

export const Default = Template.bind({})
Default.args = {
  label: 'var(--letter-spacing-normal)',
  value: choices.letterSpacing.normal,
}

export const Sizes = ListTemplate.bind({})
Sizes.args = { items: getItems() }
