'use client'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { fetchArticlesType } from '..';
import Skeleton from 'react-loading-skeleton';
import { convertWord } from '@/utils/functions';

const fetch = async (id: string) => {
    const { data } = await axios.get(`${process.env.HOST}/api/articles/${id}`);
    const details: fetchArticlesType = data.message;
    return details;
}
const Article = ({ params }: { params: { id: string } }) => {
    const { isLoading, error, data: ArticleDetails } = useQuery({
        queryKey: ['Article'],
        queryFn: () => fetch(params.id)
    });
    return (
        <div>
            <div className='w-full md:w-3/4 px-2 py-2'>
                {
                    (isLoading && !ArticleDetails) ? <div>
                        <Skeleton width={'20rem'} height={'3rem'} />
                        <Skeleton height={'12rem'} />
                        <Skeleton height={'12rem'} />
                    </div> :
                        <>
                            {
                                ArticleDetails && <>
                                    <h1 className='text-blue-600 font-bold text-3xl'>{convertWord(ArticleDetails.title.toLowerCase())}</h1>
                                    <div dangerouslySetInnerHTML={{ __html: JSON.parse(ArticleDetails?.content) }}></div>
                                </>
                            }
                        </>
                }

            </div>
        </div>
    )
}

export default Article