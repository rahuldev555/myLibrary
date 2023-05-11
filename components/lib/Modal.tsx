import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import QRCode from 'react-qr-code';
import { GBook, IIsModalOpen } from '../../interface';
import { Button } from './Button';

interface IModal {
  type: 'qr-code' | 'desc';
  modalRef:  React.MutableRefObject<null>;
  book: GBook;
  isOpen: IIsModalOpen;
  setIsOpen: React.Dispatch<React.SetStateAction<IIsModalOpen>>;
}
export const Modal : React.FC<IModal> = ({ type, modalRef, book, isOpen, setIsOpen }) => {
  return (
    <>
      <Transition appear show={isOpen.isDescOpen || isOpen.isQROpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={()=>setIsOpen({ isDescOpen: false, isQROpen: false })}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full xl:max-w-2xl max-w-full transform overflow-hidden  rounded-2xl dark:bg-gray-900 bg-white py-6 px-3 lg:px-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="lg:text-2xl text-md font-semibold leading-6 font-poppins dark:text-white text-gray-900 flex flex-row justify-between"
                  >
                    {type === 'desc' ? 'Overview' : 'QR Code'} - { book.volumeInfo.title }
                    <AiOutlineClose className='cursor-pointer' onClick={() => setIsOpen({ isDescOpen: false, isQROpen: false })}/>
                  </Dialog.Title>
                  <div className="mt-5">
                    <p className=" font-fira dark:text-white text-gray-900 lg:text-lg text-md text-justify flex flex-row justify-center">
                      {type === 'desc' ? book.volumeInfo.description : <QRCode size={64} value={window.location.href} className={'h-auto w-[60%]'} viewBox={`0 0 64 64`} /> }
                    </p>
                  </div>

                  <div className="mt-4 flexCenter">
                    <Button
                      type="button"
                      classStyles='sm:mb-5 mr-5 sm:mr-0 rounded-xl'
                      onClick={()=>setIsOpen({ isDescOpen: false, isQROpen: false })}
                    >
                      Close
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
