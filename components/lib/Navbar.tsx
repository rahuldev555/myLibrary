import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { BiMenu } from 'react-icons/bi'
import { FaSun, FaRegMoon } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { useTheme } from 'next-themes'
import { Logo } from './Logo'

const links = [
  { title: 'Home', link: '/' },
  { title: 'Trending', link: '/trending' },
  { title: 'Services', link: '/services'}
]

const NavLink = ({ title, link, onClick } : { title: string, link: string, onClick?: () => void }) => (
  <div className='hover:underline hover:underline-offset-2 font-poppins font-semibold' onClick={onClick}>
    <Link href={link}>{title}</Link>
  </div>
)

export const Navbar : React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(()=>{
    setTheme('dark');
  },[])

  return (
    <nav className="flexBetween w-full fixed z-10 py-2 px-12 flex-row border-b bg-opacity-20 border-neutral-200 dark:border-neutral-700 drop-shadow-lg backdrop-blur-md">
      <div className="flex flex-1 flex-row justify-start">
        {/* Mobile */}
        <Link href={'/'}>
          <div className="md:hidden flex flex-row justify-between items-center mr-5 w-full h-full">
            <Logo />
          </div>
        </Link>
        {/* Big Screens */}
        <Link href={'/'}>
          <div className="hidden md:flex">
            <Logo />
          </div>
        </Link>
      </div>

      <div className='flex flex-initial flex-row justify-end'>
        <div className="hidden md:flex flex-between items-center gap-6 mr-6">
          {links.map((link) => <NavLink title={link.title} link={link.link} key={link.title} />)}
        </div>
        <div className="flex items-center mr-2">
          <input type='checkbox' className='checkbox' id='checkbox' onChange={()=>setTheme(theme === 'light' ? 'dark' : 'light')}></input>
          <label htmlFor='checkbox'
            className='flexBetween w-10 h-5 bg-indigo-700 text-white rounded-2xl p-1 relative label hover:cursor-pointer'>
              <FaRegMoon size={12} />
              <FaSun size={12} />
              <div className='w-4 h-4 absolute bg-white rounded-full ball'></div>
          </label>
        </div>
        { isOpen ? 
          <AiOutlineClose size={20} className="md:hidden cursor-pointer ml-3" onClick={() => setIsOpen(false)} /> :
          <BiMenu size={20} className="md:hidden cursor-pointer ml-3" onClick={() => setIsOpen(true)} />
        }
      </div>

      <div className='flex md:hidden ml-2'>
          {isOpen && (
            <div className='fixed inset-0 top-0 px-5 mt-[4rem] py-5 z-10 dark:bg-gray-900 bg-white h-screen overflow-hidden flex justify-start align-top flex-col'>
              <div className='p-4 text-center dark:border-gray-900 border-gray-100'>
                {links.map((link) => <NavLink title={link.title} link={link.link} onClick={() => setIsOpen(false)} key={link.title} />)}
              </div>
            </div>
          )}
      </div>
    </nav>
  )
}
