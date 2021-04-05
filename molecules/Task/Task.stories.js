import { Task } from './Task'
import { options } from './constants'
import styles from './Task.module.css'

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../helpers/storybook'

const Template = getTemplate(Task, styles)
const ListTemplate = getListTemplate(Task, styles)

export default {
  title: 'Molecules/Task',
  component: Task,
  args: {
    children: 'Sir Goblin-town feels characters ruined precautions.',
  },
  argTypes: {
    type: getOptionsArgTypes(options.types),
    onCheck: { defaultValue: null },
    onDelete: { defaultValue: null },
  },
}
const args = {
  children: 'Sir Goblin-town feels characters ruined precautions.',
}

export const Default = Template.bind({})
Default.args = { ...args }

export const Long = Template.bind({})
Long.args = {
  children:
    "Swords are no more use here. Moments shiny rings Cirith nowhere garrison ax pointy endless mention trousers. Retribution Frodo's wrong? Them leaf question require spared houses sapphire Balin. Kind pouring Lothlórien ragged retribution covers lair less goings recognizes unleash. Whence Precious token hidden hire bandy make farming. Shards farmer unfriendly handle Bain gongs. Mend recall sorry oncoming roll unmade cries visitors Lobelia Sackville-Baggins was bidden. Dank rather between short doomed Mellon tomb consequence girl crescent attacking.",
}

export const Checked = Template.bind({})
Checked.args = {
  ...args,
  defaultIsChecked: true,
}

export const Pending = Template.bind({})
Pending.args = {
  ...args,
  isPending: true,
}

export const Types = ListTemplate.bind({})
Types.args = { items: options.types.map((type) => ({ ...args, type })) }

export const PendingTypes = ListTemplate.bind({})
PendingTypes.args = {
  items: options.types.map((type) => ({ ...args, type, isPending: true })),
}
