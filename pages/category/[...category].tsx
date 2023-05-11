import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link';
import React from 'react'
import { Booklist, Button, Heading } from '../../components';
import { Books, Work } from '../../interface';
import { capitalize } from '../../utils/capitalize';

interface ICategory{
  category: string;
  books: Work[];
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const category = context.params?.category![0];
  const response : Books = await fetch(`https://openlibrary.org/subjects/${category}.json`).then((res) => res.json());

  return {
    props: {
      category: category,
      books: response.works
    }
  }
}

const Category : NextPage<ICategory> = ({ category, books }) => {
  return (
    <div className='mx-10 flex flex-col space-y-3 min-h-screen h-full xl:mx-[15em] '>
      <Heading>{ capitalize(category) }</Heading>
      <Booklist books={books} type={'openlib'} />
      <div className="flexCenter mt-5 pb-8">
        <Link href='/'>
          <Button type='button'> ← Back</Button>
        </Link>
      </div>
    </div>
  )
}

export default Category