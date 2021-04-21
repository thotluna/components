import React from 'react'
import Task from './Task'
import { options, states } from './constants'
import { getOptionsArgTypes } from '../../helpers/storybook'

const Template = (args) => <Task {...args} />
// const ListTemplate = getVariusTemplate(Task)

export default {
  title: 'Molecules/Task',
  component: Task,
  args: {
    idTask: 1,
    description: 'Consent doubt Tuckborough challenge destroying.',
    newState: states.ACTIVE,
  },
  argTypes: {
    description: { control: 'text' },
    newState: getOptionsArgTypes(options.states),
  },
}

export const Default = Template.bind({})

// // export const Colors = ListTemplate.bind({})
// // Colors.args = { items: options.colors.map((color) => ({ color })) }
