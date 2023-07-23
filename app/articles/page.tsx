import { fetchArticlesType } from '.';
import ArticleHome from '@/components/Articles/ArticleHome';
import { sortArray } from '@/utils/functions';

const fetchData = async (): Promise<fetchArticlesType[]> => {
    const res = await fetch(`${process.env.HOST}/api/articles`,{ next: { revalidate: 10 } })
    const data = await res.json();
    return data.message;
}

const ArticlesHome = async () => {

    const articles: fetchArticlesType[] = await fetchData(); // Assuming fetchData returns fetchArticlesType[]
    const sortedArticles = sortArray(articles, 'createdAt');

    return (
        <div>
            <h1 className='text-xl md:text-3xl font-bold text-blue-500 text-center my-3'>Articles</h1>
            <hr className='w-1/2 bg-blue-500 mx-auto h-1' />
            <div className='md:w-3/4 md:mx-auto py-4 px-3 md:px-0 space-y-4'>
                <ArticleHome list={sortedArticles} />
            </div>
        </div>
    )
}

export default ArticlesHome;


