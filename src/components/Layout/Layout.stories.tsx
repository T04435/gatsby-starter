import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Layout, { LayoutProps } from './Layout';

export default {
  title: 'Layout',
  component: Layout,
} as Meta;

const Template: Story<LayoutProps> = (args) => <Layout {...args} />;

export const Base = Template.bind({});
