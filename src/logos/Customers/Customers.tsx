import React from "react";
import classNames from "classnames";
import { Repeater, types } from "../../shared";
import { LayoutProps } from "../../LayoutSideProps";
import Container from "../../shared/components/Container";
import Section from "../../shared/components/Section";
import Customer from "./CustomerItem";

export interface CustomersProps extends LayoutProps {
  grayscale?: boolean;
  customers: { image: types.IImageSource }[];
}

const Customers: types.Brick<CustomersProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  grayscale,
  customers,
}) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container paddingTop={paddingTop} paddingBottom={paddingBottom}>
        <div
          className={classNames(
            "flex flex-wrap justify-center items-center -mx-4 md:-mx-5 -my-4",
            {
              "md:justify-between":
                customers.length >= 4 && customers.length <= 5,
            }
          )}
        >
          <Repeater
            propName="customers"
            items={customers}
            itemBuilder={(props) => <Customer {...props} />}
            itemProps={{ grayscale }}
          />
        </div>
      </Container>
    </Section>
  );
};

export default Customers;
