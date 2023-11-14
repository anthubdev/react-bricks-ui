import React from "react";
import { types } from "react-bricks/frontend";

import blockNames from "../blockNames";

export interface LayoutChildrenProps {}

const LayoutChildren: types.Brick<
  LayoutChildrenProps
> = ({}: LayoutChildrenProps) => {
  return (
    <div className="flex justify-center items-center h-20 bg-slate-100 text-slate-600">
      Layout Children
    </div>
  );
};

LayoutChildren.schema = {
  name: blockNames.LayoutChildren,
  label: "Layout Children",
  category: "layout",
  tags: ["layout"],
  previewImageUrl: `/bricks-preview-images/${blockNames.LayoutChildren}.png`,
  getDefaultProps: () => ({}),
  repeaterItems: [],
  sideEditProps: [],
  stories: [],
};

export default LayoutChildren;
