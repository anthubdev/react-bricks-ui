import React, { CSSProperties, createElement } from "react";

type LinkProps = {
  className?: string;
  activeClassName?: string;
  href: string;
  simpleAnchor?: boolean;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  style?: CSSProperties;
  target?: string;
  rel?: string;
};

type LinkPropsReal = React.PropsWithChildren<
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
    LinkProps
>;

function omitProperties(e: any, excludedKeys: any[]) {
  var result: any = {};
  
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      excludedKeys.indexOf(r) < 0 &&
      (result[r] = e[r]);

  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var a = 0;
    for (let r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      excludedKeys.indexOf(r[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
        (result[r[a]] = e[r[a]]);
  }

  return result;
}

export const Link = (props: LinkPropsReal) => {
  var href = props.href,
    children = props.children,
    target = props.target,
    className = props.className,
    activeClassName = props.activeClassName,
    simpleAnchor = props.simpleAnchor,
    otherProps = omitProperties(props, [
      "href",
      "children",
      "target",
      "className",
      "activeClassName",
      "simpleAnchor",
    ]),
    renderLocalLink = (props: any) => {
      const { href, target, className, children } = props;
      return createElement(
        "a",
        { href, className, target: target },
        children
      );
    };

  return /^\/(?!\/)/.test(href)
    ? !renderLocalLink || simpleAnchor
      ? createElement(
          "a",
          { href, ...{ target: target, className: className }, ...otherProps },
          children
        )
      : renderLocalLink({
          ...{
            href: href,
            target: target,
            children: children,
            className: className,
            activeClassName: activeClassName,
          },
          ...otherProps,
        })
    : createElement(
        "a",
        { href, ...{ target: target, className: className }, ...otherProps },
        children
      );
};
