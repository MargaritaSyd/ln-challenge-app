import { IArticles } from "@/bff/interfaces/apiIntefaces";

const tag1 = {
  slug: "tag1-1",
  text: "tag1"
};
const tag2 = {
slug: "tag2-2",
  text: "tag2"
};
const tag3 = {
slug: "tag3-3",
  text: "tag3"
};
const tag4 = {
slug: "tag4-4",
  text: "tag4"
};
const tag5 = {
slug: "tag5-5",
  text: "tag5"
};

const tag6 = {
  slug: "tag6-6",
    text: "tag6"
  };

const tag7 = {
  slug: "tag7-7",
    text: "tag7"
  };

const tag8 = {
  slug: "tag8-8",
    text: "tag8"
  };

const tag10 = {
  slug: "tag10-10",
    text: "tag10"
  };
  

const tag11 = {
  slug: "tag11-11",
    text: "tag11"
  };
  
const tag12 = {
  slug: "tag12-12",
    text: "tag12"
  };

  const basicArticle = {
    _id: "a",
    display_date: "2019-12-06T17:50:17.735Z",
    headlines: {
        "basic": "Arroz con Leche"
    },
    promo_items: {
        basic: {}
    },
    website_url: ""
};
  
export const tagsMock = [
  {...tag1, count: 6},
  {...tag2, count: 5},
  {...tag3, count: 4},
  {...tag4, count: 3},
]

export const articlesMocks: IArticles[] = [
  {...basicArticle,
    subtype: "7",
    promo_items: { basic: { url: "" } },
    taxonomy: {
      tags: [tag1, tag2, tag5, tag7, tag10]
    },
  },
  {...basicArticle,
    subtype: "7",
    promo_items: { basic: { url: "" } },
    taxonomy: {
      tags: [tag3, tag4, tag5, tag6, tag7]
    },
  },
  {...basicArticle,
    subtype: "8",
    promo_items: { basic: { url: "" } },
    taxonomy: {
      tags: [tag8, tag3, tag10, tag11, tag12]
    },
  },
  {...basicArticle,
    subtype: "8",
    promo_items: { basic: { url: "" } },
    taxonomy: {
      tags: []
    },
  },
  {...basicArticle,
    subtype: "7",
    promo_items: { basic: { url: "" } },
    taxonomy: {
      tags: [tag1, tag6, tag8, tag10, tag12]
    },
  },
  {...basicArticle,
    subtype: "7",
    promo_items: { basic: { url: "" } },
    taxonomy: {
      tags: [tag1, tag6, tag8, tag10, tag12]
    },
  },
  {...basicArticle,
    subtype: "7",
    promo_items: { basic: { url: "" } },
    taxonomy: {
      tags: [tag1, tag6, tag8, tag10, tag12]
    },
  },
  {...basicArticle,
    subtype: "7",
    promo_items: { basic: { url: "" } },
    taxonomy: {
      tags: [tag1, tag3, tag8, tag10, tag12]
    },
  },
]

export const allArticlesMocks: IArticles[] = [...articlesMocks, ...articlesMocks, ...articlesMocks]

export const mockArticles: IArticles[] = [  
    {
      _id: '1',
      promo_items: { basic: { url: 'https://example.com/image1.jpg' } },
      headlines: { basic: 'Article 1' },
      display_date: '2025-03-26',
      subtype: '',
      taxonomy: {
        tags: []
      },
      website_url: ''
    },  
    {
      _id: '2',
      promo_items: { basic: { url: 'https://example.com/image2.jpg' } },
      headlines: { basic: 'Article 2' },
      display_date: '2025-03-27',
      subtype: '',
      taxonomy: {
        tags: []
      },
      website_url: ''
    },  
  ];  
