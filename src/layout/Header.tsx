import React, { useState, useRef, useEffect } from "react";
import {
  Image,
  Repeater,
  types,
  Link,
  useAdminContext,
  useReactBricksContext,
} from "../shared";
import { FiMenu, FiX } from "react-icons/fi";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { LayoutProps } from "../LayoutSideProps";
import Section from "../shared/components/Section";
import useOnClickOutside from "./useClickOutside";
import Button, { ButtonProps } from "../shared/bricks/Button";
import HeaderMenuItem, { MenuItems } from "./HeaderMenuItem";

export interface HeaderProps extends LayoutProps {
  menuItems: MenuItems[];
  logo: types.IImageSource;
  buttons: ButtonProps[];
}

const Header: types.Brick<HeaderProps> = ({
  backgroundColor,
  borderBottom,
  logo,
  menuItems,
  buttons,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDarkColorMode, toggleColorMode } = useReactBricksContext();
  const [mounted, setMounted] = useState(false);
  const { isAdmin } = useAdminContext();

  // - in Admin get the current theme from `isDarkColorMode`
  // - in the frontend page get the current theme from localStorage

  const currentTheme = isAdmin
    ? isDarkColorMode
      ? "dark"
      : "light"
    : typeof window === "undefined"
    ? ""
    : localStorage.getItem("color-mode");

  useEffect(() => {
    setMounted(true);
  }, []);

  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => setMobileMenuOpen(false));

  return (
    <Section
      backgroundColor={backgroundColor}
      borderBottom={borderBottom ? "full" : "none"}
    >
      <nav className="py-5 px-5 sm:mx-[5.55555%] xl:mx-[11.1111%] flex justify-start items-center">
        <Link
          href="/"
          aria-label="home"
          className="inline-flex py-1.5 px-2 mr-6"
        >
          <Image
            propName="logo"
            source={logo}
            alt="Logo"
            maxWidth={300}
            imageClassName="block w-32 h-7 object-contain object-left"
          />
        </Link>
        <div className="hidden lg:flex items-center space-x-2">
          <Repeater
            propName="menuItems"
            items={menuItems}
            itemBuilder={(props) => <HeaderMenuItem {...props} />}
            itemProps={{ mobileRef: ref, setMobileMenuOpen }}
          />
        </div>
        <div className="hidden lg:block ml-auto">
          <Repeater
            propName="buttons"
            items={buttons}
            itemBuilder={(props) => <Button {...props} />}
            // No local link to avoid prefetching
            // of the Admin bundle in case of link
            // to Edit content
            itemProps={{ simpleAnchorLink: true }}
            renderWrapper={(item) => (
              <div
                key={item.key}
                className="flex flex-row space-x-5 items-center justify-end"
              >
                {item}
              </div>
            )}
          />
        </div>

        {/* DARK MODE BUTTON DESKTOP */}
        {mounted && (
          <button
            type="button"
            className="flex items-center justify-center w-8 h-8 mr-4 ml-auto lg:ml-8 text-gray-400 dark:text-gray-200"
            onClick={toggleColorMode}
          >
            {currentTheme === "light" ? (
              <BsMoonFill />
            ) : (
              <BsSunFill className="text-xl" />
            )}
          </button>
        )}

        <div
          ref={ref}
          className="relative lg:hidden flex items-center h-full sm:gap-x-4"
        >
          <button
            className="group p-1 w-7 h-7 flex justify-center items-center rounded-[5px] bg-gray-200 dark:bg-transparent hover:bg-sky-500/20 dark:hover:bg-sky-500/40 hover:text-sky-600 dark:hover:text-sky-500 focus:bg-sky-500/20 dark:focus:bg-sky-500/40 focus:text-sky-600 dark:focus:text-sky-500"
            onClick={() => setMobileMenuOpen((current) => !current)}
          >
            {mobileMenuOpen ? (
              <FiX className="text-gray-600 dark:text-white" size={18} />
            ) : (
              <FiMenu className="text-gray-600 dark:text-white" size={20} />
            )}
          </button>
          {mobileMenuOpen && (
            <div className="absolute top-8 right-0 w-64 bg-white p-5 border rounded-lg shadow-lg z-10">
              <Repeater
                propName="menuItems"
                items={menuItems}
                itemBuilder={(props) => <HeaderMenuItem {...props} />}
                itemProps={{
                  mobileRef: ref,
                  setMobileMenuOpen,
                }}
              />
            </div>
          )}
        </div>
      </nav>
    </Section>
  );
};

export default Header;
