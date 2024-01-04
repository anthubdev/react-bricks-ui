import React from "react";
import classNames from "classnames";
import { Repeater, types, Plain, Text } from "../../shared";
import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import { textColors } from "../../colors";

export interface FormRadiobuttonsProps {
  register?: UseFormRegister<any>;
  fieldName: string;
  label: string;
  radiobuttons: any;
  isRequired: boolean;
  requiredError?: string;
  columns: "1" | "2";
  errors: FieldErrorsImpl<{
    [x: string]: any;
  }>;
}

const FormRadiobuttons: types.Brick<FormRadiobuttonsProps> = ({
  register,
  fieldName,
  label,
  isRequired,
  requiredError,
  columns,
  errors,
}) => {
  const labelTextContent =
    typeof label === "string" ? label : Plain.serialize(label);
  return (
    <div
      className={classNames(
        "w-full py-1 col-span-2",
        columns === "1" && "sm:col-span-1"
      )}
    >
      <div
        className={classNames(
          "mb-1",
          isRequired
            ? labelTextContent === ""
              ? "block w-full"
              : "flex items-center space-x-1"
            : "block w-full"
        )}
      >
        <Text
          propName="label"
          placeholder="label..."
          renderBlock={(props) => (
            <span
              className={classNames(textColors.GRAY_600, "mb-1 text-sm")}
              {...props.attributes}
            >
              {props.children}
            </span>
          )}
        />

        {isRequired &&
          (labelTextContent === "" ? null : (
            <span className="text-red-600">*</span>
          ))}
      </div>
      <Repeater
        propName="radiobuttons"
        itemProps={{
          fieldName,
          register,
          isRequired,
          errors,
        }}
      />
      {errors[fieldName] && (
        <div className="block mt-1 text-xs text-red-500 font-bold">
          {errors[fieldName]?.type === "required" && requiredError}
        </div>
      )}
    </div>
  );
};

export default FormRadiobuttons;
