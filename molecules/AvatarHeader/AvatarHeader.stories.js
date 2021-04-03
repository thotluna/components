import { AvatarHeader, options, styles } from './index'
import {
  getListTemplate,
  getTemplate,
  getOptionsArgTypes,
} from '../../helpers/storybook'

const Template = getTemplate(AvatarHeader, styles)
const ListTemplate = getListTemplate(AvatarHeader, styles)

export default {
  title: 'Molecules/AvatarHeader',
  component: AvatarHeader,
  args: {
    src: 'https://picsum.photos/id/1027/200/200',
    size: 'md',
    title: 'ThotLuna',
    subtitle: 'thotluna@gmail.com',
  },
  argTypes: {
    src: { control: 'text' },
    size: getOptionsArgTypes(options.size),
  },
}

export const Default = Template.bind({})

export const Size = ListTemplate.bind({})
Size.args = { items: options.size.map((size) => ({ size })) }
