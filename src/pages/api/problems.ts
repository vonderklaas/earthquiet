import { NextApiRequest, NextApiResponse } from 'next';

const IssueAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: 'John Doe' });
};

export default IssueAPI;
