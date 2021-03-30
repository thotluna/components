import { choices } from '../../token'
export const mapSize = (size) =>
  typeof size === 'number' ? size : choices.spacing[size]
