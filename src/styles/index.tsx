import React from "react";
import GlobalStyle from "./base";

export {};

export default (Component: any) => (props: any) => (
  <>
    <GlobalStyle />
    <Component {...props} />
  </>
);
