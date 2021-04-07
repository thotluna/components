import { Modal } from './Modal'
import styles from './Modal.module.css'
import { getTemplate } from '../../helpers/storybook'

const Template = getTemplate(Modal, styles)

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
Default.args = { ...args }

export const WithTitleAndFooter = Template.bind({})
WithTitleAndFooter.args = {
  ...args,
  title: 'Hey men!',
  withFooter: true,
}
