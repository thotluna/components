import { ToggelDark, styles } from '.'
import { getTemplate } from '../../helpers/storybook'

const Template = getTemplate(ToggelDark, styles)

export default {
  title: 'Atoms/ToggelDark',
  component: ToggelDark,
  args: {
    name: 'Dark mode',
  },
}

const args = {
  name: 'Dark mode',
  onChange: () => {},
}

export const Default = Template.bind({})
Default.args = { ...args }

export const Active = Template.bind({})
Active.args = { ...args, isChecked: true }

export const Inactivo = Template.bind({})
Inactivo.args = { ...args, isChecked: false }
