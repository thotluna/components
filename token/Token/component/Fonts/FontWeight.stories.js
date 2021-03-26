import Token from '../..'
import { choices } from '../../..'

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../../../helpers/storybook'
import { getTokenItems } from '../../helpers'

const Template = getTemplate(Token.FontWeight)
const ListTemplate = getListTemplate(Token.FontWeight)

const optionsWeight = Object.keys(choices.fontWeight)

export default {
  title: 'Tokens/Fonts/FontWeight',
  component: Token.FontWeight,
  args: {
    children:
      "Depend noticed bones Edge disturbing flesh heard cream. Morninged facial judgment Hobbit fortress. Camp flatten buy dagger Sit. Leagues sweeter 1400 mean friend unlost Déagol trade stuffing? Smithy's jiffy merely treacherous cozy interesting ask seat Thror's.",
  },
  argTypes: {
    value: getOptionsArgTypes(optionsWeight),
  },
  parameters: { __sb: { fd: 'row' } },
}
const getItems = getTokenItems(choices.fontWeight, 'fontWeight')

export const Default = Template.bind({})
Default.args = {
  label: 'var(--font-weight-medium)',
  value: choices.fontWeight.normal,
}

export const Weight = ListTemplate.bind({})
Weight.args = { items: getItems() }
