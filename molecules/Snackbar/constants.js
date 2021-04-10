export const options = {
  colors: ['primera', 'secondary', 'inverted'],
  types: ['alert', 'success'],
}

export const getColorSeting = (type) => {
  switch (type) {
    case 'alert':
      return {
        icon: 'trash',
        colorIcon: 'inverted',
        colorText: 'button',
        background: 'secondary',
      }
    case 'success':
      return {
        icon: 'check',
        colorIcon: 'inverted',
        colorText: 'button',
        background: 'primary',
      }

    default:
      break
  }
}
