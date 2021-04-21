import React from 'react'
import Task from './Task'

const Template = (args) => <Task {...args} />
// const ListTemplate = getVariusTemplate(Task)

export default {
  title: 'Molecules/Task',
  component: Task,
  args: {
    idTask: 1,
    description: 'Consent doubt Tuckborough challenge destroying.',
  },
  argTypes: {
    description: { control: 'text' },
    isPending: { control: 'boolean' },
    isChecked: { control: 'boolean' },
  },
}

export const Default = Template.bind({})

export const FirstPending = Template.bind({})
FirstPending.args = { position: 0 }

export const SecondPending = Template.bind({})
SecondPending.args = { position: 1 }

export const FirstActive = Template.bind({})
FirstActive.args = { position: 0, isPending: false }

export const SecondActive = Template.bind({})
SecondActive.args = { position: 1, isPending: false }

export const FirstCulminated = Template.bind({})
FirstCulminated.args = { position: 0, isPending: false, isChecked: true }

export const SecondCulminated = Template.bind({})
SecondCulminated.args = { position: 1, isPending: false, isChecked: true }
