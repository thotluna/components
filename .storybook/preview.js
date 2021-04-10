// import '../styles/minireset.min.css'
// import '../styles/global.css'
// import '../styles/tokens.css'
// import '../styles/variables.css';
import '../styles/styles.css';

import { themes } from '@storybook/theming';

import React from 'react'

const getStyles = ({ __sb } = {}) => ({
  display: 'flex',
  flexDirection: __sb?.fd || 'column',
  maxHeight: __sb?.mh || 'auto',
  justifyContent: 'flex-start',
  alignContent: 'flex-start',
  flexWrap: 'wrap',
  height: '100%',
  padding: '2em',
  gap: '10px 30px',
  background: __sb?.bc || ''
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
  actions: { argTypesRegex: '^on[A-Z].*'},
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#272631',
      },
      {
        name: 'light',
        value: '#fff',
      },
    ],
  },
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: '#282C34' },
    // Override the default light theme
    light: { ...themes.normal, appBg: '#fff' }
  },

  doc: { ...themes.dark, appBg: '#282C34' },

}


