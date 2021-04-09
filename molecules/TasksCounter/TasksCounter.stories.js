import { TasksCounter, styles } from '.'
import { options } from '../../atoms/Title'
import {
  getListTemplate,
  getTemplate,
  getOptionsArgTypes,
} from '../../helpers/storybook'

const Template = getTemplate(TasksCounter, styles)
const ListTemplate = getListTemplate(TasksCounter, styles)

export default {
  title: 'Molecules/TasksCounter',
  component: TasksCounter,
  args: {
    message: 'Task resolved',
    current: 5,
    total: 10,
    color: 'primary',
  },
  argTypes: {
    message: { control: 'text' },
    color: getOptionsArgTypes(options.colors),
    current: { control: 'number' },
    total: { control: 'number' },
  },
}

export const Default = Template.bind({})

export const Colors = ListTemplate.bind({})
Colors.args = { items: options.colors.map((color) => ({ color })) }
