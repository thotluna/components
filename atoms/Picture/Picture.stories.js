import { Picture } from './Picture'
import styles from './Picture.module.css'
import { getTemplate } from '../../helpers/storybook'

const Template = getTemplate(Picture, styles)

const args = {
  src: 'https://picsum.photos/200/200',
  alt: 'It one image',
  width: 150,
  height: 'auto',
  isRounded: false,
  withBorder: false,
}

export default {
  title: 'Atoms/Picture',
  component: Picture,
  args,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    source: { control: 'object' },
    width: { control: 'number' },
    height: { control: 'number' },
  },
  parameters: { __sb: { mh: 300 } },
}

export const Default = Template.bind({})
Default.args = { ...args }

export const ImageDecorative = Template.bind({})
ImageDecorative.args = {
  ...args,
  alt: '',
}

export const ImageRounded = Template.bind({})
ImageRounded.args = {
  ...args,
  isRounded: true,
  width: 200,
  height: 200,
}

export const ImageWithBorder = Template.bind({})
ImageWithBorder.args = {
  ...args,
  withBorder: true,
}

export const ImageRounderWithBorder = Template.bind({})
ImageRounderWithBorder.args = {
  ...args,
  withBorder: true,
  isRounded: true,
  width: 200,
  height: 200,
}
