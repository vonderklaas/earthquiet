import { NextApiRequest, NextApiResponse } from 'next';

const ProblemsAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: 'John Doe' });
};

export default ProblemsAPI;
