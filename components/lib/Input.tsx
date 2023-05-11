import React, { KeyboardEvent } from 'react'

interface IInput {
  hasLabel: boolean;
  placeholder: string;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress?: (e: KeyboardEvent<HTMLDivElement>) => void;
  value? : string | number;
}

export const Input : React.FC<IInput> = ({ hasLabel, label, placeholder, value, onChange, handleKeyPress }) => {
  return (
    <div className="flex flex-col justify-center align-center md:w-[50%] w-[90%]">
      {hasLabel === true && 
        <p className="font-fira darK:text-gray-100 text-gray-800">{ label }</p>    
      }
      <div className="relative flex justify-center items-center">
        <input type="search" id="default-search" className="block p-2 pl-5 w-[95%] text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} onChange={onChange} onKeyDown={handleKeyPress}/>
      </div>
    </div>
  )
}
