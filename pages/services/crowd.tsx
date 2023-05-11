import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link';
import React from 'react'
import { Button, Progress, Title } from '../../components'
import { ILibData } from '../../interface';

interface ICrowd {
  libraryData: ILibData[];
}

export const getServerSideProps : GetServerSideProps = async () => {
  const response = await fetch('https://libraryapp-ivusc.vercel.app/api/crowd').then((res) => res.json());
  return {
    props: {
      libraryData: response.libraryData
    }
  }
}

const Crowd : NextPage<ICrowd> = ({ libraryData }) => {
  return (
    <div className='mx-10 flex flex-col space-y-1 h-full min-h-screen xl:mx-[10em]'>
      <Title classStyles='mt-5 dark:text-gray-300 text-gray-700 mt-[4em]'>Crowd Level</Title>
      {libraryData.map((library) => (
        <div className='grid grid-cols-12' key={library.name}>
          <p className='lg:col-span-3 col-span-12 font-fira text-lg'>{ library.name } { library.disabledFriendly ? '♿' : undefined }</p>
          <Progress progress={library.crowdLevel?.toString().concat('%')} classStyles={'lg:w-[70%] w-full lg:col-span-9 col-span-12 mt-3 lg:mt-0'}/>
        </div>
      ))}
      <div className="flexCenter mt-5 pb-8">
        <Link href='/services'>
          <Button type='button'> ← Back</Button>
        </Link>
      </div>
    </div>
  )
}

export default Crowd