import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { ICatItem } from '../../interface';
import { Subtitle } from '../lib/Typography';

interface ICard {
  item: ICatItem;
}

export const Card : React.FC<ICard> = ({ item }) => {
  return (
    <Link href={item.link}>
      <div className='space-y-2 bg-gradient-to-r from-teal-500 via-sky-500 to-violet-500 rounded-lg p-1 cursor-pointer'>
        <div className="flex flex-col justify-center items-center w-full h-full hover:dark:bg-transparent hover:bg-transparent dark:bg-gray-900 bg-white rounded-lg p-4">
          <div className='w-16 h-16 relative'>
            <Image src={item.image} objectFit='cover' className='filter dark:invert opacity-50 dark:opacity-100' layout='fill'/>
          </div>
          <Subtitle classStyles='dark:text-white text-gray-800 mt-2 text-center'>{item.title}</Subtitle>
        </div>
      </div>
    </Link>
  )
}
