import React from "react";
import { types, Text } from "../../shared";

export interface OfficeProps {
  city?: any;
  address?: any;
}

const Office: types.Brick<OfficeProps> = ({ address, city }) => {
  return (
    <div className="py-3 pl-4 bg-gradient-to-r from-gray-50 via-transparent border-l border-gray-300 dark:from-transparent dark:border-gray-700">
      <Text
        propName="city"
        value={city}
        placeholder="City..."
        renderBlock={(props) => (
          <h3
            className="font-semibold mb-2 text-gray-900 dark:text-white"
            {...props.attributes}
          >
            {props.children}
          </h3>
        )}
      />
      <Text
        propName="address"
        value={address}
        multiline={true}
        placeholder="Address..."
        renderBlock={(props) => (
          <address
            className=" text-gray-600 leading-7 not-italic dark:text-white/60"
            {...props.attributes}
          >
            {props.children}
          </address>
        )}
      />
    </div>
  );
};

export default Office;
