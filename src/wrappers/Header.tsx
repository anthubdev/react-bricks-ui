import React from "react";
import ReactBricksApp, { usePageBuilder } from "./ReactBricksApp";
import blockNames from "../blockNames";
import { HeaderProps } from "../layout/Header";
import { PageViewer } from "react-bricks/frontend";

const Header = (props: HeaderProps) => {
  var page = usePageBuilder([
    {
      id: "",
      type: blockNames.Header,
      props: {
        ...props,
        menuItems: props.menuItems.map((x) => {
          return { type: blockNames.HeaderMenuItem, props: x };
        }),
        buttons: props.buttons.map((x) => {
          return { type: blockNames.Button, props: x };
        }),
      },
    },
  ]);

  return (
    <ReactBricksApp>
      <PageViewer page={page} />
    </ReactBricksApp>
  );
};

export default Header;
