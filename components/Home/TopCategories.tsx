import { IconType } from 'react-icons';
import { BsBook } from 'react-icons/bs'
import { ImHammer2 } from 'react-icons/im'
import { FiSettings } from 'react-icons/fi'
import { BiPlusMedical, BiInjection } from 'react-icons/bi'
import { IoFlaskOutline, IoSchoolOutline } from 'react-icons/io5'
import { FaHotel } from 'react-icons/fa'
import { MdComputer } from 'react-icons/md'
import { GiBlackBook } from 'react-icons/gi'
import { AiOutlineMedicineBox } from 'react-icons/ai'
import { v4 as uuid } from 'uuid'
import { createElement } from 'react';

const TopCategories = () => {
    return (
        <div className='bg-white'>

            <div className=' w-11/12 mx-auto md:py-4 mb-8'>
                <h1 className='font-medium text-2xl md:text-4xl mb-4 text-blue-800' >Explore Top College</h1>
                <ul className='grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-10'>
                    {
                        TopCollegeList.map(list =>
                            <li key={list.id} className='rounded shadow-lg bg-indigo-50 shadow-indigo-600/20 cursor-pointer group'>
                                <div className='px-3 py-5 flex items-center gap-3 relative'>
                                    <span className='text-xl md:text-3xl transition-all ease-out duration-200 -translate-y-0 group-hover:-translate-y-3 bg-indigo-600 rounded-3xl p-3 text-white'> {createElement(list.icon)}</span>
                                    <div className='flex flex-col w-full'>
                                        <span className='text-2xl '>{list.title}</span>
                                        <span>Explore</span>
                                    </div>
                                </div>
                            </li>)
                    }
                </ul>
            </div>
        </div>

    )
}

export default TopCategories;

type TopCollgeListType = {
    id: string,
    icon: IconType,
    title: string
}
const TopCollegeList: TopCollgeListType[] = [
    {
        id: uuid(),
        icon: FiSettings,
        title: 'Enginnering'
    },
    {
        id: uuid(),
        icon: BsBook,
        title: 'MBA'
    },
    {
        id: uuid(),
        icon: BsBook,
        title: 'Commerce'
    },
    {
        id: uuid(),
        icon: BiPlusMedical,
        title: 'Medical'
    },
    {
        id: uuid(),
        icon: IoFlaskOutline,
        title: 'Science'
    },
    {
        id: uuid(),
        icon: FaHotel,
        title: 'Hotel Mgmt'
    },
    {
        id: uuid(),
        icon: MdComputer,
        title: 'IT'
    },
    {
        id: uuid(),
        icon: GiBlackBook,
        title: 'Arts'
    },
    {
        id: uuid(),
        icon: BiInjection,
        title: 'Nursing'
    },
    {
        id: uuid(),
        icon: ImHammer2,
        title: 'Law'
    },
    {
        id: uuid(),
        icon: AiOutlineMedicineBox,
        title: 'Pharmacy'
    },
    {
        id: uuid(),
        icon: IoSchoolOutline,
        title: 'Education'
    },
]