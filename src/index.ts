import allBricks from "./bricks";

// LAYOUT
import HeaderWrapper from "./wrappers/Header";
import HeaderMenuItem from "./layout/HeaderMenuItem";
import HeaderMenuSubItem from "./layout/HeaderMenuSubItem";
import FooterWrapper from "./wrappers/Footer";
import FooterColumn from "./layout/FooterColumn";
import FooterLink from "./layout/FooterLink";

// SHARED
import BadgeWrapper from "./wrappers/Badge";
import BulletListItem from "./shared/bricks/BulletListItem";
import Button from "./shared/bricks/Button";

// MAIN CONTENT SECTIONS
import TextMediaWrapper from "./wrappers/TextMedia";
import TextMediaLogo from "./mainContent/TextMedia/TextMediaLogo";
import FeaturesWrapper from "./wrappers/Features";
import FeatureItem from "./mainContent/Features/FeatureItem";
import FeatureCalloutWrapper from "./wrappers/FeatureCallout";
import CardsWrapper from "./wrappers/Cards";
import Card from "./mainContent/Cards/Card";
import LinkCardsWrapper from "./wrappers/LinkCards";
import LinkCard from "./mainContent/LinkCards/LinkCard";

// HERO UNITS
import HeroUnitWrapper from "./wrappers/HeroUnit";
import HeroUnit2Wrapper from "./wrappers/HeroUnit2";
import ImageCarouselWrapper from "./wrappers/ImageCarousel";
import ImageCarouselItem from "./heroSections/ImageCarousel/ImageCarouselItem";

// CALL TO ACTION
import CallToActionWrapper from "./wrappers/CallToAction";
import NewsletterHeroWrapper from "./wrappers/NewsletterHero";
import NewsletterSubscribeWrapper from "./wrappers/NewsletterSubscribe";

// SEPARATORS
import HorizontalRule from "./separators/HorizontalRule/HorizontalRule";
import Spacer from "./separators/Spacer/Spacer";

// TEAM
import TeamWrapper from "./wrappers/Team";
import TeamItem from "./team/Team/TeamItem";
import Team2ColsWrapper from "./wrappers/Team2Cols";
import Team2ColsItem from "./team/Team2Cols/Team2ColsItem";

// TESTIMONIAL
import TestimonialWrapper from "./wrappers/Testimonial";
import Testimonial3ColsWrapper from "./wrappers/Testimonial3Cols";
import Testimonial3ColsItem from "./testimonials/Testimonial3Cols/Testimonial3ColsItem";

// LOGO SECTIONS
import CustomersWrapper from "./wrappers/Customers";
import Customer from "./logos/Customers/CustomerItem";
import LogoGridWrapper from "./wrappers/LogoGrid";
import LogoGridItem from "./logos/LogoGrid/LogoGridItem";
import SmallLogoGridWrapper from "./wrappers/SmallLogoGrid";
import SmallLogoGridItem from "./logos/SmallLogoGrid/SmallLogoGridItem";

// FAQ
import FaqsWrapper from "./wrappers/Faqs";
import Faqs2ColsWrapper from "./wrappers/Faq2cols";
import Faq from "./Faq/FaqItem";

// CONTACT
import OfficesWrapper from "./wrappers/Offices";
import Office from "./contacts/Offices/Office";
import ContactsFormWrapper from "./wrappers/ContactsForm";
import FormBuilderWrapper from "./wrappers/FormBuilder";
import FormInput from "./contacts/FormBuilder/FormInput";
import FormTextarea from "./contacts/FormBuilder/FormTextarea";
import FormSelect from "./contacts/FormBuilder/FormSelect";
import FormCheckbox from "./contacts/FormBuilder/FormCheckbox";
import FormRadiobuttons from "./contacts/FormBuilder/FormRadiobuttons";
import FormSingleRadio from "./contacts/FormBuilder/FormSingleRadio";

// PRICING
import PricingWrapper from "./wrappers/Pricing";
import PricingPlan from "./pricing/PricingPlan";
import PlanFeature from "./pricing/PlanFeature";

// SINGLE COLUMN
import Title from "./singleColumnContent/Title/Title";
import Paragraph from "./singleColumnContent/Paragraph/Paragraph";
import BigImageWrapper from "./wrappers/BigImage";
import Video from "./singleColumnContent/Video/Video";
import Code from "./singleColumnContent/Code/Code";
import Table from "./singleColumnContent/Table/Table";
import TableRow from "./singleColumnContent/Table/TableRow";
import TableCell from "./singleColumnContent/Table/TableCell";
import Tweet from "./singleColumnContent/Tweet/Tweet";
import TweetLight from "./singleColumnContent/Tweet/TweetLight";

// DOCUMENTS
import DocumentsWrapper from "./wrappers/Documents";
import Document from "./Documents/Document";

// Single bricks
export {
  HeaderWrapper as Header,
  HeaderMenuItem,
  HeaderMenuSubItem,
  FooterWrapper as Footer,
  FooterColumn,
  FooterLink,
  BadgeWrapper as Badge,
  Button,
  BulletListItem,
  HeroUnitWrapper as HeroUnit,
  HeroUnit2Wrapper as HeroUnit2,
  TextMediaWrapper as TextMedia,
  TextMediaLogo,
  Title,
  TestimonialWrapper as Testimonial,
  Testimonial3ColsWrapper as Testimonial3Cols,
  Testimonial3ColsItem,
  CustomersWrapper as Customers,
  Customer,
  LogoGridWrapper as LogoGrid,
  LogoGridItem,
  SmallLogoGridWrapper as SmallLogoGrid,
  SmallLogoGridItem,
  FaqsWrapper as Faqs,
  Faq,
  Faqs2ColsWrapper as Faqs2Cols,
  CallToActionWrapper as CallToAction,
  OfficesWrapper as Offices,
  Office,
  ContactsFormWrapper as ContactsForm,
  FeatureCalloutWrapper as FeatureCallout,
  NewsletterHeroWrapper as NewsletterHero,
  NewsletterSubscribeWrapper as NewsletterSubscribe,
  TeamWrapper as Team,
  TeamItem,
  Team2ColsWrapper as Team2Cols,
  Team2ColsItem,
  FeaturesWrapper as Features,
  FeatureItem,
  CardsWrapper as Cards,
  Card,
  LinkCardsWrapper as LinkCards,
  LinkCard,
  ImageCarouselWrapper as ImageCarousel,
  ImageCarouselItem,
  Video,
  HorizontalRule,
  Spacer,
  FormBuilderWrapper as FormBuilder,
  FormCheckbox,
  FormInput,
  FormSelect,
  FormRadiobuttons,
  FormSingleRadio,
  FormTextarea,
  Table,
  TableRow,
  TableCell,
  Code,
  Paragraph,
  BigImageWrapper as BigImage,
  Tweet,
  TweetLight,
  PricingWrapper as Pricing,
  PricingPlan,
  PlanFeature,
  DocumentsWrapper as Documents,
  Document,
};

export default allBricks;
