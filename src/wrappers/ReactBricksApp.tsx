import React, { useEffect, useState } from "react";
import { PageViewer, ReactBricks, types } from "react-bricks/frontend";
import { QueryClient, QueryClientProvider } from "react-query";
import allBricks from "..";

var queryClient = new QueryClient();

const ReactBricksApp = (props: { children: React.ReactNode }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div></div>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ReactBricks
        appId="00000000-0000-0000-0000-000000000000"
        apiKey=""
        renderLocalLink={(props) => {
          return (
            <a href={props.href} className={props.className}>
              {props.children}
            </a>
          );
        }}
        navigate={() => {}}
        appRootElement=""
        pageTypes={[
          {
            name: "page",
            pluralName: "pages",
            defaultLocked: false,
            defaultStatus: types.PageStatus.Published,
            getDefaultContent: () => [],
          },
        ]}
        bricks={[allBricks]}
      >
        {props.children}
      </ReactBricks>
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
