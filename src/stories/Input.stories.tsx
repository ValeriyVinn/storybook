// import React from 'react';
import { type Meta, type StoryObj } from '@storybook/react';
import  Input  from '../components/Input/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    type: { control: 'text' },
    clearable: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {
    type: 'text',
    placeholder: 'Text input',
    clearable: false,
  },
};

export const TextClearable: Story = {
  args: {
    type: 'text',
    placeholder: 'Text input',
    clearable: true,
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Password input',
    clearable: false,
  },
};

export const PasswordClearable: Story = {
  args: {
    type: 'password',
    placeholder: 'Password input',
    clearable: true,
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: 'Number input',
    clearable: true,
  },
};
