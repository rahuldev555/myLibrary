import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { GBook, Work } from '../../interface'
import { getBookId } from '../../utils/getBookId';

interface IBook {
  book: Work | GBook;
  type: 'gbooks' | 'openlib';
}

export const Book : React.FC<IBook> = ({ book, type }) => {
  let author: string | undefined;
  let imgUrl: string | undefined;

  if (type === 'openlib'){
    if ((book as Work).author_name !== undefined) author = (book as Work).author_name?.join(', ');
    else author = 'Anonymous';
  } else {
    if ((book as GBook).volumeInfo.authors !== undefined) author = (book as GBook).volumeInfo.authors.join(', ');
    else author = 'Anonymous';
  }

  if (type === 'gbooks'){
    if ((book as GBook).volumeInfo.imageLinks !== undefined) imgUrl = (book as GBook).volumeInfo.imageLinks.thumbnail
    else imgUrl = 'https://cdn-icons-png.flaticon.com/512/166/166088.png';
  } else {
    imgUrl = `https://covers.openlibrary.org/b/olid/${(book as Work).cover_edition_key}-M.jpg`;
  }

  return (
    <div className="max-w-2xl hover:bg-gradient-to-r dark:border-slate-700 border-2 dark:bg-gray-900 bg-blue-400 dark:hover:from-teal-500 dark:hover:via-sky-500 dark:hover:to-violet-500 hover:from-teal-500 hover:via-sky-500 hover:to-violet-500 rounded-lg shadow-xl hover:transform hover:scale-[1.02] transition ease-in-out cursor-pointer mb-5 hover:text-gray-100">
      <Link href={type === 'openlib' ? `/book/olib/${(book as Work).title}/${(book as Work).cover_edition_key}` :`/book/gbs/${(book as GBook).volumeInfo.title}/${getBookId(imgUrl)}` }>
        <div>
          <div className='h-96 w-full relative '>
              <Image className="rounded-t-lg bg-white" layout='fill' objectFit='cover' src={ imgUrl } alt="" />
          </div>
          <div className="p-5 ">
              <h5 className="mb-2 text-2xl font-bold tracking-tight card-title font-poppins">{type === 'openlib' ? (book as Work).title : (book as GBook).volumeInfo.title}</h5>
              <h6 className="mb-3 font-normal font-fira truncate">{ author }</h6>
              <p className="mb-3 font-normal font-fira">{type === 'openlib' ? (book as Work).subtitle : (book as GBook).volumeInfo.subtitle}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
