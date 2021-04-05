import { Toggel, styles } from '.'
import { getTemplate } from '../../helpers/storybook'

const Template = getTemplate(Toggel, styles)

export default {
  title: 'Atoms/Toggel',
  component: Toggel,
  args: {
    name: 'Toggel',
    checked: false,
    onChange: () => {},
  },
  argTypes: {},
}

const args = {
  name: 'Toggel',
  checked: false,
  onChange: () => {},
}

export const Default = Template.bind({})
Default.args = { ...args }

export const Active = Template.bind({})
Active.args = { ...args, isChecked: true }

export const Inactive = Template.bind({})
Inactive.args = { ...args, isChecked: false }
