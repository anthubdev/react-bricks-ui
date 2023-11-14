import React, { useEffect, useState } from "react";
import { PageViewer, ReactBricks, types } from "react-bricks/frontend";
import { QueryClient, QueryClientProvider } from "react-query";
import { useTheme } from "next-themes";
import allBricks from "../bricks";

var queryClient = new QueryClient();

const ReactBricksApp = (props: { children: React.ReactNode }) => {
  const [isClient, setIsClient] = useState(false);

  // Color Mode Management
  const savedColorMode =
    typeof window === "undefined" ? "" : localStorage.getItem("color-mode");
  const [colorMode, setColorMode] = useState(savedColorMode || "light");
  const { setTheme } = useTheme();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div></div>;
  }

  const toggleColorMode = () => {
    const newColorMode = colorMode === "light" ? "dark" : "light";
    setColorMode(newColorMode);
    localStorage.setItem("color-mode", newColorMode);
    setTheme(newColorMode);
  };

  const reactBricksConfig = {
    appId: "00000000-0000-0000-0000-000000000000",
    apiKey: "",
    renderLocalLink: (props: any) => {
      return (
        <a href={props.href} className={props.className}>
          {props.children}
        </a>
      );
    },
    navigate: () => {},
    appRootElement: "",
    pageTypes: [
      {
        name: "page",
        pluralName: "pages",
        defaultLocked: false,
        defaultStatus: types.PageStatus.Published,
        getDefaultContent: () => [],
      },
    ],
    bricks: [allBricks],
    isDarkColorMode: colorMode === "dark",
    toggleColorMode,
    contentClassName: `antialiased font-content ${colorMode} ${
      colorMode === "dark" ? "dark bg-gray-900" : "light bg-white"
    }`,
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ReactBricks {...reactBricksConfig}>{props.children}</ReactBricks>
    </QueryClientProvider>
  );
};

export const usePageViewer = (content: types.IContentBlock[]) => {
  const page: types.Page = {
    id: "",
    type: "",
    name: "",
    slug: "",
    meta: {},
    content: content,
    author: {
      id: "",
      email: "",
      firstName: "",
      lastName: "",
      avatarUrl: undefined,
      company: undefined,
    },
    status: types.PageStatus.Published,
    isLocked: false,
    tags: [],
    createdAt: "",
    language: "",
    translations: [],
  };

  return <PageViewer page={page}></PageViewer>;
};

export const usePageBuilder = (content: types.IContentBlock[]) => {
  const page: types.Page = {
    id: "",
    type: "",
    name: "",
    slug: "",
    meta: {},
    content: content,
    author: {
      id: "",
      email: "",
      firstName: "",
      lastName: "",
      avatarUrl: undefined,
      company: undefined,
    },
    status: types.PageStatus.Published,
    isLocked: false,
    tags: [],
    createdAt: "",
    language: "",
    translations: [],
  };

  return page;
};

export default ReactBricksApp;
