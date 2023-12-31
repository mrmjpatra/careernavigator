import Image from 'next/image'
import PersonHoldingBook from '@/public/assets/personholdingbooks.png'
import Link from 'next/link'

const Header = () => {
    return (
        <div className='flex md:flex-row flex-col-reverse items-center mb-4'>
            <div className='md:pl-36 md:w-1/2 px-3'>
                <h1 className='text-blue-600 text-2xl mt-4 md:mt-0 md:text-5xl font-medium'>Choose Your Carrer With Best College</h1>
                <p className='md:leading-8 leading-5 text-xl my-5 text-justify'>Choose your best Carrer. We guide you to choose best path with best College.
                    Based on your rank and score, we can show you the best college.You gurantee you to get 100% seat on your wishlist collge.
                </p>
                <Link href={'/colleges'} className='bg-[#094CB9] text-white px-10 py-2 md:px-36 md:py-3 rounded-md hover:bg-indigo-600 transition duration-200 ease-out text-lg w-full md:w-4/5'>Choose Carrer</Link>
            </div>
            <div className='md:w-1/2 w-full flex justify-center'>
                <Image src={PersonHoldingBook} 
                    width={300}
                    height={100}
                    alt='Person holding Book' draggable={false} 
                    loading='eager' 
                    className='md:w-1/2 w-[70%] h-full object-fill' />
            </div>
        </div>
    )
}

export default Header