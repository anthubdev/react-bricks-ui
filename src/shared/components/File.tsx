import React from "react";
import { types } from "../../types";

type FileProps = {
  propName: string;
  allowedExtensions?: string[];
  file?: Omit<types.IFileSource, "extension" | "pagesNum">;
  renderBlock: (props: types.IFileSource | null) => React.JSX.Element;
};

export const File = (props: FileProps) => {
  return <div>File</div>;
};
