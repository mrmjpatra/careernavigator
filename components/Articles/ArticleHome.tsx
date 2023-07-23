'use client'
import React, { useEffect, useRef, useState } from 'react'
import ArticleRow from './ArticleRow';
import { fetchArticlesType } from '@/app/articles';

const ArticleHome = ({ list }: { list: fetchArticlesType[] }) => {
    const [displayedColleges, setDisplayedColleges] = useState(list);
    const loadMoreRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setDisplayedColleges((prev) => [
                    ...prev,
                    ...list.slice(prev.length, prev.length + 2),
                ]);
            }
        });

        if (loadMoreRef.current) {
            observer.observe(loadMoreRef.current);
        }
        return () => observer.disconnect();
    }, [list]);

    useEffect(() => {
        const arrayList = list.slice(0, 1);
        setDisplayedColleges(arrayList);
    }, [list]);

    return (
        <>
            {
                displayedColleges?.map(arti => <ArticleRow key={arti.id} {...arti} />)
            }
            <div ref={loadMoreRef}></div>
        </>
    )
}

export default ArticleHome