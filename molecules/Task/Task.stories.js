import React from 'react'
import Task from './Task'
import { options } from './constants'
import { getVariusTemplate, getOptionsArgTypes } from '../../helpers/storybook'

const Template = (args) => <Task {...args} />
const ListTemplate = getVariusTemplate(Task)

export default {
  title: 'Molecules/Task',
  task: Task,
  args: {
    children: 'Consent doubt Tuckborough challenge destroying.',
    handelOnDelete: () => console.log('delete'),
    handelOnCheck: () => console.log('culminate'),
  },
  argTypes: {
    children: { control: 'text' },
    status: getOptionsArgTypes(options.status),
  },
}

export const Default = Template.bind({})

export const Status = ListTemplate.bind({})
Status.args = { items: options.status.map((status) => ({ status })) }
