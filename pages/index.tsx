import type { NextPage } from 'next'
import { FormEvent, KeyboardEvent, useState } from 'react';
import { Booklist, Button, Cards, Input, Title } from '../components';
import { GBook } from '../interface';
import { getGreeting } from '../utils/greeting';

const Home: NextPage = () => {
  const [title, setTitle] = useState('')
  const [query, setQuery] = useState('')
  const [books, setBooks] = useState<GBook[]>([]);
  
  const greeting = getGreeting();

  const onSubmit = async (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    const books = await fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${title}&orderBy=relevance&key=${process.env.NEXT_PUBLIC_GOOGLEBOOKS_KEY}&maxResults=20`).then((res) => res.json());
    console.log(books)
    setBooks(books.items)
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
    if (title.length == 1){
      console.log('clear');
      setBooks([]);
    }
    if (e.key === 'Enter'){
      setQuery(title);
      onSubmit();
    }
  }
  
  return (
    <div className='mx-10 flex flex-col space-y-3 min-h-screen h-full'>
      <h1 className="md:flex inline flex-row justify-center align-center font-fira md:text-3xl text-xl mt-20 font-bold mb-3">
        {greeting}, what would you like to 
        <span className='dark:text-indigo-400 text-indigo-800'>&nbsp;read&nbsp;</span> 
        today?
      </h1>
      <form onSubmit={(e)=>onSubmit(e)}>
        <div className="flexCenter">
            <Input hasLabel={false} placeholder={'Search Books...'} onChange={(e)=>setTitle(e.target.value)} handleKeyPress={handleKeyPress}/>
            <Button type='submit'>Search</Button>
        </div>
      </form>
      {books.length !== 0 ? (
        <div className=' flex flex-col space-y-3 md:mx-[10em] min-[2000px]:mx-[15em] '>
          <Booklist title={`Results for ${query}`} books={books} type={'gbooks'}/>
        </div>
      ) : (
        <div className=' pt-8 xl:mx-[10em]'>
          <Title classStyles='dark:text-gray-400 text-gray-700'>Discover Categories</Title>
          <Cards />
        </div>
      )}
    </div>
  )
}

export default Home
