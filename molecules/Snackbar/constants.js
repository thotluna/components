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
        colorText: 'inverted',
        background: 'secondary',
      }
    case 'success':
      return {
        icon: 'check',
        colorIcon: 'inverted',
        colorText: 'inverted',
        background: 'primary',
      }

    default:
      break
  }
}
