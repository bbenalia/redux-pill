import React from "react";

import Header from "../components/Header";
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
      <div className="container">
        <Header />
        <Main>
          <WrappedComponent {...props} />
        </Main>
        <Footer />
      </div>
    );
  }

  return WrapperComponent;
}

export default withLayout;
