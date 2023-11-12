import { types } from "react-bricks/frontend";

// LAYOUT
import Header from "./layout/Header";
import HeaderWrapper from "./wrappers/Header";

import HeaderMenuItem from "./layout/HeaderMenuItem";
import HeaderMenuSubItem from "./layout/HeaderMenuSubItem";

import Footer from "./layout/Footer";
import FooterWrapper from "./wrappers/Footer";

import FooterColumn from "./layout/FooterColumn";
import FooterLink from "./layout/FooterLink";

// SHARED
import Badge from "./shared/bricks/Badge";
import BadgeWrapper from "./wrappers/Badge";

import BulletListItem from "./shared/bricks/BulletListItem";
import Button from "./shared/bricks/Button";

// MAIN CONTENT SECTIONS
import TextMedia from "./mainContent/TextMedia/TextMedia";
import TextMediaWrapper from "./wrappers/TextMedia";

import TextMediaLogo from "./mainContent/TextMedia/TextMediaLogo";

import Features from "./mainContent/Features/Features";
import FeaturesWrapper from "./wrappers/Features";

import FeatureItem from "./mainContent/Features/FeatureItem";

import FeatureCallout from "./mainContent/FeatureCallout/FeatureCallout";
import FeatureCalloutWrapper from "./wrappers/FeatureCallout";

import Cards from "./mainContent/Cards/Cards";
import CardsWrapper from "./wrappers/Cards";

import Card from "./mainContent/Cards/Card";

import LinkCards from "./mainContent/LinkCards/LinkCards";
import LinkCardsWrapper from "./wrappers/LinkCards";

import LinkCard from "./mainContent/LinkCards/LinkCard";

// HERO UNITS
import HeroUnit from "./heroSections/HeroUnit/HeroUnit";
import HeroUnitWrapper from "./wrappers/HeroUnit";

import HeroUnit2 from "./heroSections/HeroUnit2/HeroUnit2";
import HeroUnit2Wrapper from "./wrappers/HeroUnit2";

import ImageCarousel from "./heroSections/ImageCarousel/ImageCarousel";
import ImageCarouselWrapper from "./wrappers/ImageCarousel";

import ImageCarouselItem from "./heroSections/ImageCarousel/ImageCarouselItem";

// CALL TO ACTION
import CallToAction from "./cta/CallToAction/CallToAction";
import CallToActionWrapper from "./wrappers/CallToAction";

import NewsletterHero from "./cta/NewsletterHero/NewsletterHero";
import NewsletterHeroWrapper from "./wrappers/NewsletterHero";

import NewsletterSubscribe from "./cta/NewsletterSubscribe/NewsletterSubscribe";
import NewsletterSubscribeWrapper from "./wrappers/NewsletterSubscribe";

// SEPARATORS
import HorizontalRule from "./separators/HorizontalRule/HorizontalRule";
import Spacer from "./separators/Spacer/Spacer";

// TEAM
import Team from "./team/Team/Team";
import TeamWrapper from "./wrappers/Team";

import TeamItem from "./team/Team/TeamItem";

import Team2Cols from "./team/Team2Cols/Team2Cols";
import Team2ColsWrapper from "./wrappers/Team2Cols";

import Team2ColsItem from "./team/Team2Cols/Team2ColsItem";

// TESTIMONIAL
import Testimonial from "./testimonials/Testimonial/Testimonial";
import TestimonialWrapper from "./wrappers/Testimonial";

import Testimonial3Cols from "./testimonials/Testimonial3Cols/Testimonial3Cols";
import Testimonial3ColsWrapper from "./wrappers/Testimonial3Cols";

import Testimonial3ColsItem from "./testimonials/Testimonial3Cols/Testimonial3ColsItem";

// LOGO SECTIONS
import Customers from "./logos/Customers/Customers";
import CustomersWrapper from "./wrappers/Customers";

import Customer from "./logos/Customers/CustomerItem";

import LogoGrid from "./logos/LogoGrid/LogoGrid";
import LogoGridWrapper from "./wrappers/LogoGrid";

import LogoGridItem from "./logos/LogoGrid/LogoGridItem";

import SmallLogoGrid from "./logos/SmallLogoGrid/SmallLogoGrid";
import SmallLogoGridWrapper from "./wrappers/SmallLogoGrid";

import SmallLogoGridItem from "./logos/SmallLogoGrid/SmallLogoGridItem";

// FAQ
import Faqs from "./Faq/Faq";
import FaqsWrapper from "./wrappers/Faqs";

import Faqs2Cols from "./Faq/Faq2cols";
import Faqs2ColsWrapper from "./wrappers/Faq2cols";

import Faq from "./Faq/FaqItem";

// CONTACT
import Offices from "./contacts/Offices/Offices";
import OfficesWrapper from "./wrappers/Offices";

import Office from "./contacts/Offices/Office";

import ContactsForm from "./contacts/ContactsForm/ContactsForm";
import ContactsFormWrapper from "./wrappers/ContactsForm";

import FormBuilder from "./contacts/FormBuilder/FormBuilder";
import FormBuilderWrapper from "./wrappers/FormBuilder";

import FormInput from "./contacts/FormBuilder/FormInput";
import FormTextarea from "./contacts/FormBuilder/FormTextarea";
import FormSelect from "./contacts/FormBuilder/FormSelect";
import FormCheckbox from "./contacts/FormBuilder/FormCheckbox";
import FormRadiobuttons from "./contacts/FormBuilder/FormRadiobuttons";
import FormSingleRadio from "./contacts/FormBuilder/FormSingleRadio";

// PRICING
import Pricing from "./pricing/Pricing";
import PricingWrapper from "./wrappers/Pricing";

import PricingPlan from "./pricing/PricingPlan";
import PlanFeature from "./pricing/PlanFeature";

// SINGLE COLUMN
import Title from "./singleColumnContent/Title/Title";
import Paragraph from "./singleColumnContent/Paragraph/Paragraph";

import BigImage from "./singleColumnContent/BigImage/BigImage";
import BigImageWrapper from "./wrappers/BigImage";

import Video from "./singleColumnContent/Video/Video";
import Code from "./singleColumnContent/Code/Code";
import Table from "./singleColumnContent/Table/Table";
import TableRow from "./singleColumnContent/Table/TableRow";
import TableCell from "./singleColumnContent/Table/TableCell";
import Tweet from "./singleColumnContent/Tweet/Tweet";
import TweetLight from "./singleColumnContent/Tweet/TweetLight";
import BlogTitle from "./singleColumnContent/BlogTitle/BlogTitle";

// DOCUMENTS
import Documents from "./Documents/Documents";
import DocumentsWrapper from "./wrappers/Documents";

import Document from "./Documents/Document";

// Theme structure
const allBricks: types.Theme = {
  themeName: "React Bricks UI",
  categories: [
    {
      categoryName: "Main Content",
      bricks: [
        TextMedia,
        TextMediaLogo,
        Features,
        FeatureItem,
        FeatureCallout,
        Cards,
        Card,
        LinkCards,
        LinkCard,
      ],
    },
    {
      categoryName: "Hero sections",
      bricks: [HeroUnit, HeroUnit2, ImageCarousel, ImageCarouselItem],
    },
    {
      categoryName: "Call to action",
      bricks: [CallToAction, NewsletterHero, NewsletterSubscribe],
    },
    {
      categoryName: "Separators",
      bricks: [Spacer, HorizontalRule],
    },
    {
      categoryName: "Team",
      bricks: [Team, TeamItem, Team2Cols, Team2ColsItem],
    },
    {
      categoryName: "Testimonial",
      bricks: [Testimonial, Testimonial3Cols, Testimonial3ColsItem],
    },
    {
      categoryName: "Logo sections",
      bricks: [
        Customers,
        Customer,
        LogoGrid,
        LogoGridItem,
        SmallLogoGrid,
        SmallLogoGridItem,
      ],
    },
    {
      categoryName: "FAQ",
      bricks: [Faqs, Faq, Faqs2Cols],
    },
    {
      categoryName: "Contact",
      bricks: [
        Offices,
        Office,
        ContactsForm,
        FormBuilder,
        FormInput,
        FormTextarea,
        FormSelect,
        FormCheckbox,
        FormRadiobuttons,
        FormSingleRadio,
      ],
    },
    {
      categoryName: "Pricing",
      bricks: [Pricing, PricingPlan, PlanFeature],
    },
    {
      categoryName: "Single column / Blog",
      bricks: [
        Title,
        Paragraph,
        BigImage,
        Video,
        Code,
        Table,
        TableRow,
        TableCell,
        Tweet,
        TweetLight,
        BlogTitle,
      ],
    },
    {
      categoryName: "Documents",
      bricks: [Documents, Document],
    },
    {
      categoryName: "Layout",
      bricks: [
        Header,
        HeaderMenuItem,
        HeaderMenuSubItem,
        Footer,
        FooterColumn,
        FooterLink,
      ],
    },
    {
      categoryName: "Shared",
      bricks: [Badge, BulletListItem, Button],
    },
  ],
};

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
