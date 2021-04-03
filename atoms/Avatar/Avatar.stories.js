import { Avatar, options, styles } from './index'
import {
  getListTemplate,
  getTemplate,
  getOptionsArgTypes,
} from '../../helpers/storybook'

const Template = getTemplate(Avatar, styles)
const ListTemplate = getListTemplate(Avatar, styles)

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  args: {
    src: 'https://picsum.photos/id/1027/200/200',
    size: 'md',
  },
  argTypes: {
    src: { control: 'text' },
    size: getOptionsArgTypes(options.size),
  },
  parameters: { __sb: { mh: 250, fd: 'row' } },
}

export const Default = Template.bind({})

export const Size = ListTemplate.bind({})
Size.args = { items: options.size.map((size) => ({ size })) }
