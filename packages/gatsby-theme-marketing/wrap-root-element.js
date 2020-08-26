import React from "react";
import { ThemeProvider } from "theme-ui";
import { deep } from "@theme-ui/presets";
import * as H from './src/components/headings'
import * as Text from './src/components/text'

const components = {
  ...H,
  ...Text
};

export default ({ element }) => (
  <ThemeProvider theme={deep} components={components}>
    {element}
  </ThemeProvider>
);
