import { fetchArticlesType } from '@/app/articles'
import Link from 'next/link'
import React from 'react'
import { checkLength, convertWord, getFormatedDate, getFormattedString } from '@/utils/functions'
import Skeleton from 'react-loading-skeleton'

const ArticleRow = ({ id, content, title, updatedAt }: fetchArticlesType) => {
    const desc = checkLength((JSON.parse(content)), 100);

    return (
        <div>
            <Link href={`/articles/${getFormattedString(title,'-')}`} className='text-2xl text-blue-500 font-bold hover:text-red-500 ' >
                <h2>{convertWord(title) || <Skeleton/> }</h2>
            </Link>
            <div dangerouslySetInnerHTML={{ __html: desc }} className='text-gray-800 pl-2'>
            </div>
            <h5 className='text-gray-700 pl-1'>Published Date: {getFormatedDate(updatedAt)}</h5>
            <hr className='h-1 text-gray-200' />
        </div>
    )
}

export default ArticleRow