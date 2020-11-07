import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Header, { HeaderProps } from './Header';

export default {
  title: 'Header',
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Base = Template.bind({});
Base.args = {
  siteTitle: 'Lorem ipsum',
};
