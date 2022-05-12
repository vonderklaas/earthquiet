export type IssueShort = {
  title: string;
  description: string;
  slug: string;
  categorySlug: string;
  date: string;
  keywords: string;
};

export type IssueFull = {
  title: string;
  description: string;
  slug: string;
  generalText: string;
  consequences: string;
  solutions: string;
  date: string;
  keywords: string;
  categorySlug: string;
};

export type IssueId = {
  categoryParent: {
    id: string;
  };
};
