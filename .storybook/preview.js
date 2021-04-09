import '../styles/minireset.min.css'
import '../styles/global.css'
import '../styles/tokens.css'

import React from 'react'
import { themes } from '@storybook/theming';


const getStyles = ({ __sb } = {}) => ({
  display: 'flex',
  flexDirection: __sb?.fd || 'column',
  maxHeight: __sb?.mh || 'auto',
  justifyContent: 'flex-start',
  alignContent: 'flex-start',
  flexWrap: 'wrap',
  height: '100%',
  gap: '10px 30px',
})

export const decorators = [
  (Story, { parameters }) => (
    <div style={getStyles(parameters)}>
      <Story />
    </div>
  ),
]

export const parameters = {

  argTypes: {
    styles: { table: { disable: true }},
    getStyles: { table: { disable: true }},
  },
  //args: { isPlayground: true  },
  actions: { argTypesRegex: '^on[A-Z].*'},
  docs: {
    theme: themes.dark,
  },

}
