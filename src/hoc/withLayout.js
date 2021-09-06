import React from "react";

import AppHeader from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

/* eslint no-param-reassign: [2, { "props": false }] */
function withLayout(WrappedComponent) {
  WrappedComponent.displayName = `withLayout(${getDisplayName(
    WrappedComponent,
  )})`;

  function WrapperComponent({ ...props }) {
    return (
      <>
        <AppHeader />
        <Main>
          <WrappedComponent {...props} />
        </Main>
        <Footer />
      </>
    );
  }

  return WrapperComponent;
}

export default withLayout;
