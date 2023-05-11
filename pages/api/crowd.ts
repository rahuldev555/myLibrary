import type { NextApiRequest, NextApiResponse } from 'next';
import { ILibData } from '../../interface';

const libraryData : ILibData[] = [
  { name: 'Ang Mo Kio Public Library', disabledFriendly: true },
  { name: 'Bedok Public Library', disabledFriendly: false },
  { name: 'Bishan Public Library', disabledFriendly: true },
  { name: 'Bukit Batok Public Library', disabledFriendly: true },
  { name: 'Bukit Panjang Public Library', disabledFriendly: false },
  { name: 'Central Public Library', disabledFriendly: true },
  { name: 'Cheng San Public Library', disabledFriendly: true },
  { name: 'Choa Chu Kang Public Library', disabledFriendly: false },
  { name: 'Clementi Public Library', disabledFriendly: false },
  { name: 'Geylang East Public Library', disabledFriendly: true },
  { name: 'Jurong West Public Library',disabledFriendly: false },
  { name: 'library@chinatown', disabledFriendly: true },
  { name: 'library@esplanade', disabledFriendly: false },
  { name: 'library@harbourfront', disabledFriendly: true },
  { name: 'library@orchard', disabledFriendly: true },
  { name: 'Marine Parade Public Library', disabledFriendly: false },
  { name: 'Pasir Ris Public Library', disabledFriendly: true },
  { name: 'Queenstown Public Library', disabledFriendly: false },
  { name: 'Sembawang Public Library', disabledFriendly: false },
  { name: 'Serangoon Public Library', disabledFriendly: true },
  { name: 'Sengkang Public Library', disabledFriendly: false },
  { name: 'Toa Payoh Public Library', disabledFriendly: true },
  { name: 'The LLiBrary', disabledFriendly: true },
  { name: 'Yishun Public Library', disabledFriendly: true},
]

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  
  libraryData.forEach((library) => {
    library["crowdLevel"] = Math.floor(Math.random() * 90 + 10);
  });

  res.status(200).json({ libraryData });
} 

export default handler;