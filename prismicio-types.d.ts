// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type FooterDocumentDataSlicesSlice = CopyrightSlice | ContactInfoSlice;

/**
 * Content for Footer documents
 */
interface FooterDocumentData {
  /**
   * Slice Zone field in *Footer*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<FooterDocumentDataSlicesSlice>;
}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FooterDocumentData>,
    'footer',
    Lang
  >;

type NavigationDocumentDataSlicesSlice = NavigationSlice;

/**
 * Content for Navigation documents
 */
interface NavigationDocumentData {
  /**
   * Slice Zone field in *Navigation*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<NavigationDocumentDataSlicesSlice>;
}

/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavigationDocumentData>,
    'navigation',
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | IconBarSlice
  | ImageWithTextSlice
  | PriceListSlice
  | MapSlice
  | GalleryCarouselSlice
  | ReviewsCarouselSlice
  | ContactFormSlice
  | ImageBlockSlice
  | NewsPanelSlice
  | PromoPanelSlice
  | RichTextSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Masthead Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.masthead_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  masthead_image: prismic.ImageField<never>;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, 'page', Lang>;

export type AllDocumentTypes =
  | FooterDocument
  | NavigationDocument
  | PageDocument;

/**
 * Primary content in *ContactForm → Primary*
 */
export interface ContactFormSliceDefaultPrimary {
  /**
   * Email field in *ContactForm → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form.primary.email
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email: prismic.KeyTextField;

  /**
   * Button Text field in *ContactForm → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * success message field in *ContactForm → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form.primary.success_message
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  success_message: prismic.KeyTextField;

  /**
   * Validation error field in *ContactForm → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form.primary.validation_error
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  validation_error: prismic.KeyTextField;
}

/**
 * Default variation for ContactForm Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactFormSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<ContactFormSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ContactForm*
 */
type ContactFormSliceVariation = ContactFormSliceDefault;

/**
 * ContactForm Shared Slice
 *
 * - **API ID**: `contact_form`
 * - **Description**: ContactForm
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactFormSlice = prismic.SharedSlice<
  'contact_form',
  ContactFormSliceVariation
>;

/**
 * Primary content in *ContactInfo → Primary*
 */
export interface ContactInfoSliceDefaultPrimary {
  /**
   * title field in *ContactInfo → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_info.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Intro field in *ContactInfo → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_info.primary.intro
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  intro: prismic.KeyTextField;

  /**
   * Name field in *ContactInfo → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_info.primary.name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Address 1 field in *ContactInfo → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_info.primary.address_1
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  address_1: prismic.KeyTextField;

  /**
   * Address 2 field in *ContactInfo → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_info.primary.address_2
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  address_2: prismic.KeyTextField;

  /**
   * Address 3 field in *ContactInfo → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_info.primary.address_3
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  address_3: prismic.KeyTextField;

  /**
   * Address 4 field in *ContactInfo → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_info.primary.address_4
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  address_4: prismic.KeyTextField;

  /**
   * Phone field in *ContactInfo → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_info.primary.phone
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  phone: prismic.KeyTextField;

  /**
   * email field in *ContactInfo → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_info.primary.email
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email: prismic.KeyTextField;

  /**
   * Signup title field in *ContactInfo → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_info.primary.signup_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  signup_title: prismic.KeyTextField;

  /**
   * Signup Intro field in *ContactInfo → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_info.primary.signup_intro
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  signup_intro: prismic.KeyTextField;

  /**
   * Signup button field in *ContactInfo → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_info.primary.signup_button
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  signup_button: prismic.KeyTextField;

  /**
   * Signup success message field in *ContactInfo → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_info.primary.signup_success_message
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  signup_success_message: prismic.KeyTextField;

  /**
   * Signup Error message field in *ContactInfo → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_info.primary.signup_error_message
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  signup_error_message: prismic.KeyTextField;
}

/**
 * Default variation for ContactInfo Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactInfoSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<ContactInfoSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ContactInfo*
 */
type ContactInfoSliceVariation = ContactInfoSliceDefault;

/**
 * ContactInfo Shared Slice
 *
 * - **API ID**: `contact_info`
 * - **Description**: ContactInfo
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactInfoSlice = prismic.SharedSlice<
  'contact_info',
  ContactInfoSliceVariation
>;

/**
 * Primary content in *Copyright → Primary*
 */
export interface CopyrightSliceDefaultPrimary {
  /**
   * Copyright Text field in *Copyright → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: copyright.primary.copyright_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  copyright_text: prismic.KeyTextField;
}

/**
 * Default variation for Copyright Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CopyrightSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<CopyrightSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Copyright*
 */
type CopyrightSliceVariation = CopyrightSliceDefault;

/**
 * Copyright Shared Slice
 *
 * - **API ID**: `copyright`
 * - **Description**: Copyright
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CopyrightSlice = prismic.SharedSlice<
  'copyright',
  CopyrightSliceVariation
>;

/**
 * Primary content in *GalleryCarousel → Primary*
 */
export interface GalleryCarouselSliceDefaultPrimary {
  /**
   * Placeholder field in *GalleryCarousel → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery_carousel.primary.placeholder
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  placeholder: prismic.KeyTextField;

  /**
   * Description field in *GalleryCarousel → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery_carousel.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * Primary content in *GalleryCarousel → Items*
 */
export interface GalleryCarouselSliceDefaultItem {
  /**
   * Image field in *GalleryCarousel → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery_carousel.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for GalleryCarousel Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GalleryCarouselSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<GalleryCarouselSliceDefaultPrimary>,
  Simplify<GalleryCarouselSliceDefaultItem>
>;

/**
 * Slice variation for *GalleryCarousel*
 */
type GalleryCarouselSliceVariation = GalleryCarouselSliceDefault;

/**
 * GalleryCarousel Shared Slice
 *
 * - **API ID**: `gallery_carousel`
 * - **Description**: GalleryCarousel
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GalleryCarouselSlice = prismic.SharedSlice<
  'gallery_carousel',
  GalleryCarouselSliceVariation
>;

/**
 * Primary content in *IconBar → Primary*
 */
export interface IconBarSliceDefaultPrimary {
  /**
   * Title field in *IconBar → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: icon_bar.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Primary content in *IconBar → Items*
 */
export interface IconBarSliceDefaultItem {
  /**
   * Text field in *IconBar → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: icon_bar.items[].text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;

  /**
   * Icon field in *IconBar → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Font awesome icon
   * - **API ID Path**: icon_bar.items[].icon
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  icon: prismic.KeyTextField;

  /**
   * Disabled field in *IconBar → Items*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: icon_bar.items[].disabled
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  disabled: prismic.BooleanField;
}

/**
 * Default variation for IconBar Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type IconBarSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<IconBarSliceDefaultPrimary>,
  Simplify<IconBarSliceDefaultItem>
>;

/**
 * Slice variation for *IconBar*
 */
type IconBarSliceVariation = IconBarSliceDefault;

/**
 * IconBar Shared Slice
 *
 * - **API ID**: `icon_bar`
 * - **Description**: IconBar
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type IconBarSlice = prismic.SharedSlice<
  'icon_bar',
  IconBarSliceVariation
>;

/**
 * Primary content in *ImageBlock → Primary*
 */
export interface ImageBlockSliceDefaultPrimary {
  /**
   * Image field in *ImageBlock → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_block.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Description field in *ImageBlock → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_block.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * width field in *ImageBlock → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: Full
   * - **API ID Path**: image_block.primary.width
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  width: prismic.SelectField<'Full' | 'Large' | 'Medium', 'filled'>;
}

/**
 * Default variation for ImageBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageBlockSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<ImageBlockSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ImageBlock*
 */
type ImageBlockSliceVariation = ImageBlockSliceDefault;

/**
 * ImageBlock Shared Slice
 *
 * - **API ID**: `image_block`
 * - **Description**: ImageBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageBlockSlice = prismic.SharedSlice<
  'image_block',
  ImageBlockSliceVariation
>;

/**
 * Primary content in *ImageWithText → Primary*
 */
export interface ImageWithTextSliceDefaultPrimary {
  /**
   * alignment field in *ImageWithText → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: Image left
   * - **API ID Path**: image_with_text.primary.alignment
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  alignment: prismic.SelectField<'Image left' | 'Image right', 'filled'>;

  /**
   * Image field in *ImageWithText → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_with_text.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Text field in *ImageWithText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_with_text.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * Default variation for ImageWithText Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageWithTextSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<ImageWithTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ImageWithText*
 */
type ImageWithTextSliceVariation = ImageWithTextSliceDefault;

/**
 * ImageWithText Shared Slice
 *
 * - **API ID**: `image_with_text`
 * - **Description**: ImageWithText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageWithTextSlice = prismic.SharedSlice<
  'image_with_text',
  ImageWithTextSliceVariation
>;

/**
 * Primary content in *Map → Primary*
 */
export interface MapSliceDefaultPrimary {
  /**
   * Position field in *Map → Primary*
   *
   * - **Field Type**: GeoPoint
   * - **Placeholder**: *None*
   * - **API ID Path**: map.primary.position
   * - **Documentation**: https://prismic.io/docs/field#geopoint
   */
  position: prismic.GeoPointField;

  /**
   * Zoom field in *Map → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: map.primary.zoom
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  zoom: prismic.NumberField;
}

/**
 * Default variation for Map Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MapSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<MapSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Map*
 */
type MapSliceVariation = MapSliceDefault;

/**
 * Map Shared Slice
 *
 * - **API ID**: `map`
 * - **Description**: Map
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MapSlice = prismic.SharedSlice<'map', MapSliceVariation>;

/**
 * Primary content in *Navigation → Items*
 */
export interface NavigationSliceDefaultItem {
  /**
   * Title field in *Navigation → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Link field in *Navigation → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Default variation for Navigation Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavigationSliceDefault = prismic.SharedSliceVariation<
  'default',
  Record<string, never>,
  Simplify<NavigationSliceDefaultItem>
>;

/**
 * Slice variation for *Navigation*
 */
type NavigationSliceVariation = NavigationSliceDefault;

/**
 * Navigation Shared Slice
 *
 * - **API ID**: `navigation`
 * - **Description**: Navigation
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavigationSlice = prismic.SharedSlice<
  'navigation',
  NavigationSliceVariation
>;

/**
 * Primary content in *NewsPanel → Items*
 */
export interface NewsPanelSliceDefaultItem {
  /**
   * Title field in *NewsPanel → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: news_panel.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Intro field in *NewsPanel → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: news_panel.items[].intro
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  intro: prismic.KeyTextField;

  /**
   * Image field in *NewsPanel → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: news_panel.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Date field in *NewsPanel → Items*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: news_panel.items[].date
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date: prismic.DateField;

  /**
   * Link field in *NewsPanel → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: news_panel.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Default variation for NewsPanel Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NewsPanelSliceDefault = prismic.SharedSliceVariation<
  'default',
  Record<string, never>,
  Simplify<NewsPanelSliceDefaultItem>
>;

/**
 * Slice variation for *NewsPanel*
 */
type NewsPanelSliceVariation = NewsPanelSliceDefault;

/**
 * NewsPanel Shared Slice
 *
 * - **API ID**: `news_panel`
 * - **Description**: NewsPanel
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NewsPanelSlice = prismic.SharedSlice<
  'news_panel',
  NewsPanelSliceVariation
>;

/**
 * Primary content in *PriceList → Primary*
 */
export interface PriceListSliceDefaultPrimary {
  /**
   * Title field in *PriceList → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: price_list.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Column heading 1 field in *PriceList → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: price_list.primary.column_heading_1
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  column_heading_1: prismic.KeyTextField;

  /**
   * Column heading 2 field in *PriceList → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: price_list.primary.column_heading_2
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  column_heading_2: prismic.KeyTextField;

  /**
   * Column heading 3 field in *PriceList → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: price_list.primary.column_heading_3
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  column_heading_3: prismic.KeyTextField;

  /**
   * Column heading 4 field in *PriceList → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: price_list.primary.column_heading_4
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  column_heading_4: prismic.KeyTextField;
}

/**
 * Primary content in *PriceList → Items*
 */
export interface PriceListSliceDefaultItem {
  /**
   * Name field in *PriceList → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: price_list.items[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Price 1 field in *PriceList → Items*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: price_list.items[].price_1
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  price_1: prismic.NumberField;

  /**
   * Price 2 field in *PriceList → Items*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: price_list.items[].price_2
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  price_2: prismic.NumberField;

  /**
   * Price 3 field in *PriceList → Items*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: price_list.items[].price_3
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  price_3: prismic.NumberField;
}

/**
 * Default variation for PriceList Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PriceListSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<PriceListSliceDefaultPrimary>,
  Simplify<PriceListSliceDefaultItem>
>;

/**
 * Slice variation for *PriceList*
 */
type PriceListSliceVariation = PriceListSliceDefault;

/**
 * PriceList Shared Slice
 *
 * - **API ID**: `price_list`
 * - **Description**: PriceList
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PriceListSlice = prismic.SharedSlice<
  'price_list',
  PriceListSliceVariation
>;

/**
 * Primary content in *PromoPanel → Items*
 */
export interface PromoPanelSliceDefaultItem {
  /**
   * Title field in *PromoPanel → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: promo_panel.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Intro field in *PromoPanel → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: promo_panel.items[].intro
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  intro: prismic.KeyTextField;

  /**
   * Image field in *PromoPanel → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: promo_panel.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Page link field in *PromoPanel → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: promo_panel.items[].page_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  page_link: prismic.LinkField;
}

/**
 * Default variation for PromoPanel Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PromoPanelSliceDefault = prismic.SharedSliceVariation<
  'default',
  Record<string, never>,
  Simplify<PromoPanelSliceDefaultItem>
>;

/**
 * Slice variation for *PromoPanel*
 */
type PromoPanelSliceVariation = PromoPanelSliceDefault;

/**
 * PromoPanel Shared Slice
 *
 * - **API ID**: `promo_panel`
 * - **Description**: PromoPanel
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PromoPanelSlice = prismic.SharedSlice<
  'promo_panel',
  PromoPanelSliceVariation
>;

/**
 * Primary content in *ReviewsCarousel → Items*
 */
export interface ReviewsCarouselSliceDefaultItem {
  /**
   * Name field in *ReviewsCarousel → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: reviews_carousel.items[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Review field in *ReviewsCarousel → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: reviews_carousel.items[].review
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  review: prismic.KeyTextField;
}

/**
 * Default variation for ReviewsCarousel Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ReviewsCarouselSliceDefault = prismic.SharedSliceVariation<
  'default',
  Record<string, never>,
  Simplify<ReviewsCarouselSliceDefaultItem>
>;

/**
 * Slice variation for *ReviewsCarousel*
 */
type ReviewsCarouselSliceVariation = ReviewsCarouselSliceDefault;

/**
 * ReviewsCarousel Shared Slice
 *
 * - **API ID**: `reviews_carousel`
 * - **Description**: ReviewsCarousel
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ReviewsCarouselSlice = prismic.SharedSlice<
  'reviews_carousel',
  ReviewsCarouselSliceVariation
>;

/**
 * Primary content in *RichText → Primary*
 */
export interface RichTextSliceDefaultPrimary {
  /**
   * Content field in *RichText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Lorem ipsum...
   * - **API ID Path**: rich_text.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<RichTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<
  'rich_text',
  RichTextSliceVariation
>;

declare module '@prismicio/client' {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      FooterDocument,
      FooterDocumentData,
      FooterDocumentDataSlicesSlice,
      NavigationDocument,
      NavigationDocumentData,
      NavigationDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      ContactFormSlice,
      ContactFormSliceDefaultPrimary,
      ContactFormSliceVariation,
      ContactFormSliceDefault,
      ContactInfoSlice,
      ContactInfoSliceDefaultPrimary,
      ContactInfoSliceVariation,
      ContactInfoSliceDefault,
      CopyrightSlice,
      CopyrightSliceDefaultPrimary,
      CopyrightSliceVariation,
      CopyrightSliceDefault,
      GalleryCarouselSlice,
      GalleryCarouselSliceDefaultPrimary,
      GalleryCarouselSliceDefaultItem,
      GalleryCarouselSliceVariation,
      GalleryCarouselSliceDefault,
      IconBarSlice,
      IconBarSliceDefaultPrimary,
      IconBarSliceDefaultItem,
      IconBarSliceVariation,
      IconBarSliceDefault,
      ImageBlockSlice,
      ImageBlockSliceDefaultPrimary,
      ImageBlockSliceVariation,
      ImageBlockSliceDefault,
      ImageWithTextSlice,
      ImageWithTextSliceDefaultPrimary,
      ImageWithTextSliceVariation,
      ImageWithTextSliceDefault,
      MapSlice,
      MapSliceDefaultPrimary,
      MapSliceVariation,
      MapSliceDefault,
      NavigationSlice,
      NavigationSliceDefaultItem,
      NavigationSliceVariation,
      NavigationSliceDefault,
      NewsPanelSlice,
      NewsPanelSliceDefaultItem,
      NewsPanelSliceVariation,
      NewsPanelSliceDefault,
      PriceListSlice,
      PriceListSliceDefaultPrimary,
      PriceListSliceDefaultItem,
      PriceListSliceVariation,
      PriceListSliceDefault,
      PromoPanelSlice,
      PromoPanelSliceDefaultItem,
      PromoPanelSliceVariation,
      PromoPanelSliceDefault,
      ReviewsCarouselSlice,
      ReviewsCarouselSliceDefaultItem,
      ReviewsCarouselSliceVariation,
      ReviewsCarouselSliceDefault,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
    };
  }
}
