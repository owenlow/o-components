import React from "react";
import {Meta} from "@storybook/react/types-6-0";
import Button, { Props as ButtonProps } from './Button';
import {Story} from "@storybook/react";

export default {
    title: 'Components/Button',
    component: Button
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}/>;

export const Primary = Template.bind({});
Primary.args = { variant: 'primary', label: 'Click me!' }