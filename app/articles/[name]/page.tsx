import ArticleCard from '@/components/Articles/ArticleCard'
import { convertWord, getFormattedString } from '@/utils/functions';
import axios from 'axios';
import { Poppins } from 'next/font/google';
import { BsFillEmojiFrownFill } from 'react-icons/bs';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'] })

const getMetaData = async (title: string) => {
    try {
        const { data } = await axios.get(`${process.env.HOST}/api/articles/name/${getFormattedString(title)}`);
        const name = convertWord(data.message.title);
        const desc: string = data.message.content;
        const description = desc.replace(/<[^>]+>/g, '');
        return { name, description };
    } catch (error) {
        return {
            name: 'Articles',
            description: 'Articles'
        }
    }
}

const getArticleId = async (collegeName: string) => {
    try {
        const { data } = await axios.get(`${process.env.HOST}/api/articles/name/${getFormattedString(collegeName)}`);
        return data.message.id;
    } catch (error) {
        return null;
    }
}

export async function generateMetadata({ params }: { params: { name: string } }) {
    const { name, description } = await getMetaData(params.name);
    return { title: name, description };
}

const Article = async ({ params }: { params: { name: string } }) => {
    const id = await getArticleId(params.name)
    if (!id) {
        return (
            <div className="px-4 py-5 flex flex-col space-y-5 justify-center items-center">
                <div>
                    <span className="bg-red-700 text-white rounded-full p-4 flex">
                        <BsFillEmojiFrownFill size={'2rem'} />
                    </span>
                </div>
                <h1 className={`text-red-900 text-4xl font-bold ${poppins.className}`}>No Details Found</h1>
            </div>
        )
    }
    return (
        <div>
            <ArticleCard id={id} />
        </div>
    )
}

export default Article