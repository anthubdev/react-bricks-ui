import { JSX, Fragment, createElement, ReactElement } from "react";
import { Element, Text as SlateText } from "slate";
import { RenderElementProps } from "slate-react";
import { types } from "../../types";

const createTextElement = (text: string) => {
  if (!text) return null;

  const lines = text.replace(/\n/g, "<|BR|>\n<|BR|>").split("<|BR|>");
  if (lines.length === 1) {
    return text;
  }

  return createElement(
    Fragment,
    null,
    lines.map(function (t, n, r) {
      return ("\n" === t && r.length === n + 1) ||
        ("\n" === t && r.length === n + 2 && "" === r[r.length - 1])
        ? createElement(Fragment, { key: n }, createElement("br", null), " ")
        : "\n" === t
        ? createElement("br", { key: n })
        : createElement(Fragment, { key: n }, t);
    })
  );
};

const renderElement = function (
  element: any,
  plugins: types.RichTextPlugin[],
  renderBlock?: (props: RenderElementProps) => JSX.Element
) {
  if (SlateText.isText(element)) {
    var textElement = createTextElement(element.text);
    return plugins
      .filter(function (e) {
        return "Mark" === e.type;
      })
      .reduce(function (e, n) {
        return (element as any)[n.name]
          ? n.renderLeaf!({
              children: e,
              leaf: undefined!,
              text: undefined!,
              attributes: {
                "data-slate-leaf": true,
              },
            })
          : e;
      }, textElement);
  }

  var list = plugins
    .filter(function (e) {
      return "List" === e.type;
    })
    .find(function (e) {
      return element.type === e.name;
    });

  if (list) {
    var i = renderChildren(element, plugins);
    return list.renderElement!({
      children: i.map(function (t, n) {
        return createElement(
          Fragment,
          { key: n },
          list!.renderItemElement!({
            children: t,
            element: undefined!,
            attributes: undefined!,
          })
        );
      }),
      element: { url: element.url } as any,
      attributes: undefined!,
    });
  }

  var children = renderChildren(element, plugins, renderBlock),
    blocks = plugins
      .filter(function (e) {
        return "Block" === e.type;
      })
      .find(function (e) {
        return element.type === e.name;
      });

  return blocks
    ? blocks.renderElement!({
        children: children,
        element: { url: element.url } as any,
        attributes: {
          "data-slate-node": "element",
          ref: undefined,
        },
      })
    : renderBlock
    ? renderBlock({
        children: children,
        element: { children: [] },
        attributes: {
          ref: null,
          "data-slate-node": "element",
        },
      })
    : children;
};

const renderChildren = (
  element: Element,
  plugins: types.RichTextPlugin[],
  renderBlock?: (props: RenderElementProps) => JSX.Element
): ReactElement[] => {
  if (!element || !element.children) {
    return [];
  }

  return element.children.map(function (t, i) {
    return createElement(
      Fragment,
      { key: i },
      renderElement(t, plugins, renderBlock)
    );
  });
};

const deserialize = function (text: string) {
  return text.split("\n").map(function (line) {
    return { type: "paragraph", children: [{ text: line }] };
  });
};

type BaseTextProps = {
  value?: string | types.TextElement[];
  renderBlock?: (props: RenderElementProps) => JSX.Element;
  placeholder?: string;
  renderPlaceholder?: (props: { children: any }) => JSX.Element;
  multiline?: boolean;
  softLineBreak?: boolean;
  plugins?: types.RichTextPlugin[];
  customFieldPlainText?: boolean;
};

type TextPropsWithPropName = {
  propName: string;
  metaFieldName?: never;
  customFieldName?: never;
} & BaseTextProps;

type TextPropsWithMetaFieldName = {
  propName?: never;
  metaFieldName?: "title" | "description" | "language";
  customFieldName?: string;
} & BaseTextProps;

type TextPropsWithCustomFieldName = {
  propName?: string;
  metaFieldName?: string;
  customFieldName?: string;
} & BaseTextProps;

/**
 * Props for Text component
 */
declare type TextProps =
  | TextPropsWithPropName
  | TextPropsWithMetaFieldName
  | TextPropsWithCustomFieldName;

export const Text = (props: TextProps) => {
  if (!props.value) {
    return null;
  }

  const renderBlock = props.renderBlock
    ? props.renderBlock
    : function (t: RenderElementProps) {
        return createElement("p", null, t.children);
      };

  if ("string" == typeof props.value) {
    const elements = deserialize(props.value);
    return createElement(
      Fragment,
      null,
      elements!.map(function (t, n) {
        return createElement(
          Fragment,
          { key: n },
          renderElement(t, props.plugins || [], renderBlock)
        );
      })
    );
  }

  return createElement(
    Fragment,
    null,
    props.value.map(function (t, n) {
      return createElement(
        Fragment,
        { key: n },
        renderElement(t, props.plugins || [], renderBlock)
      );
    })
  );
};
