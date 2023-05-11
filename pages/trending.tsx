import { NextPage } from 'next'
import React from 'react'
import { Booklist, Heading } from '../components';
import { Books, Work } from '../interface';

interface ITrendingPage {
  books: Work[],
}

export async function getServerSideProps() {
  const response : Books = await fetch('https://openlibrary.org/trending/daily.json').then((res) => res.json());
  
  return {
    props: {
      books: response.works
    },
  }
}

const Trending : NextPage<ITrendingPage> = ({ books }) => {
  // console.log(books)
  return (
    <div className='mx-10 flex flex-col space-y-3 xl:mx-[15em]'>
      <Heading>Trending</Heading>
      <Booklist books={books} title={'Popular Books'} type={'openlib'}/>
    </div>
  )
}

export default Trending