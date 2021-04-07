import { Loading, styles } from '.'
import { getTemplate } from '../../helpers/storybook'

const Template = getTemplate(Loading, styles)

export default {
  title: 'Atoms/Loading',
  component: Loading,
}

export const Default = Template.bind({})
