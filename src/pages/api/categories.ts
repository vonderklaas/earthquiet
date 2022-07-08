import { NextApiRequest, NextApiResponse } from 'next';
import { getCategoryTitles } from '../../hooks/getCategoryTitles';

const Categories = async (req: NextApiRequest, res: NextApiResponse) => {
  const categoriesData = await getCategoryTitles();
  const categories = categoriesData.categories;
  res.status(200).json(categories);
};

export default Categories;
