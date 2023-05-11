import React from 'react'

import { GBook, Work } from '../../interface'
import { Title } from '../lib/Typography';
import { Book } from './Book'

interface IBooklist {
  books: Work[] | GBook[];
  title?: string;
  type: 'gbooks' | 'openlib';
}

export const Booklist : React.FC<IBooklist> = ({ books, title, type }) => {
  return (
    <div>
      <Title classStyles='dark:text-gray-400 text-gray-700'>{title}</Title>
      <div className="grid min-[2000px]:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {books.map((book,i) => (
          <Book book={book} type={type} key={i} />
        )) }
      </div>
    </div>
  )
}
