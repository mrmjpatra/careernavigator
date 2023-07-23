import ArticleCard from '@/components/Articles/ArticleCard'
import { convertWord, getFormattedString } from '@/utils/functions';
import axios from 'axios';


const getMetaData = async (title: string) => {
    const { data } = await axios.get(`${process.env.HOST}/api/articles/name/${getFormattedString(title)}`);
    const name = convertWord(data.message.title);
    const desc: string = data.message.content;
    const description = desc.replace(/<[^>]+>/g, '');
    return { name, description };
}

const getCollegeId = async (collegeName: string) => {
    const { data } = await axios.get(`${process.env.HOST}/api/articles/name/${getFormattedString(collegeName)}`);
    return data.message.id;
}

export async function generateMetadata({ params }: { params: { name: string } }) {
    const { name, description } = await getMetaData(params.name);
    return { title: name, description };
}

const Article = async ({ params }: { params: { name: string } }) => {
    const id = await getCollegeId(params.name)

    return (
        <div>
            <ArticleCard id={id} />
        </div>
    )
}

export default Article