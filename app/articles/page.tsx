'use client'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { fetchArticlesType } from '.';
import ArticleRow from '@/components/Articles/ArticleRow';
import Skeleton from 'react-loading-skeleton';

const fetch = async () => {
    const { data } = await axios.get(`${process.env.HOST}/api/articles`);
    const details: fetchArticlesType[] = data.message;
    return details;
}
const ArticlesHome = () => {
    const { isLoading, error, data: allArticles } = useQuery({
        queryKey: ['allArticles'],
        queryFn: () => fetch()
    });
    const [sortedArticles, setSortedArticles] = useState<fetchArticlesType[]>();
    useEffect(() => {
        if (!isLoading && !error && allArticles) {
            const sortedArray = allArticles.sort((a, b) => new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf());
            setSortedArticles(sortedArray);
        }

    }, [isLoading, error, allArticles])

    return (
        <div>
            <h1 className='text-xl md:text-3xl font-bold text-blue-500 text-center my-3'>Articles</h1>
            <hr className='w-1/2 bg-blue-500 mx-auto h-1' />

            <div className='md:w-3/4 md:mx-auto py-4 px-3 md:px-0 space-y-4'>
                {
                    isLoading && <>
                        <div>
                            <Skeleton width={'20rem'} height={'3rem'} />
                            <Skeleton height={'12rem'} />
                            <Skeleton height={'1rem'} width={'5rem'} />
                        </div>
                        <div>
                            <Skeleton width={'20rem'} height={'3rem'} />
                            <Skeleton height={'12rem'} />
                            <Skeleton height={'1rem'} width={'5rem'} />
                        </div>
                    </>
                }
                {
                    sortedArticles?.map(arti => <ArticleRow key={arti.id} {...arti} />)
                }
            </div>
        </div>
    )
}

export default ArticlesHome