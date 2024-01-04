import React, { createElement } from "react";
import { types } from "../../types";

export type RepeaterProps = {
  propName: string;
  items?: any[];
  itemProps?: types.Props;
  itemBuilder?: (props: types.Props) => React.ReactElement;
  renderWrapper?: (items: React.ReactElement) => React.ReactElement;
  renderItemWrapper?: (
    item: React.ReactElement,
    index: number,
    itemsCount: number
  ) => React.ReactElement;
};

export const Repeater = (props: RepeaterProps) => {
  if (!props.items || props.items.length == 0) {
    return null;
  }

  var elements = createElement(
    React.Fragment,
    null,
    props.items.map((item, i) => {
      const key = "".concat(props.propName, "-", i.toString());

      var itemProps = {
        ...item,
        ...props.itemProps,
        key: key,
      };

      const itemElement = props.itemBuilder ? (
        props.itemBuilder(itemProps)
      ) : (
        <div key={key}>Repeater Item</div>
      );

      return props.renderItemWrapper
        ? props.renderItemWrapper(itemElement, i, props.items!.length)
        : itemElement;
    })
  );

  return props.renderWrapper ? props.renderWrapper(elements) : elements;
};
