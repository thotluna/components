import React from 'react'
import { Modal } from './Modal'

const Template = (args) => <Modal {...args} />

const args = {
  children: 'Consent doubt Tuckborough challenge destroying.',
}

export default {
  title: 'Molecules/Modal',
  component: Modal,
  args,
  argTypes: {
    children: { control: 'text' },
  },
}

export const Default = Template.bind({})

export const WithTitleAndFooter = Template.bind({})
WithTitleAndFooter.args = {
  title: 'Hey men!',
  withFooter: true,
}
