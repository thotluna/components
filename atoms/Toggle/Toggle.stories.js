import { Toggle, styles } from '.'
import { getTemplate } from '../../helpers/storybook'

const Template = getTemplate(Toggle, styles)

export default {
  title: 'Atoms/Toggle',
  component: Toggle,
  args: {
    name: 'toggle',
    checked: false,
    onChange: () => {},
  },
  argTypes: {},
}

const args = {
  name: 'toggle',
  checked: false,
  onChange: () => {},
}

export const Default = Template.bind({})
Default.args = { ...args }

export const Active = Template.bind({})
Active.args = { ...args, isChecked: true }

export const Inactive = Template.bind({})
Inactive.args = { ...args, isChecked: false }
