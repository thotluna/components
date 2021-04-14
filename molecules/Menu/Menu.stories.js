import React from 'react'
import Menu from '.'
import { getOptionsArgTypes, getVariusTemplate } from '../../helpers/storybook'
import { options } from './constants'

const Template = (args) => <Menu {...args} />
const ListTemplae = getVariusTemplate(Menu)

export default {
  title: 'Molecules/Menu',
  menu: Menu,
  args: {
    listLink: [
      { link: '#', name: 'Home' },
      { link: '#', name: 'Task' },
    ],
  },
  argTypes: {
    position: getOptionsArgTypes(options.position),
  },
  parameters: {
    __sb: { mh: '600', fd: 'row', jc: 'space-between' },
  },
}

export const Default = Template.bind({})

export const Active = Template.bind({})
Active.args = {
  active: true,
}

export const Posicion = ListTemplae.bind({})
Posicion.args = {
  items: options.position.map((position) => ({ position })),
}
