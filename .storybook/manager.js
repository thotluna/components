import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import myThemes from "./theme";

addons.setConfig({
  theme: myThemes,
});
