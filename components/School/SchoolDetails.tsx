import axios from 'axios';
import Image from 'next/image';
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { fetchIndividualSchoolData } from '@/app/schools';
import { convertWord } from '@/utils/functions';
import { Poppins } from 'next/font/google';
import IndividualSchoolMenu from './IndividualSchoolMenu';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'] })


const fetch = async (id: string) => {
    const { data } = await axios.get(`${process.env.HOST}/api/school/${id}`);
    const details: fetchIndividualSchoolData = data.message;
    return details;
}

const SchoolDetails = async ({ id }: { id: string }) => {
    const schoolData = await fetch(id);
    return (
        <div>
            {/* Head */}
            <div className="relative">
                <div className="relative h-72  overflow-hidden">
                    <Image src={schoolData?.schoolPhoto.downloadUrl} alt="college banner"
                        fill loading="eager" />
                </div>
                <div className="bg-black/50 absolute top-0 left-0 h-full w-full">
                    <div className="absolute md:top-1/4 md:left-[10%] top-[20%] left-[5%]">
                        <h1 className={`text-white text-4xl ${poppins.className}`} >{convertWord(schoolData?.schoolName)}</h1>
                        <div className="flex my-5 gap-2 items-center">
                            <span className="text-white flex bg-blue-600 rounded-full p-1 md:p-3">
                                <MdOutlinePersonOutline size={'1.5rem'} color="white" className=" text-white" />
                            </span>
                            <span className="text-white">{convertWord(schoolData?.ownership)}</span>
                            <span className="text-white flex bg-blue-600 rounded-full p-1 md:p-3">
                                <FaLocationDot size={'1.5rem'} color="white" />
                            </span>
                            <span className="text-white">{convertWord(schoolData?.city)}({convertWord(schoolData?.state)})</span>
                        </div>
                    </div>
                </div>
            </div>
            <IndividualSchoolMenu schoolData={schoolData} />
        </div>
    )
}

export default SchoolDetails