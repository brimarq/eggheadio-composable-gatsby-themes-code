import React from "react";
import { ThemeProvider } from "theme-ui";
import { swiss } from "@theme-ui/presets";
import * as H from './src/components/headings'
import * as Text from './src/components/text'

const components = {
  ...H,
  ...Text
};

export default ({ element }) => (
  <ThemeProvider theme={swiss} components={components}>
    {element}
  </ThemeProvider>
);
