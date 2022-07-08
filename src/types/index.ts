export type CategoryType = {
  title: string;
  slug: string;
  id: string;
  description: string;
};

export type CategoryTitleType = {
  title: string;
  description: string;
};

export type TopicShortType = {
  title: string;
  description: string;
  slug: string;
  categorySlug: string;
  date: string;
};

export type TopicLongType = {
  title: string;
  description: string;
  slug: string;
  general: string;
  consequences: string;
  improvements: string;
  date: string;
  categorySlug: string;
};
