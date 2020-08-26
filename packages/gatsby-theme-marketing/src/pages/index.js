import React, { useContext } from "react";
import { Global } from "@emotion/core";
import { MyThemeContext } from "../context";
import Header from "../components/header";
import * as H from '../components/headings'
import * as Text from '../components/text'

export default props => {
  const { theme } = useContext(MyThemeContext);
  return (
    <div>
      {/* 
       * Using the Global component here, in pages & templates controlled by the theme, is 
       * ok because it will mount/unmount with the theme page/template. As a result, it will 
       * only affect pages controlled by the theme (as opposed to those controlled by the user 
       * or another theme).
       */}
      <Global styles={{ body: { backgroundColor: theme.colors.background } }} />
      <Header />
      <H.h1>CorgiCo</H.h1>
      <Text.p>For all your Corgi needs</Text.p>
    </div>
  );
};
