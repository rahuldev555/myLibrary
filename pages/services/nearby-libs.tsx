import { NextPage } from 'next'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Loader, Title } from '../../components'
import { Address, Library } from '../../interface'

interface IGeolocation {
  latitude: number,
  longitude: number
}

const DEV_URL = 'http://localhost:3000'
const PROD_URL = 'https://libraryapp-ivusc.vercel.app'

const Nearby : NextPage = () => {
  const [geolocation, setGeolocation] = useState<IGeolocation>({ latitude: NaN, longitude: NaN });
  const [libraries, setLibraries] = useState<Library[]>([]);
  const [address, setAddress] = useState<Address>();
  const [loading, setLoading] = useState(false);

  const getLibData = (latitude: number, longitude: number) => {
    return fetch(`${PROD_URL}/api/lib/${latitude},${longitude}`).then((res) => res.json())
      .then((libraries) =>{ 
        setLibraries(libraries.libraries);
        return fetch(`${PROD_URL}/api/geocode/${latitude},${longitude}`).then((res) => res.json())
          .then((address)=> setAddress(address.geocode));
      })
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {         
          if (position.coords.latitude !== NaN) {
            setGeolocation({ latitude: position.coords.latitude, longitude: position.coords.longitude })
            getLibData(position.coords.latitude,position.coords.longitude)
          }
        },
        (error) => {
          console.error("Error Code = " + error.code + " - " + error.message);
        }
      )
    }
  }, [])
  
  return (
    <div className='mx-10 flex flex-col space-y-1 h-full min-h-screen xl:mx-[10em]'>
      <Title classStyles='mt-5 dark:text-gray-300 text-gray-700 mt-[4em]'>Nearby Libraries</Title>
      <p className='font-fira text-lg'>Your current location: {geolocation.latitude} {geolocation.longitude} ({address?.formatted_address})</p>
      { libraries.length > 0 && libraries.map((library) => <p className='font-fira text-lg'>{library.name} ({library.vicinity}) {library.opening_hours.open_now ? 'Open' : 'Closed' } </p>) }
      <div className="flexCenter pt-5 pb-8">
        <Link href='/services'>
          <Button type='button'> ← Back</Button>
        </Link>
      </div>
    </div>
  )
}

export default Nearby