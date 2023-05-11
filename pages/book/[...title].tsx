import { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react'

import { Button, Heading, Modal, Subtitle, Title } from '../../components';
import { GBook, GBooks, IIsModalOpen } from '../../interface';

interface IBookDetailsPage{
  book: GBook;
  imgUrl: string;
}

export const getServerSideProps : GetServerSideProps = async(context) => {
  // console.log(context.params?.title)
  const response : GBooks = await fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${context.params?.title![1]}&orderBy=relevance&key=${process.env.NEXT_PUBLIC_GOOGLEBOOKS_KEY}&maxResults=1`).then((res) => res.json());
  
  let imgUrl: string;

  if (context.params?.title![0] === 'gbs') {
    if (context.params?.title![2].includes('flaticon')) imgUrl = 'https://cdn-icons-png.flaticon.com/512/166/166088.png';
    else imgUrl = `http://books.google.com/books/content?id=${context.params?.title![2]}&printsec=frontcover&img=1&zoom=1&source=gbs_api`;
  } else imgUrl = `https://covers.openlibrary.org/b/olid/${context.params?.title![2]}-M.jpg`;


  return {
    props: {
      book: response.items[0],
      imgUrl: imgUrl,
    }
  }
}


const BookDetails : NextPage<IBookDetailsPage> = ({ book, imgUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState<IIsModalOpen>({
    isDescOpen: false, isQROpen: false
  })
  const modalRef = useRef(null);
  const router = useRouter();

  return (
    <div className="md:mx-10 flex flex-col space-y-3 lg:h-screen">
      <div className="grid lg:grid-cols-2 grid-cols-1 pt-10 md:mx-20 mx-7">
        <div className='relative flex flex-1 flexCenter mt-20'>
          <div className={`md:col-span-1 col-span-2 h-[34.4em] w-[22.5em] relative overflow-hidden shadow-lg ${imgUrl.includes('flaticon') ? 'bg-white' : ''} rounded-lg`}>
            <Image src={imgUrl} objectFit='cover' className='rounded-xl' layout='fill'/>
          </div>
        </div>
        <div className='relative justify-center align-top'>
          <Heading>{ book.volumeInfo.title }</Heading>
          <Title>{ book.volumeInfo.subtitle }</Title>
          <Subtitle>By { book.volumeInfo.authors.join(', ') }</Subtitle>
          <p className='font-fira text-xl font-semibold mb-4'>Rating: { book.volumeInfo.averageRating } / 5 | Language: { book.volumeInfo.language }</p>
          <p className='font-fira text-xl font-semibold mb-2'>Overview</p>
          <p className='summary font-fira text-lg'>{ book.volumeInfo.description }</p>
          <div className="flex flex-row items-center justify-center mt-5">
            <p className='hover:underline hover:underline-offset-2 font-fira text-lg cursor-pointer' onClick={()=>setIsModalOpen({...isModalOpen, isDescOpen: true })}>Read Full Overview...</p> 
            <p className="font-fira text-lg">&nbsp; | &nbsp;</p>
            <a className='hover:underline hover:underline-offset-2 font-fira text-lg cursor-pointer' href={book.volumeInfo.previewLink} target={'_blank'} rel={"noopener noreferrer"}>Read sample...</a>
          </div>
          <div className='flexCenter mt-5 mb-10 flex-row space-x-3'>
            <Button type='button'>Borrow</Button>
            <Button type='button' onClick={()=>setIsModalOpen({...isModalOpen, isQROpen: true})}>Get QR Code</Button>
            <Button type='button' classStyles='hidden md:flex'>Availability</Button>
          </div>
          <div className="flexCenter mt-5 pb-8">
            <p className='hover:underline hover:underline-offset-2 font-fira text-lg cursor-pointer' onClick={()=> router.back()}> ← Back</p>
          </div>
        </div>
      </div>
      {isModalOpen.isDescOpen && (
        <Modal type={'desc'} modalRef={modalRef} book={book} isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
      {isModalOpen.isQROpen && (
        <Modal type={'qr-code'} modalRef={modalRef} book={book} isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </div>
  )
}

export default BookDetails