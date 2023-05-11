import React from 'react'

interface ITypography {
  children?: React.ReactNode;
  classStyles?: string;
}

export const Heading : React.FC<ITypography> = ({ children, classStyles }) => <h1 className={`flex flex-col justify-center align-center font-poppins text-3xl mt-20 font-bold dark:text-gray-100 text-gray-800 ${classStyles}`}>{children}</h1>

export const Title : React.FC<ITypography> = ({ children, classStyles }) => <h2 className={`flex flex-col justify-center align-center font-poppins text-2xl font-bold mb-3 ${classStyles}`}>{children}</h2>

export const Subtitle : React.FC<ITypography> = ({ children, classStyles }) => <h3 className={`flex flex-col justify-center align-center font-poppins text-xl font-bold mb-3 ${classStyles}`}>{children}</h3>
