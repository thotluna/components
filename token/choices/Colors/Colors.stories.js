import React from 'react'
import ColorsBase from './colors-base'
import { choices } from '../../index'

export default {
  title: 'Choices/Colors',
  component: ColorsBase,
}

const Template = (args) => <ColorsBase {...args} />

export const Base = Template.bind({})
const baseKeys = Object.keys(choices.color.base)
Base.args = {
  list: baseKeys,
  type: 'base',
}

export const Brand = Template.bind({})
const brandKey = Object.keys(choices.color.brand)
Brand.args = {
  list: brandKey,
  type: 'brand',
}

export const Gray = Template.bind({})
const grayKey = Object.keys(choices.color.gray)
Gray.args = {
  list: grayKey,
  type: 'gray',
}

export const Red = Template.bind({})
const redKey = Object.keys(choices.color.red)
Red.args = {
  list: redKey,
  type: 'red',
}

export const Orange = Template.bind({})
const OrangeKey = Object.keys(choices.color.orange)
Orange.args = {
  list: OrangeKey,
  type: 'orange',
}

export const Yellow = Template.bind({})
const yellowKey = Object.keys(choices.color.yellow)
Yellow.args = {
  list: yellowKey,
  type: 'yellow',
}

export const green = Template.bind({})
const greenKey = Object.keys(choices.color.green)
green.args = {
  list: greenKey,
  type: 'green',
}

export const teal = Template.bind({})
const tealKey = Object.keys(choices.color.teal)
teal.args = {
  list: tealKey,
  type: 'teal',
}

export const blue = Template.bind({})
const blueKey = Object.keys(choices.color.blue)
blue.args = {
  list: blueKey,
  type: 'blue',
}

export const indigo = Template.bind({})
const indigoKey = Object.keys(choices.color.indigo)
indigo.args = {
  list: indigoKey,
  type: 'indigo',
}

export const purple = Template.bind({})
const purpleKey = Object.keys(choices.color.purple)
purple.args = {
  list: purpleKey,
  type: 'purple',
}

export const pink = Template.bind({})
const pinkKey = Object.keys(choices.color.pink)
pink.args = {
  list: pinkKey,
  type: 'pink',
}
