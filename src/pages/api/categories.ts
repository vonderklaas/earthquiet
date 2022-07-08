import { NextApiRequest, NextApiResponse } from 'next';
import { getCategories } from '../../hooks/getCategories';

const Categories = async (req: NextApiRequest, res: NextApiResponse) => {
  const categoriesData = await getCategories();
  const categories = categoriesData.categories;
  res.status(200).json(categories);
};

export default Categories;
