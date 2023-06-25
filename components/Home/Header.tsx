import Image from 'next/image'
import PersonHoldingBook from '@/public/assets/personholdingbooks.png'

const Header = () => {
    return (
        <div className='flex items-center'>
            <div className='pl-36 w-2/5'>
                <h1 className='text-blue-600 text-5xl font-medium'>Choose Your Carrer With Best College</h1>
                <p className='leading-8 text-xl my-5'>Choose your best Carrer. We guide you to choose best path with best College.
                    Based on your rank and score, we can show you the best college.You gurantee you to get 100% seat on your wishlist collge.
                </p>
                <button className='bg-blue-500/100 text-white px-36 py-3 rounded-md hover:bg-indigo-600	transition duration-200 ease-out text-lg'>Choose Carrer</button>
            </div>
            <div className='w-3/5'>
                <Image src={PersonHoldingBook} width={800} alt='Person holding Book' loading='lazy'/>
            </div>
        </div>
    )
}

export default Header