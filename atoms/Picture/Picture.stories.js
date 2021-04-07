import { Picture } from './Picture'
import styles from './Picture.module.css'
import { getTemplate } from '../../helpers/storybook'

const Template = getTemplate(Picture, styles)

const args = {
  src: 'https://loremflickr.com/300/200?lock=1',
  alt: 'It one image',
  width: '200px',
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
    sources: { control: 'object' },
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

export const Source = Template.bind({})
Source.args = {
  ...args,
  sources: [
    {
      src: 'https://loremflickr.com/150/100?lock=4',
      media: '( max-width: 375px )',
    },
    {
      src: 'https://loremflickr.com/300/200?lock=2',
      media: '( max-width: 800px )',
    },
    {
      src: 'https://loremflickr.com/600/400?lock=3',
      media: '( max-width: 10240px )',
    },
  ],
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
