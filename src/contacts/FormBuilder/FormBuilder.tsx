import React from "react";
import classNames from "classnames";
import { Repeater, types } from "../../shared";
import { useForm } from "react-hook-form";
import { LayoutProps } from "../../LayoutSideProps";
import Container from "../../shared/components/Container";
import Section from "../../shared/components/Section";
import Button, { ButtonProps } from "../../shared/bricks/Button";

export interface FormBuilderProps extends LayoutProps {
  buttonPosition?: string;
  "form-elements"?: {
    id?: string;
    type: string;
    props: {
      fieldName: string;
      label: string;
      isRequired: boolean;
      inputType?: string;
      columns: number | string;
      requiredError?: string;
      pattern?: string;
      patternError?: string;
    };
  }[];
  "form-buttons"?: ButtonProps[];
}

const FormBuilder: types.Brick<FormBuilderProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  buttonPosition,
  "form-elements": formElements,
  "form-buttons": formButtons,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {};

  return (
    <div>
      <Section
        backgroundColor={backgroundColor}
        borderTop={borderTop}
        borderBottom={borderBottom}
      >
        <Container
          size="full"
          paddingTop={paddingTop}
          paddingBottom={paddingBottom}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-4 py-6"
          >
            <Repeater
              propName="form-elements"
              items={formElements}
              itemBuilder={(props) => {
                return <div></div>;
              }}
              itemProps={{ register, errors }}
            />
            <Repeater
              propName="form-buttons"
              items={formButtons}
              itemBuilder={(props) => <Button {...props} />}
              renderWrapper={(items) => (
                <div
                  className={classNames(
                    "w-full flex space-x-6 col-span-2",
                    buttonPosition
                  )}
                >
                  {items}
                </div>
              )}
            />
          </form>
        </Container>
      </Section>
    </div>
  );
};

export default FormBuilder;
