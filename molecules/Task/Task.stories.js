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

const args = {
  children: 'Sir Goblin-town feels characters ruined precautions.',
  onCheck: () => {},
  onDelete: () => {},
  defaultChecked: false,
}

export default {
  title: 'Molecules/Task',
  component: Task,
  args,
  argTypes: {
    type: getOptionsArgTypes(options.types),
    onCheck: { defaultValue: null },
    onDelete: { defaultValue: null },
  },
}

export const Default = Template.bind({})
Default.args = { ...args, id: 'default' }

export const Long = Template.bind({})
Long.args = {
  ...args,
  id: 'long',
  children:
    "Swords are no more use here. Moments shiny rings Cirith nowhere garrison ax pointy endless mention trousers. Retribution Frodo's wrong? Them leaf question require spared houses sapphire Balin. Kind pouring Lothlórien ragged retribution covers lair less goings recognizes unleash. Whence Precious token hidden hire bandy make farming. Shards farmer unfriendly handle Bain gongs. Mend recall sorry oncoming roll unmade cries visitors Lobelia Sackville-Baggins was bidden. Dank rather between short doomed Mellon tomb consequence girl crescent attacking.",
}

export const CheckedTasks = Template.bind({})
CheckedTasks.args = {
  ...args,
  defaultChecked: true,
  id: `checked-true`,
}

export const Pending = Template.bind({})
Pending.args = {
  ...args,
  id: `checked-Pending`,
  isPending: true,
}

export const Types = ListTemplate.bind({})
Types.args = {
  items: options.types.map((type) => ({
    ...args,
    type,
    id: `type-${type}`,
  })),
}

export const PendingTypes = ListTemplate.bind({})
PendingTypes.args = {
  items: options.types.map((type) => ({
    ...args,
    type,
    isPending: true,
    id: `pending-${type}`,
  })),
}
