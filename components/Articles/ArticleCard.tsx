import { convertWord } from '@/utils/functions';
import { fetchArticlesType } from '@/app/articles';


async function getArticleDetails(id: string) {
    const res = await fetch(`${process.env.HOST}/api/articles/${id}`)
    const json = await res.json()
    return json.message
}

const ArticleCard = async ({ id }: { id: string }) => {
    const articlesData: fetchArticlesType = await getArticleDetails(id);

    return (
        <div className='w-full md:mx-auto md:w-3/4 px-2 py-6'>
            {
                articlesData && <>
                    <h1 className='text-blue-600 font-bold text-3xl'>{convertWord(articlesData.title.toLowerCase())}</h1>
                    <div dangerouslySetInnerHTML={{ __html: JSON.parse(articlesData?.content) }}></div>
                </>
            }

        </div>
    )
}

export default ArticleCard