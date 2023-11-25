import allBricks from "./bricks";
import ReactBricksApp from "./wrappers/ReactBricksApp";

// LAYOUT
import Header from "./wrappers/Header";
import HeaderMenuItem from "./layout/HeaderMenuItem";
import HeaderMenuSubItem from "./layout/HeaderMenuSubItem";
import Footer from "./wrappers/Footer";
import FooterColumn from "./layout/FooterColumn";
import FooterLink from "./layout/FooterLink";

// SHARED
import Badge from "./wrappers/Badge";
import BulletListItem from "./shared/bricks/BulletListItem";
import Button from "./shared/bricks/Button";

// MAIN CONTENT SECTIONS
import TextMedia from "./wrappers/TextMedia";
import TextMediaLogo from "./mainContent/TextMedia/TextMediaLogo";
import Features from "./wrappers/Features";
import FeatureItem from "./mainContent/Features/FeatureItem";
import FeatureCallout from "./wrappers/FeatureCallout";
import Cards from "./wrappers/Cards";
import Card from "./mainContent/Cards/Card";
import LinkCards from "./wrappers/LinkCards";
import LinkCard from "./mainContent/LinkCards/LinkCard";

// HERO UNITS
import HeroUnit from "./wrappers/HeroUnit";
import HeroUnit2 from "./wrappers/HeroUnit2";
import ImageCarousel from "./wrappers/ImageCarousel";
import ImageCarouselItem from "./heroSections/ImageCarousel/ImageCarouselItem";

// CALL TO ACTION
import CallToAction from "./wrappers/CallToAction";
import NewsletterHero from "./wrappers/NewsletterHero";
import NewsletterSubscribe from "./wrappers/NewsletterSubscribe";

// SEPARATORS
import HorizontalRule from "./separators/HorizontalRule/HorizontalRule";
import Spacer from "./separators/Spacer/Spacer";

// TEAM
import Team from "./wrappers/Team";
import TeamItem from "./team/Team/TeamItem";
import Team2Cols from "./wrappers/Team2Cols";
import Team2ColsItem from "./team/Team2Cols/Team2ColsItem";

// TESTIMONIAL
import Testimonial from "./wrappers/Testimonial";
import Testimonial3Cols from "./wrappers/Testimonial3Cols";
import Testimonial3ColsItem from "./testimonials/Testimonial3Cols/Testimonial3ColsItem";

// LOGO SECTIONS
import Customers from "./wrappers/Customers";
import Customer from "./logos/Customers/CustomerItem";
import LogoGrid from "./wrappers/LogoGrid";
import LogoGridItem from "./logos/LogoGrid/LogoGridItem";
import SmallLogoGrid from "./wrappers/SmallLogoGrid";
import SmallLogoGridItem from "./logos/SmallLogoGrid/SmallLogoGridItem";

// FAQ
import Faqs from "./wrappers/Faqs";
import Faqs2Cols from "./wrappers/Faq2cols";
import Faq from "./Faq/FaqItem";

// CONTACT
import Offices from "./wrappers/Offices";
import Office from "./contacts/Offices/Office";
import ContactsForm from "./wrappers/ContactsForm";
import FormBuilder from "./wrappers/FormBuilder";
import FormInput from "./contacts/FormBuilder/FormInput";
import FormTextarea from "./contacts/FormBuilder/FormTextarea";
import FormSelect from "./contacts/FormBuilder/FormSelect";
import FormCheckbox from "./contacts/FormBuilder/FormCheckbox";
import FormRadiobuttons from "./contacts/FormBuilder/FormRadiobuttons";
import FormSingleRadio from "./contacts/FormBuilder/FormSingleRadio";

// PRICING
import Pricing from "./wrappers/Pricing";
import PricingPlan from "./pricing/PricingPlan";
import PlanFeature from "./pricing/PlanFeature";

// SINGLE COLUMN
import Title from "./wrappers/Title";
import Paragraph from "./wrappers/Paragraph";
import BigImage from "./wrappers/BigImage";
import Video from "./singleColumnContent/Video/Video";
import Code from "./wrappers/Code";
import Table from "./wrappers/Table";
import TableRow from "./singleColumnContent/Table/TableRow";
import TableCell from "./singleColumnContent/Table/TableCell";
import Tweet from "./singleColumnContent/Tweet/Tweet";
import TweetLight from "./wrappers/TweetLight";

// DOCUMENTS
import Documents from "./wrappers/Documents";
import Document from "./Documents/Document";

import BlogTitle from "./wrappers/BlogTitle";

// Single bricks
export {
  Header,
  HeaderMenuItem,
  HeaderMenuSubItem,
  Footer,
  FooterColumn,
  FooterLink,
  Badge,
  Button,
  BulletListItem,
  HeroUnit,
  HeroUnit2,
  TextMedia,
  TextMediaLogo,
  Title,
  Testimonial,
  Testimonial3Cols,
  Testimonial3ColsItem,
  Customers,
  Customer,
  LogoGrid,
  LogoGridItem,
  SmallLogoGrid,
  SmallLogoGridItem,
  Faqs,
  Faq,
  Faqs2Cols,
  CallToAction,
  Offices,
  Office,
  ContactsForm,
  FeatureCallout,
  NewsletterHero,
  NewsletterSubscribe,
  Team,
  TeamItem,
  Team2Cols,
  Team2ColsItem,
  Features,
  FeatureItem,
  Cards,
  Card,
  LinkCards,
  LinkCard,
  ImageCarousel,
  ImageCarouselItem,
  Video,
  HorizontalRule,
  Spacer,
  FormBuilder,
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
  BigImage,
  Tweet,
  TweetLight,
  Pricing,
  PricingPlan,
  PlanFeature,
  Documents,
  Document,
  BlogTitle,
  ReactBricksApp,
};

export default allBricks;
