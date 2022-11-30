import Image from 'next/image'
import logo from '../public/logo.png'
import Link from 'next/link'
import { useState, useEffect, use } from 'react'

export default function Result() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  }, [])

  useEffect(() => {
    console.log(loading)
  }, [loading])

  return (
    loading ? (<main>
      <div className="w-screen h-screen bg-[#191824] px-40 py-8">
        <div className="flex">
          <Link href='/' className='flex cursor-pointer'>
            <Image className='mr-2' src={logo} height={30} width={30} alt="logo" />
            <p className="text-white text-xl font-semibold font-Jost">justize</p>
          </Link>
          <div className='flex ml-28 gap-10'>
            <a href='compare' className="text-white font-Jost text-xl font-regular hover:text-[#f96270] transition duration-150 ease-in-out">compare</a>
            <a href='#' className="text-white font-Jost text-xl font-regular hover:text-[#f96270] transition duration-150 ease-in-out">about</a>
          </div>
        </div>

        <div className='mt-20'>
          <div className='w-full'>
              <div className='flex justify-center items-center h-96'>
                <svg class="inline mr-2 w-24 h-24 text-gray-200 animate-spin fill-[#f96270]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
              </div>
              <span class="sr-only">Loading...</span>
          </div>    
        </div>

      </div>
    </main>) : <main>
      <div className="w-screen h-screen bg-[#191824] px-40 py-8">
        <div className="flex">
          <Link href='/' className='flex cursor-pointer'>
            <Image className='mr-2' src={logo} height={30} width={30} alt="logo" />
            <p className="text-white text-xl font-semibold font-Jost">justize</p>
          </Link>
          <div className='flex ml-28 gap-10'>
            <a href='compare' className="text-white font-Jost text-xl font-regular hover:text-[#f96270] transition duration-150 ease-in-out">compare</a>
            <a href='#' className="text-white font-Jost text-xl font-regular hover:text-[#f96270] transition duration-150 ease-in-out">about</a>
          </div>
        </div>

        <div className='mt-20'>
          <p className="text-white text-xl underline underline-offset-8 font-bold font-Jost"> YOUR RESULT </p>
          <div className='flex'>
            <div className="text-white text-xl w-1/2 mr-20 font-Jost mt-20 grid grid-cols-3 gap-16">
              <div className='w-full'>
                <div className='h-20 bg-[#191824] h-1/2'></div>
                <p className="text-white text-sm font-bold font-Jost text-center mb-2"> 7 cases </p>
                <div className='h-20 bg-[#FC6270] h-1/2'></div>
                <p className="text-white text-sm font-bold font-Jost text-center mt-2">Historical Cases Checked</p>
              </div>
              <div className='w-full'>
                <p className="text-white text-sm font-bold font-Jost text-center mb-2">Variant</p>
                <div className='h-20 bg-[#86323A] h-1/4'></div>
                <div className='h-20 bg-[#AF454F] h-1/4'></div>
                <div className='h-20 bg-[#FC6270] h-1/2'></div>
                <p className="text-white text-sm font-bold font-Jost text-center mt-2">Variation of Races Percentage</p>
              </div>
              <div className='w-full'>
                <div className='h-20 bg-[#191824] h-3/4'></div>
                <p className="text-white text-sm font-bold font-Jost text-center mb-2"> 5% </p>
                <div className='h-20 bg-[#FC6270] h-1/4'></div>
                <p className="text-white text-sm font-bold font-Jost text-center mt-2">Deviation from Average</p>
              </div>
            </div>
            <div className="text-white text-xl w-1/2 mr-20 font-Jost mt-20">
              <p className='font-Jost text-md text-justify'>From <span className="text-[#FC6270]"> 7 </span> similarly <span className="text-[#FC6270]">historial cases.</span></p>
              <p className='font-Jost text-md text-justify my-4'>With <span className="text-[#FC6270]">50%</span> of the cases the defendant are White, <span className="text-[#AF454F]">25%</span> of the cases the defendant are Black, and <span className="text-[#86323A]">25%</span> of the cases the defendant are Others.</p>
              <p className='font-Jost text-md text-justify'>Your cases have a deviation of <span className="text-[#FC6270]">5%</span> in sentence decision from the average </p>
              <div className='bg-[#f96270] my-8 rounded-lg cursor-pointer hover:bg-[#af454f] transition duration-200 ease-in-out'>
                <Link href='/'>
                  <p className='text-center p-2 font-bold text-white text-sm font-Jost'>DETAILS</p>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}