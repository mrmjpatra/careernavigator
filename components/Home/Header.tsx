import Image from 'next/image'
import PersonHoldingBook from '@/public/assets/personholdingbooks.png'
import Link from 'next/link'

const Header = () => {
    return (
        <div className='flex md:flex-row flex-col-reverse items-center mb-4'>
            <div className='md:pl-36 md:w-1/2 px-3'>
                <h1 className='text-blue-600 text-2xl mt-4 md:mt-0 md:text-5xl font-medium'>Choose Your Carrer With Best College</h1>
                <p className='leading-8 text-xl my-5 text-justify'>Choose your best Carrer. We guide you to choose best path with best College.
                    Based on your rank and score, we can show you the best college.You gurantee you to get 100% seat on your wishlist collge.
                </p>
                <Link href={'/colleges'} className='bg-blue-500/100 text-white px-10 py-2 md:px-36 md:py-3 rounded-md hover:bg-indigo-600 transition duration-200 ease-out text-lg w-full md:w-4/5'>Choose Carrer</Link>
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <Image src={PersonHoldingBook} width={0}
                    height={0}
                    sizes="100vw" 
                    alt='Person holding Book' draggable={false} loading='lazy' 
                    className='w-1/2 h-auto' />
            </div>
        </div>
    )
}

export default Header