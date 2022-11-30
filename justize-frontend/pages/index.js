import Image from 'next/image'
import logo from '../public/logo.png'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
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
        <section className="">
            <div className="w-full my-40">
                <div className='w-1/2'>
                  <h3 className="text-[#F96270] text-4xl font-Jost font-semibold">Detect Abnormalities.</h3>
                  <h3 className="text-white text-4xl font-Jost font-semibold">Compare in seconds.</h3>
                  <br></br>
                  <p className="text-white text-md text-justify font-Jost">Justize is an open-source AI to compare your case to
                  other similarly past cases. Detect bias in your cases from
                  historical disparities. Are the court decision abnormal?</p>
                  <br></br>
                  <div className='bg-[#f96270] my-8 rounded-lg cursor-pointer hover:bg-[#af454f] transition duration-150 ease-in-out w-1/3'>
                    <Link href='/compare'>
                      <p className='text-center p-2 font-bold text-white text-sm font-Jost'>COMPARE</p>
                    </Link>
                  </div>
                </div>
            </div>
        </section>
      </div>
    </main>
  )
}