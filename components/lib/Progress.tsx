import React from 'react'

interface IProgress {
  progress: string | undefined;
  classStyles?: string;
}
export const Progress : React.FC<IProgress> = ({ progress, classStyles }) => {
  return (
    <div className={`bg-gray-200 dark:bg-gray-700 h-[8px] mb-6 rounded-l rounded-r ${classStyles}`}>
      <div className={`bg-gradient-to-r from-teal-500 via-sky-500 to-violet-500 h-[8px] rounded-l`} style={{ width: progress }} />
    </div>
  )
}
