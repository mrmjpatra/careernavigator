import syllabus from '@/public/assets/curriculum.png'
import books from '@/public/assets/stack-of-books.png'
import examPaper from '@/public/assets/exam.png'
import projects from '@/public/assets/practice.png'
import note from '@/public/assets/note.png';
import samplePaper from '@/public/assets/documents.png'
import Image from 'next/image';
import Link from 'next/link';
const cardContent = [
    {
        title: 'Syllabus',
        image: syllabus,
        link:'/cbse/syllabus'
    },
    {
        title: 'Books',
        image: books,
        link:'/cbse/books'
    },
    {
        title: 'Exam Paper',
        image: examPaper,
        link:'/cbse/exam-papers'
    },
    {
        title: 'Practical Notes',
        image: note,
        link:'/cbse/practical-notes'
    },
    {
        title: 'Sample Paper',
        image: samplePaper,
        link:'/cbse/sample-paper'
    },
    {
        title: 'Projects',
        image: projects,
        link:'/cbse/projects'
    },
]

const ServiceCard = () => {
    return (
        <div className='grid md:grid-cols-3 md:gap-y-6 sm:grid-cols-2 grid-cols-1 gap-4'>
            {
                cardContent.map(card =>
                    <Link
                        href={card.link}
                        key={card.title}
                        className='flex flex-col gap-6 justify-center cursor-pointer  items-center px-2 py-4 rounded-md shadow-md shadow-indigo-300 bg-indigo-700 text-white h-48 
                        hover:-translate-y-2 hover:shadow-lg hover:shadow-indigo-500 duration-200 ease-in
                        '
                    >
                        <div className=' flex w-12 h-12 justify-center items-center rounded-full text-white after:content-[""] after:absolute after:-z-10 after:bg-indigo-400 after:h-12 after:w-12 after:rounded-full after:opacity-80 after:animate-ping  
                        before:content-[""] z-10
                        after:duration-100 after:ease-in after:delay-200

                        before:absolute before:-z-10 before:bg-indigo-200  before:w-16
                        before:h-16
                        before:rounded-full before:opacity-70 before:animate-ping
                        before:duration-300 before:ease-in 
                        '>

                            <Image src={card.image} alt='Card image' width={100} height={100} className='w-11 h-11 object-fill ' draggable={false} />
                        </div>
                        <p className='font-medium text-xl'>{card.title}</p>
                    </Link>
                )
            }
        </div>
    )
}

export default ServiceCard;


