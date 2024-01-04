import React__default, { JSX } from "react";
import { RenderElementProps, RenderLeafProps } from "slate-react";

export namespace types {
  /**
   * Props of a content block
   */
  export type Props = {
    [key: string]: any;
  };

  export type BaseText = {
    text?: string;
    bold?: boolean;
  };

  export type BaseElement =
    | BaseText
    | {
        type?: string;
        url?: string;
        children?: BaseElement[];
      };

  export type TextElement = BaseText | BaseElement;

  /**
   * Item of a Repeater
   */
  export interface IRepeaterItem {
    name: string;
    itemType?: string;
    itemLabel?: string;
    min?: number;
    max?: number;
    positionLabel?: string;
    getDefaultProps?: () => Props;
    items?: {
      type: string;
      label?: string;
      min?: number;
      max?: number;
      getDefaultProps?: () => Props;
    }[];
  }

  export type BrickStory<T = Props> = {
    id: string;
    name: string;
    showAsBrick?: boolean;
    previewImageUrl?: string;
    props: T;
  };

  /**
   * Interface for the Schema of a Brick
   */
  export interface IBlockType<T = Props> {
    name: string;
    label: string;
    getDefaultProps?: () => Partial<T>;
    hideFromAddMenu?: boolean;
    sideEditProps?: Array<ISideEditProp | ISideGroup>;
    repeaterItems?: IRepeaterItem[];
    newItemMenuOpen?: boolean;
    groupByRepeater?: boolean;
    mapExternalDataToProps?: (
      externalData: Props,
      brickProps?: T
    ) => Partial<T>;
    playgroundLinkUrl?: string;
    playgroundLinkLabel?: string;
    theme?: string;
    category?: string;
    tags?: string[];
    previewImageUrl?: string;
    previewIcon?: React__default.ReactElement;
    stories?: BrickStory<Partial<T>>[];
  }

  /**
   * A Brick is a type of content block
   */
  export type Brick<T = {}> = React__default.FC<T> & {};

  /**
   * A Category contains bricks
   */
  export type Category = {
    categoryName: string;
    bricks: Brick<any>[];
  };

  /**
   * A Theme contains categories and bricks
   */
  export type Theme = {
    themeName: string;
    categories: Category[];
  };

  /**
   * Image Crop interface
   */
  export interface ICrop {
    x: number;
    y: number;
    width: number;
    height: number;
  }

  /**
   * Image Transform interface
   */
  export interface ITransform {
    rotate?: number;
    flip?: {
      horizontal: boolean;
      vertical: boolean;
    };
  }

  /**
   * Image value interface
   */
  export interface IImageSource {
    src: string;
    srcSet?: string;
    type?: string;
    fallbackSrc?: string;
    fallbackSrcSet?: string;
    fallbackType?: string;
    placeholderSrc?: string;
    alt?: string;
    seoName?: string;
    width?: number;
    height?: number;
    highPriority?: boolean;
    hashId?: string;
    crop?: ICrop;
    transform?: ITransform;
  }

  /**
   * Interface for Props of a Custom sidebar component
   */
  export interface ICustomKnobProps {
    id: string;
    value: any;
    onChange: any;
    isValid: boolean;
    errorMessage?: string;
  }

  /**
   * The Author of a Page
   */
  export type Author = {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    avatarUrl?: string;
    company?: string;
  };

  /**
   * A React Bricks Page
   */
  export type Page = {
    id: string;
    type: string;
    name: string;
    slug: string;
    author: Author;
    publishedAt?: string;
  };

  /**
   * A Page with all optional fields, used for the patch
   */
  export type PartialPage = Partial<Page>;

  /**
   * The logged-in User
   */
  export type User = {
    id: string;
  };

  /**
   * Option of a select sidebar prop
   */
  export interface IOption {
    value: any;
    label: string;
  }

  /**
   * Sidebar edit Props for a Page
   */
  export interface ISideEditPropPage {
    name: string;
    label: string;
    type: SideEditPropType;
    component?: React__default.FC<ICustomKnobProps>;
    validate?: (value: any, props?: Props) => boolean | string;
    show?: (props: Props, page: Page, user: User) => boolean;
    helperText?: string;
    textareaOptions?: {
      height?: number;
    };
    imageOptions?: {
      maxWidth?: number;
      aspectRatio?: number;
    };
    rangeOptions?: {
      min?: number;
      max?: number;
      step?: number;
    };
    selectOptions?: {
      options?: IOption[];
      getOptions?: (props: Props) => IOption[] | Promise<IOption[]>;
      display: OptionsDisplay;
    };
    relationshipOptions?: {
      label?: string;
      references: string;
      multiple: boolean;
      embedValues?: boolean;
    };
  }

  /**
   * Sidebar Edit Props
   */
  export interface ISideEditProp extends ISideEditPropPage {
    shouldRefreshText?: boolean;
    shouldRefreshStyles?: boolean;
  }

  /**
   * Type of Sidebar control
   */
  export enum SideEditPropType {
    Text = "TEXT",
    Textarea = "TEXTAREA",
    Number = "NUMBER",
    Date = "DATE",
    Range = "RANGE",
    Boolean = "BOOLEAN",
    Select = "SELECT",
    Image = "IMAGE",
    Custom = "CUSTOM",
    Relationship = "RELATIONSHIP",
  }

  /**
   * How to display the options
   */
  export enum OptionsDisplay {
    Select = "SELECT",
    Radio = "RADIO",
    Color = "COLOR",
  }

  /**
   * Features for RichText: see also the new RichTextExt
   */
  export enum RichTextFeatures {
    Bold = "BOLD",
    Italic = "ITALIC",
    Code = "CODE",
    Highlight = "HIGHLIGHT",
    Link = "LINK",
    UnorderedList = "UL",
    OrderedList = "OL",
    Heading1 = "H1",
    Heading2 = "H2",
    Heading3 = "H3",
    Heading4 = "H4",
    Heading5 = "H5",
    Heading6 = "H6",
    Quote = "QUOTE",
  }

  /**
   * A collapsible Group of sidebar Props
   */
  export interface ISideGroup {
    groupName: string;
    defaultOpen?: boolean;
    show?: (props: Props) => boolean;
    props: ISideEditProp[] | ISideEditPropPage[];
  }

  /**
   * Page fields (without content)
   */
  export type PageValues = Omit<Page, "content">;

  /**
   * File value interface
   */
  export interface IFileSource {
    name: string;
    url: string;
    size: number;
    extension: string;
    pagesNum: number;
    title?: string | undefined;
    alt?: string | undefined;
    copyright?: string | undefined;
    source?: string | undefined;
  }

  /**
   * A RichTextExt Plugin
   */
  export interface RichTextPlugin {
    type: "Mark" | "Block" | "List";
    name: string;
    isInline?: boolean;
    itemName?: string;
    label: string;
    hotKey?: string;
    renderElement?: (props: RenderElementProps) => JSX.Element;
    renderItemElement?: (props: RenderElementProps) => JSX.Element;
    renderLeaf?: (props: RenderLeafProps) => JSX.Element;
    // toggle: (editor: Editor$1, plugins: RichTextPlugin[]) => void;
    // button?: {
    //   icon: React__default.ReactElement;
    //   isActive: (editor: Editor$1) => boolean;
    // };
    // enhanceEditor?: (editor: Editor$1) => Editor$1;
  }

  /**
   * Arguments for the renderWrapper function
   */
  interface IRenderWrapperArgs {
    children: React.ReactNode;
    width?: number;
    height?: number;
  }

  export type RenderWrapper = (args: IRenderWrapperArgs) => React.ReactElement;
}
