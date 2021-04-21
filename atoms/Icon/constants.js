import React from 'react'
export const options = {
  colors: ['base', 'primary', 'error'],
  sizes: ['sm', 'md', 'lg'],
  types: [
    'alert',
    'check',
    'circle',
    'close',
    'down-chevron',
    'drag',
    'left-chevron',
    'menu',
    'plus',
    'save',
    'trash',
  ],
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
    case 'circle':
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
            <path d="M14.857 3.79a8 8 0 102.852 3.24M6.5 9.5l3" />
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
          <g
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.857 3.79a8 8 0 102.852 3.24M6.5 9.5l3 3 8-8" />
          </g>
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
    case 'down-chevron':
      return (
        <svg
          height="21"
          viewBox="0 0 21 21"
          width="21"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
        >
          <path
            d="m8.5.5-4 4-4-4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(6 8)"
          />
        </svg>
      )
    case 'trash':
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
            <path d="M5.5 4.5h10v12a2 2 0 01-2 2h-6a2 2 0 01-2-2zm5-2a2 2 0 011.995 1.85l.005.15h-4a2 2 0 012-2zM3.5 4.5h14M8.5 7.5v8M12.5 7.5v8" />
          </g>
        </svg>
      )
    case 'drag':
      return (
        <svg
          height={21}
          viewBox="0 0 21 21"
          width={21}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="currentColor" fillRule="evenodd">
            <path d="M7 5h2v2H7zM12 5h2v2h-2zM7 9h2v2H7zM12 9h2v2h-2zM7 13h2v2H7zM12 13h2v2h-2z" />
          </g>
        </svg>
      )
    case 'plus':
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
            <path d="M10 19c4.438 0 8-3.526 8-7.964C18 6.598 14.438 3 10 3c-4.438 0-8 3.598-8 8.036S5.562 19 10 19zM6 11h8M10 15.056V7z" />
          </g>
        </svg>
      )

    default:
      break
  }
}
