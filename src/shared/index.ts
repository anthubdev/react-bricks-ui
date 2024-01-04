import { useState } from "react";
import { types } from "../types";

export { File } from "./components/File";
export { Link } from "./components/Link";
export { Plain } from "./components/Plain";
export { Repeater } from "./components/Repeater";
export { Text } from "./components/Text";
export { RichText } from "./components/RichText";
export { Image } from "./components/Image";

export { types } from "../types";

export const useAdminContext = () => {
  return { isAdmin: false, previewMode: false };
};

export const useReactBricksContext = () => {
  return { isDarkColorMode: false, toggleColorMode: () => {} };
};

export const usePageValues: () => [
  types.PageValues,
  (pageData: types.PartialPage) => void
] = () => {
  return [
    {
      author: {
        firstName: "Ant",
        lastName: "Dev",
      },
    } as types.Page,
    () => {},
  ];
};

export const useVisualEdit: (
  code?: string
) => [any, (value: any) => void, boolean] = (code) => {
  const [value, setValue] = useState(code);
  return [value, setValue, true];
};
