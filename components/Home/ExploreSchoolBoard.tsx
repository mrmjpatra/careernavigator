import BackPack from '@/public/assets/backpack.png'
import { exploreschoolboard } from '@/utils/exploresclboard';
import Image from 'next/image'
import Link from 'next/link';
import { MdOutlineArrowBackIos } from 'react-icons/md'
const ExploreSchoolBoard = () => {
    return (
        <div className='py-4 mb-4'>
            <div className='md:w-3/4 w-11/12 mx-auto flex md:flex-row flex-col gap-4 pb-5 md:h-[350px]'>
                <div className='md:w-2/5 flex items-center justify-center md:justify-start'>
                    <Image src={BackPack} alt='BackPack' width={200} height={100} className='cursor-pointer hover:-translate-y-6 transition-all duration-300 ease-in' />
                </div>
                <div className='md:w-3/5'>
                    <div className='flex justify-between pb-5'>
                        <h1 className='md:text-4xl text-2xl text-blue-800'>Explore School Board</h1>
                        <Link href={'/school'} className='text-blue-600 px-3 mt-2 py-1 border rounded border-blue-600 hover:bg-blue-600 hover:text-white transition-all ease-out duration-200'>EXPLORE</Link>
                    </div>
                    <ul className='flex flex-wrap'>
                        {
                            exploreschoolboard.map(list=><li  key={list.id} className='py-2 px-5 border border-black/70 bg-white rounded mr-3 mb-3 min-[125px]'>
                            <Link href={{ pathname: list.link, query: { data: list.data } }} className='flex items-center gap-4 justify-between' >
                                {list.title}
                                <MdOutlineArrowBackIos className='rotate-180' />
                            </Link>
                        </li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ExploreSchoolBoard