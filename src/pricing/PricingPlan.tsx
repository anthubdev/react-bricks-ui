import React from "react";
import classNames from "classnames";
import { RichText, Text, Link, Repeater, types } from "../shared";
import { pricingColors, PricingColorValue, textColors } from "../colors";
import PlanFeature, { PlanFeatureProps } from "./PlanFeature";

export interface PricingPlanProps {
  pricingColor?: PricingColorValue;
  withPopularTag?: boolean;
  popularTagText?: string;
  buttonLinkPath?: string;
  planName?: string;
  planDescription?: string | types.TextElement[];
  planPrice?: string;
  planConditions?: string;
  buttonText?: string;
  featuresTitle?: string;
  features?: PlanFeatureProps[];
}

const PricingPlan: types.Brick<PricingPlanProps> = ({
  pricingColor = pricingColors.CYAN.value,
  withPopularTag,
  popularTagText,
  buttonLinkPath,
  planName,
  planDescription,
  planPrice,
  planConditions,
  buttonText,
  featuresTitle,
  features,
}) => {
  return (
    <div
      className={classNames(
        "m-4 p-5 border border-t-4 rounded flex-1 min-w-[250px] max-w-[350px] text-center flex flex-col sm:w-[250px] md:w-[270px] lg:w-[300px]",
        pricingColor.mainDivClassName
      )}
    >
      <div className="h-6 self-center">
        {withPopularTag ? (
          <Text
            renderBlock={(props) => (
              <div
                className={classNames(
                  "px-2 pt-px pb-1 rounded-b text-xs font-bold uppercase text-white -mt-5",
                  pricingColor.popularTagClassName
                )}
              >
                {props.children}
              </div>
            )}
            placeholder="Tag"
            propName="popularTagText"
            value={popularTagText}
          />
        ) : null}
      </div>
      <div>
        <Text
          renderBlock={(props) => (
            <h2
              className={classNames(
                "text-2xl font-bold mb-4",
                pricingColor.planNameClassName
              )}
            >
              {props.children}
            </h2>
          )}
          placeholder="Plan name..."
          propName="planName"
          value={planName}
        />

        <RichText
          renderBlock={(props) => (
            <p className={classNames("text-lg", textColors.GRAY_600)}>
              {props.children}
            </p>
          )}
          placeholder="Description..."
          propName="planDescription"
          value={planDescription}
        />
      </div>
      <div className="text-center mb-4">
        <Text
          renderBlock={(props) => (
            <strong
              className={classNames(
                "block text-3xl font-bold pt-4 text-black",
                textColors.GRAY_900
              )}
            >
              {props.children}
            </strong>
          )}
          placeholder="Price"
          propName="planPrice"
          value={planPrice}
        />

        <Text
          renderBlock={(props) => (
            <p className={classNames("mb-2", textColors.GRAY_500)}>
              {props.children}
            </p>
          )}
          placeholder="per user / per month..."
          propName="planConditions"
          value={planConditions}
        />
      </div>
      <Link
        href={buttonLinkPath!}
        className={classNames(
          "cursor-pointer block mb-8",
          "text-center text-lg py-2 px-3 sm:px-5 rounded hover:text-white font-medium border-2 hover:shadow-lg transition duration-200",
          pricingColor.buttonClassName,
          "dark:hover:text-white"
        )}
      >
        <Text
          renderBlock={(props) => <div>{props.children}</div>}
          placeholder="Action"
          propName="buttonText"
          value={buttonText}
        />
      </Link>
      <div className="flex-1 flex flex-col ">
        <Text
          renderBlock={(props) => (
            <p
              className={classNames(
                "text-sm text-left mb-4",
                textColors.GRAY_500
              )}
            >
              {props.children}
            </p>
          )}
          placeholder="type a text"
          propName="featuresTitle"
          value={featuresTitle}
        />

        <ul className={classNames("text-lg text-left", textColors.GRAY_700)}>
          <Repeater
            propName="features"
            items={features}
            itemBuilder={(props) => <PlanFeature {...props} />}
            itemProps={{ pricingColor }}
            renderItemWrapper={(item) => (
              <li key={item.key} className="flex items-center space-x-2 mb-2">
                {item}
              </li>
            )}
          />
        </ul>
      </div>
    </div>
  );
};

export default PricingPlan;
