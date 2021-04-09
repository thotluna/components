import React from 'react'
import Task from './Task'
import { options } from './constants'

import { getVariusTemplate, getOptionsArgTypes } from '../../helpers/storybook'

const Template = (args) => <Task {...args} />
const ListTemplate = getVariusTemplate(Task)

export default {
  title: 'Molecules/Task',
  component: Task,
  args: {
    id: 'default',
    children: 'Sir Goblin-town feels characters ruined precautions.',
    defaultChecked: false,
    onCheck: () => {},
    onDelete: () => {},
  },
  argTypes: {
    type: getOptionsArgTypes(options.types),
    onCheck: { defaultValue: null },
    onDelete: { defaultValue: null },
  },
}

export const Default = Template.bind({})

export const Long = Template.bind({})
Long.args = {
  id: 'long',
  children:
    "Swords are no more use here. Moments shiny rings Cirith nowhere garrison ax pointy endless mention trousers. Retribution Frodo's wrong? Them leaf question require spared houses sapphire Balin. Kind pouring Lothlórien ragged retribution covers lair less goings recognizes unleash. Whence Precious token hidden hire bandy make farming. Shards farmer unfriendly handle Bain gongs. Mend recall sorry oncoming roll unmade cries visitors Lobelia Sackville-Baggins was bidden. Dank rather between short doomed Mellon tomb consequence girl crescent attacking.",
}

export const CheckedTasks = Template.bind({})
CheckedTasks.args = {
  defaultChecked: true,
  id: `checked-true`,
}

export const Pending = Template.bind({})
Pending.args = {
  id: `checked-Pending`,
  isPending: true,
}

export const Types = ListTemplate.bind({})
Types.args = {
  items: options.types.map((type) => ({
    type,
    id: `type-${type}`,
  })),
}

export const PendingTypes = ListTemplate.bind({})
PendingTypes.args = {
  items: options.types.map((type) => ({
    type,
    isPending: true,
    id: `pending-${type}`,
  })),
}
