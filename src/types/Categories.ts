export type Categories = {
  categories: [
    {
      title: string;
      slug: string;
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
  description: string;
  icon: {
    url: string;
  };
};
