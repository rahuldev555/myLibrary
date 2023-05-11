import { NextApiRequest, NextApiResponse } from "next";
import { GeocodeResponse } from "../../../interface";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try{
    const { geolocation } = req.query;
    let [latitude, longitude] = (geolocation as string).split(',');

    const response : GeocodeResponse  = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.NEXT_PUBLIC_GOOGLEMAPS_API_KEY}`).then((res) => res.json())

    res.status(200).send({ geocode: response.results[0] })

  } catch (error) {
    res.status(500).json({ error })
  }
}

export default handler;