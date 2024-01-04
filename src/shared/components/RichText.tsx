import { ReactNode, createElement } from "react";
import { RenderElementProps, RenderLeafProps } from "slate-react";
import { types } from "../../types";
import { Text } from "./Text";
import { Link } from "./Link";

const ee = function (e: any) {
  var t, n;
  return (
    null === (t = ee.prototype) || void 0 === t ? void 0 : t.adminConstructor
  )
    ? null === (n = ee.prototype) || void 0 === n
      ? void 0
      : n.adminConstructor(e)
    : {
        type: e.itemName ? "List" : "Block",
        name: e.name,
        isInline: e.isInline,
        itemName: e.itemName,
        label: e.label || e.name[0].toUpperCase() + e.name.slice(1),
        hotKey: e.hotKey,
        renderElement: e.render,
        renderItemElement: e.renderItem,
        toggle: function () {},
      };
};

const K = function (e: any) {
  var t, n;
  return (
    null === (t = K.prototype) || void 0 === t ? void 0 : t.adminConstructor
  )
    ? null === (n = K.prototype) || void 0 === n
      ? void 0
      : n.adminConstructor(e)
    : {
        type: "Mark",
        name: e.name,
        label: e.label || e.name[0].toUpperCase() + e.name.slice(1),
        hotKey: e.hotKey,
        renderLeaf: e.render,
        toggle: function () {},
      };
};

const boldPlugin = K({
  name: "bold",
  hotKey: "mod+b",
  render: function (t: { children: ReactNode[] }) {
    return createElement("strong", null, t.children);
  },
});

const italicPlugin = K({
  name: "italic",
  hotKey: "mod+i",
  render: function (t: { children: ReactNode[] }) {
    return createElement("em", null, t.children);
  },
});

const codePlugin = K({
  name: "code",
  hotKey: "mod+`",
  render: function (t: { children: ReactNode[] }) {
    return createElement(
      "code",
      {
        style: {
          margin: "0 1px",
          display: "inline-block",
          padding: "3px 6px",
          fontSize: "0.875rem",
          lineHeight: 1.25,
          maxWidth: "100%",
          fontFamily:
            'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
          borderRadius: "3px",
          backgroundColor: "#F5F7F9",
        },
      },
      t.children
    );
  },
});

const highlightPlugin = K({
  name: "highlight",
  hotKey: "mod+h",
  render: function (t: { children: ReactNode[] }) {
    return createElement(
      "mark",
      {
        style: {
          paddingLeft: 4,
          paddingRight: 4,
          borderRadius: 2,
          backgroundColor: "#ff0",
          color: "#0f0f05",
        },
      },
      t.children
    );
  },
});

const linkPlugin = {
  type: "Block",
  name: "link",
  label: "Link",
  isInline: !0,
  renderElement: function (t: RenderElementProps) {
    var n = t.attributes,
      r = t.children,
      a = t.element;
    return createElement(Link, { ...n, ...{ href: (a as any).url } }, r);
  },
  toggle: function () {},
};

const ulPlugin = ee({
  name: "ul",
  label: "Bullet list",
  itemName: "li",
  render: function (t: { children: ReactNode[] }) {
    return createElement("ul", { className: "list-disc" }, t.children);
  },
  renderItem: function (t: { children: ReactNode[] }) {
    return createElement("li", null, t.children);
  },
});

const olPlugin = ee({
  name: "ol",
  label: "Number list",
  itemName: "li",
  render: function (t: { children: ReactNode[] }) {
    return createElement("ol", { className: "list-decimal" }, t.children);
  },
  renderItem: function (t: { children: ReactNode[] }) {
    return createElement("li", null, t.children);
  },
});

const h1Plugin = ee({
  name: "h1",
  hotKey: "mod+shift+1",
  render: function (t: { children: ReactNode[] }) {
    return createElement("h1", null, t.children);
  },
});

const h2Plugin = ee({
  name: "h2",
  hotKey: "mod+shift+2",
  render: function (t: { children: ReactNode[] }) {
    return createElement("h2", null, t.children);
  },
});

const h3Plugin = ee({
  name: "h3",
  hotKey: "mod+shift+3",
  render: function (t: { children: ReactNode[] }) {
    return createElement("h3", null, t.children);
  },
});

const h4Plugin = ee({
  name: "h4",
  hotKey: "mod+shift+4",
  render: function (t: { children: ReactNode[] }) {
    return createElement("h4", null, t.children);
  },
});

const h5Plugin = ee({
  name: "h5",
  hotKey: "mod+shift+5",
  render: function (t: { children: ReactNode[] }) {
    return createElement("h5", null, t.children);
  },
});

const h6Plugin = ee({
  name: "h6",
  hotKey: "mod+shift+6",
  render: function (t: { children: ReactNode[] }) {
    return createElement("h6", null, t.children);
  },
});

const quotePlugin = ee({
  name: "quote",
  render: function (t: { children: ReactNode[] }) {
    return createElement("blockquote", null, t.children);
  },
});

const features: Record<
  types.RichTextFeatures,
  {
    newPlugin: {
      type: "List" | "Block" | "Mark";
      name: string;
      label: string;
    };
    renderLeaf?: string;
    renderElement?: string;
    renderLink?: string;
    renderItemElement?: string;
  }
> = {
  [types.RichTextFeatures.Bold]: {
    newPlugin: boldPlugin,
    renderLeaf: "renderBold",
  },
  [types.RichTextFeatures.Italic]: {
    newPlugin: italicPlugin,
    renderLeaf: "renderItalic",
  },
  [types.RichTextFeatures.Code]: {
    newPlugin: codePlugin,
    renderLeaf: "renderCode",
  },
  [types.RichTextFeatures.Highlight]: {
    newPlugin: highlightPlugin,
    renderLeaf: "renderHighlight",
  },
  [types.RichTextFeatures.Link]: {
    newPlugin: linkPlugin as any,
    renderLink: "renderLink",
  },
  [types.RichTextFeatures.UnorderedList]: {
    newPlugin: ulPlugin,
    renderElement: "renderUL",
    renderItemElement: "renderLI",
  },
  [types.RichTextFeatures.OrderedList]: {
    newPlugin: olPlugin,
    renderElement: "renderOL",
    renderItemElement: "renderLI",
  },
  [types.RichTextFeatures.Heading1]: {
    newPlugin: h1Plugin,
    renderElement: "renderH1",
  },
  [types.RichTextFeatures.Heading2]: {
    newPlugin: h2Plugin,
    renderElement: "renderH2",
  },
  [types.RichTextFeatures.Heading3]: {
    newPlugin: h3Plugin,
    renderElement: "renderH3",
  },
  [types.RichTextFeatures.Heading4]: {
    newPlugin: h4Plugin,
    renderElement: "renderH4",
  },
  [types.RichTextFeatures.Heading5]: {
    newPlugin: h5Plugin,
    renderElement: "renderH5",
  },
  [types.RichTextFeatures.Heading6]: {
    newPlugin: h6Plugin,
    renderElement: "renderH6",
  },
  [types.RichTextFeatures.Quote]: {
    newPlugin: quotePlugin,
    renderElement: "renderQuote",
  },
};

interface BaseRichTextProps {
  value?: string | types.TextElement[];
  renderBlock?: (props: RenderElementProps) => JSX.Element;
  placeholder?: string;
  renderPlaceholder?: (props: { children: any }) => JSX.Element;
  multiline?: boolean;
  softLineBreak?: boolean;
  allowedFeatures?: types.RichTextFeatures[];
  metaFieldName?: "title" | "description" | "language";
  customFieldName?: string;
  renderBold?: (props: RenderLeafProps) => JSX.Element;
  renderItalic?: (props: RenderLeafProps) => JSX.Element;
  renderHighlight?: (props: RenderLeafProps) => JSX.Element;
  renderCode?: (props: RenderLeafProps) => JSX.Element;
  renderLink?: (props: RenderLinkElementProps) => JSX.Element;
  renderUL?: (props: RenderElementProps) => JSX.Element;
  renderOL?: (props: RenderElementProps) => JSX.Element;
  renderLI?: (props: RenderElementProps) => JSX.Element;
  renderH1?: (props: RenderElementProps) => JSX.Element;
  renderH2?: (props: RenderElementProps) => JSX.Element;
  renderH3?: (props: RenderElementProps) => JSX.Element;
  renderH4?: (props: RenderElementProps) => JSX.Element;
  renderH5?: (props: RenderElementProps) => JSX.Element;
  renderH6?: (props: RenderElementProps) => JSX.Element;
  renderQuote?: (props: RenderElementProps) => JSX.Element;
}

type RichTextPropsWithPropName = {
  propName: string;
  metaFieldName?: never;
  customFieldName?: never;
  customFieldPlainText?: never;
} & BaseRichTextProps;

interface RichTextPropsWithMetaFieldName extends BaseRichTextProps {
  propName?: string;
  metaFieldName: "title" | "description" | "language";
  customFieldName?: never;
  customFieldPlainText?: never;
}

interface RichTextPropsWithCustomFieldName extends BaseRichTextProps {
  propName?: string;
  metaFieldName?: never;
  customFieldName: string;
  customFieldPlainText?: boolean;
}

/**
 * Props for renderLink render function
 */
type RenderLinkElementProps = {
  href: string;
} & RenderElementProps;

type RichTextProps =
  | RichTextPropsWithPropName
  | RichTextPropsWithMetaFieldName
  | RichTextPropsWithCustomFieldName;

export const RichText = (props: RichTextProps & Record<string, any>) => {
  if (!props.value) {
    return null;
  }

  var plugins: types.RichTextPlugin[] = [];

  if (props.allowedFeatures && props.allowedFeatures.length > 0) {
    plugins = props.allowedFeatures.map((t) => {
      var feature = features[t];

      let renderElement = feature.renderElement
        ? props[feature.renderElement]
        : null;

      if (props.renderLink && feature.renderLink) {
        renderElement = function (e: RenderElementProps) {
          return props.renderLink!({
            attributes: e.attributes,
            children: e.children,
            element: e.element,
            href: (e.element as any).url,
          });
        };
      }

      return {
        renderLeaf: feature.renderLeaf ? props[feature.renderLeaf] : null,
        renderElement: renderElement,
        renderItemElement: feature.renderItemElement
          ? props[feature.renderItemElement]
          : null,
        ...feature.newPlugin,
      };
    });
  }

  return createElement(Text, {
    propName: props.propName,
    value: props.value,
    renderBlock: props.renderBlock,
    placeholder: props.placeholder,
    plugins: plugins,
    multiline: props.multiline,
    softLineBreak: props.softLineBreak,
    renderPlaceholder: props.renderPlaceholder,
    metaFieldName: props.metaFieldName,
    customFieldName: props.customFieldName,
    customFieldPlainText: props.customFieldPlainText,
  });
};
