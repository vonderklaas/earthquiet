import { NextApiRequest, NextApiResponse } from 'next';

const CategoriesAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: 'John Doe' });
};

export default CategoriesAPI;
