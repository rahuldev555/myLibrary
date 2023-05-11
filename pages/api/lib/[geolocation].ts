import type { NextApiRequest, NextApiResponse } from 'next';
import { LibraryResponse } from '../../../interface';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try{
    const { geolocation } = req.query;
    console.log(geolocation)
    let [latitude, longitude] = (geolocation as string).split(',');
    
    const response : LibraryResponse = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude}%2C${longitude}&radius=5000&type=library&keyword=library&key=${process.env.NEXT_PUBLIC_GOOGLEMAPS_API_KEY}`).then((res) => res.json())

    res.status(200).send({ libraries: response.results.slice(0,3) })
    
  } catch (error){
    res.status(500).json({ error: error })
  }
}

export default handler;