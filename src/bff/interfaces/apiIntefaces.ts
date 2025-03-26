export interface ITags {
  slug: string;
  text: string;
}
export interface IArticles {
  display_date: string;
  headlines: {basic: string};
  promo_items: { basic: { url: string } };
  subtype: string;
  taxonomy: { 
    tags: ITags[]
  }
  website_url: string;
  _id: string;
}

export interface ITagsGroupedItem extends ITags{
  count: number;
}