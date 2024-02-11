// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type PageDocumentDataSlicesSlice =
  | NewsPanelSlice
  | PromoPanelSlice
  | ImageWithTextSlice
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

export type AllDocumentTypes = PageDocument;

/**
 * Primary content in *ImageWithText → Primary*
 */
export interface ImageWithTextSliceDefaultPrimary {
  /**
   * Title field in *ImageWithText → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_with_text.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Primary content in *ImageWithText → Items*
 */
export interface ImageWithTextSliceDefaultItem {
  /**
   * Image field in *ImageWithText → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_with_text.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * text field in *ImageWithText → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_with_text.items[].text
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
  Simplify<ImageWithTextSliceDefaultItem>
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
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      ImageWithTextSlice,
      ImageWithTextSliceDefaultPrimary,
      ImageWithTextSliceDefaultItem,
      ImageWithTextSliceVariation,
      ImageWithTextSliceDefault,
      NewsPanelSlice,
      NewsPanelSliceDefaultItem,
      NewsPanelSliceVariation,
      NewsPanelSliceDefault,
      PromoPanelSlice,
      PromoPanelSliceDefaultItem,
      PromoPanelSliceVariation,
      PromoPanelSliceDefault,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
    };
  }
}
