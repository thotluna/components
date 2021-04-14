import React from 'react'
export const options = {
  colors: ['base', 'primary', 'error'],
  sizes: ['sm', 'md', 'lg'],
  types: ['alert', 'check', 'close', 'left-chevron', 'menu', 'save'],
}

export const getIcon = (type) => {
  switch (type) {
    case 'save':
      return (
        <svg
          height={21}
          viewBox="0 0 21 21"
          width={21}
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
        >
          <g
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6.5 10.5l4 4.232 4-4.191M10.5 3.5v11M4.5 17.5h12" />
          </g>
        </svg>
      )
    case 'alert':
      return (
        <svg
          height={21}
          viewBox="0 0 21 21"
          width={21}
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
        >
          <g fill="none" fillRule="evenodd" transform="translate(1 1)">
            <path
              d="M9.5.5l9 16H.5zM9.5 10.5v-5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx={9.5} cy={13.5} fill="currentColor" r={1} />
          </g>
        </svg>
      )
    case 'check':
      return (
        <svg
          height={21}
          viewBox="0 0 21 21"
          width={21}
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
        >
          <path
            d="M5.5 11.5l3 3 8.028-8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'close':
      return (
        <svg
          height={21}
          viewBox="0 0 21 21"
          width={21}
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
        >
          <g
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7.5 7.5l6 6M13.5 7.5l-6 6" />
          </g>
        </svg>
      )
    case 'menu':
      return (
        <svg
          height={21}
          viewBox="0 0 21 21"
          width={21}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <g fill="none" fillRule="evenodd" transform="translate(2 2)">
            <path d="M8.5 9.5c.5 0 1-.5 1-1s-.5-1-1-1-.999.5-.999 1 .499 1 .999 1zm-4 0c.5 0 1-.5 1-1s-.5-1-1-1-.999.5-.999 1 .499 1 .999 1zm8 0c.5 0 1-.5 1-1s-.5-1-1-1-.999.5-.999 1 .499 1 .999 1z" />
          </g>
        </svg>
      )
    case 'left-chevron':
      return (
        <svg
          height={21}
          viewBox="0 0 21 21"
          width={21}
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
        >
          <path
            d="M11.5 14.5l-4-4 4-4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    default:
      break
  }
}
