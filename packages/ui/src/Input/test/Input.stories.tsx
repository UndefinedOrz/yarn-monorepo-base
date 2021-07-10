import { IconButton } from '@material-ui/core'
import { Meta, Story } from '@storybook/react'
import React from 'react'
import { RepInput } from '../RepInput'

const Template: Story = (args: any) => <RepInput {...args} />

export default {
  title: 'Component/Input/EnInput',
  component: RepInput,
  argTypes: {
    label: {
      name: 'Label',
      control: { type: 'text' },
    },
    size: {
      name: 'Size',
      defaultValue: 'large',
      control: { type: 'inline-radio' },
      options: ['small', 'medium', 'large'],
    },
  },
} as Meta

export const Standard = Template.bind({})

Standard.args = {
  label: 'Label',
}

export const Error = Template.bind({})

Error.args = {
  label: 'Some field',
  error: true,
  helperText: 'Helper text',
}

export const Prefix = Template.bind({})
