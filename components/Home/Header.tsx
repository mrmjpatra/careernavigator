import Image from 'next/image'
import PersonHoldingBook from '@/public/assets/personholdingbooks.png'

const Header = () => {
    return (
        <div className='flex md:flex-row flex-col-reverse items-center mb-4'>
            <div className='md:pl-36 md:w-1/2 pl-4'>
                <h1 className='text-blue-600 text-4xl mt-4 md:mt-0 md:text-5xl font-medium'>Choose Your Carrer With Best College</h1>
                <p className='leading-8 text-xl my-5 text-justify'>Choose your best Carrer. We guide you to choose best path with best College.
                    Based on your rank and score, we can show you the best college.You gurantee you to get 100% seat on your wishlist collge.
                </p>
                <button className='bg-blue-500/100 text-white px-36 py-3 rounded-md hover:bg-indigo-600	transition duration-200 ease-out text-lg'>Choose Carrer</button>
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <Image src={PersonHoldingBook} width={400} alt='Person holding Book' draggable={false} loading='lazy'/>
            </div>
        </div>
    )
}

export default Header