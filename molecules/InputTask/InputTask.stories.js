import React from 'react'
import InputTask from './InputTask'
import { options, status } from './constants'
import { getVariusTemplate, getOptionsArgTypes } from '../../helpers/storybook'

const Template = (args) => <InputTask {...args} />
const ListTemplate = getVariusTemplate(InputTask)

export default {
  title: 'Molecules/InputTask',
  inputTask: InputTask,
  args: {
    children: 'What are we going to do today?.',
    statusInitial: status.STATUS_STANDBY,
    handelOnCreted: (title) => {
      console.log(title)
    },
  },
  argTypes: {
    children: { control: 'text' },
    statusInitial: getOptionsArgTypes(options.status),
  },
}

export const Default = Template.bind({})

export const Status = ListTemplate.bind({})
Status.args = {
  items: options.status.map((statusInitial) => ({ statusInitial })),
}
