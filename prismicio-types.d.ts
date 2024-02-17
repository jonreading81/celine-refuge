// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type FooterDocumentDataSlicesSlice = ContactInfoSlice;

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
   * Name field in *Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

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
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<NavigationDocumentData>,
    'navigation',
    Lang
  >;

type PageDocumentDataSlicesSlice =
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
 * Default variation for ContactForm Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactFormSliceDefault = prismic.SharedSliceVariation<
  'default',
  Record<string, never>,
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
      ContactFormSliceVariation,
      ContactFormSliceDefault,
      ContactInfoSlice,
      ContactInfoSliceDefaultPrimary,
      ContactInfoSliceVariation,
      ContactInfoSliceDefault,
      GalleryCarouselSlice,
      GalleryCarouselSliceDefaultPrimary,
      GalleryCarouselSliceDefaultItem,
      GalleryCarouselSliceVariation,
      GalleryCarouselSliceDefault,
      ImageBlockSlice,
      ImageBlockSliceDefaultPrimary,
      ImageBlockSliceVariation,
      ImageBlockSliceDefault,
      NavigationSlice,
      NavigationSliceDefaultItem,
      NavigationSliceVariation,
      NavigationSliceDefault,
      NewsPanelSlice,
      NewsPanelSliceDefaultItem,
      NewsPanelSliceVariation,
      NewsPanelSliceDefault,
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
