import { types } from "react-bricks/frontend";

/**
 * Arguments for the renderWrapper function
 */
interface IRenderWrapperArgs {
  children: React.ReactNode;
  width?: number;
  height?: number;
}
/**
 * renderWrapper function type
 */
type RenderWrapper = (args: IRenderWrapperArgs) => React.ReactElement;

interface PlaceholderProps {
  aspectRatio?: number;
  maxWidth?: number;
  isDarkColorMode?: boolean;
  isAdmin: boolean;
}

interface SharedImageProps {
  readonly?: boolean;
  alt: string;
  noLazyLoad?: boolean;
  containerClassName?: string;
  containerStyle?: React.CSSProperties;
  imageClassName?: string;
  imageStyle?: React.CSSProperties;
  noWrapper?: boolean;
  sizes?: string;
  loading?: "lazy" | "eager";
  renderWrapper?: RenderWrapper;
  useNativeLazyLoading?: boolean;
  useWebP?: boolean;
  placeholder?: (props: PlaceholderProps) => string;
}

interface EditableImage extends SharedImageProps {
  readonly?: false;
  propName?: string;
  metaFieldName?: "image";
  customFieldName?: string;
  src?: string;
  srcSet?: string;
  placeholderSrc?: string;
  seoName?: string;
  width?: number;
  height?: number;
  aspectRatio?: number;
  maxWidth?: number;
}

interface ReadOnlyImage extends SharedImageProps {
  readonly: true;
  source: types.IImageSource;
}

export type ImageProps = EditableImage | ReadOnlyImage;
