export type Categories = {
  categories: [
    {
      title: string;
      slug: string;
      id: string;
      issues?: number;
      description: string;
      icon: {
        url: string;
      };
    }
  ];
};

export type Category = {
  title: string;
  slug: string;
  id: string;
  issues?: number;
  description: string;
  icon: {
    url: string;
  };
};
