import Image from 'next/image'
import logo from '../public/logo.png'
import Link from 'next/link'
import {useState} from 'react';

export default function Home() {

  const [personal, setPersonal] = useState(null)

  return (
    <main className='bg-[#191824]'>
      <div className="w-screen h-full bg-[#191824] px-40 py-8">
        <div className="flex">
          <Link href='/' className='flex cursor-pointer'>
            <Image className='mr-2' src={logo} height={30} width={30} alt='Logo' />
            <p className="text-white text-xl font-semibold font-Jost">justize</p>
          </Link>
          <div className='flex ml-28 gap-10'>
            <a href='compare' className="text-white font-Jost text-xl font-regular hover:text-[#f96270] transition duration-150 ease-in-out">compare</a>
            <a href='#' className="text-white font-Jost text-xl font-regular hover:text-[#f96270] transition duration-150 ease-in-out">about</a>
          </div>
        </div>
        <div className="mt-16 mx-72">
          <p className='text-white font-medium text-xl font-Jost'>Documents Upload</p>
          <div className='w-full flex items-center justify-center'>
            <div className='w-full h-0.5 bg-white mt-2 mb-8'></div>
          </div>
          <p className='text-gray-300 mb-2 font-Jost'>Your personal information</p>
          <div className="flex items-center justify-center w-full">
              <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-white border-dashed rounded-lg cursor-pointer">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg aria-hidden="true" className="w-10 h-10 mb-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                      <p className="mb-2 text-sm text-white font-Jost"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                      <p className="text-xs text-white font-Jost">PDF</p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden"/>
              </label>
          </div> 
          <p className='text-gray-300 mt-8 mb-2 font-Jost'>Your legal documents</p>
          <div className="flex items-center justify-center w-full">
              <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-white border-dashed rounded-lg cursor-pointer">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg aria-hidden="true" className="w-10 h-10 mb-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                      <p className="mb-2 text-sm text-white font-Jost"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                      <p className="text-xs text-white">PDF</p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
              </label>
          </div> 

          <div className='bg-[#f96270] my-8 rounded-lg cursor-pointer hover:bg-[#af454f] transition duration-200 ease-in-out'>
            <Link href='/result'>
              <p className='text-center p-2 font-bold text-white text-sm font-Jost'>COMPARE</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}