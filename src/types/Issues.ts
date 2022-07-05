export type IssuesArray = {
  issues: [
    {
      title: string;
      description: string;
      slug: string;
      categorySlug: string;
      date: string;
    }
  ];
};

export type IssueShort = {
  title: string;
  description: string;
  slug: string;
  categorySlug: string;
  date: string;
};

export type IssueFull = {
  title: string;
  description: string;
  slug: string;
  general: string;
  consequences: string;
  improvements: string;
  date: string;
  categorySlug: string;
};

export type IssueId = {
  categoryParent: {
    id: string;
  };
};
