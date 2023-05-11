import React from 'react'
import { FiBookOpen } from 'react-icons/fi'

export const Logo : React.FC = () => {
  return (
    <div className="flexCenter cursor-pointer select-none hover:bg-gradient-to-r from-teal-500 via-sky-500 to-violet-500 px-4 py-2 rounded-md hover:text-white text-gray-900 dark:text-white">
      <h1 className="font-poppins font-bold text-2xl mr-2">Library</h1>
      <FiBookOpen size={20} />
    </div>
  )
}
