import {centerScreen} from "../.storybook/decorators";

export default {
    title: 'Controls',
    decorators: [centerScreen]
};

export const Button = () => require('../resources/html/controls/button.html')