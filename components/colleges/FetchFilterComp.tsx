'use client'
import { fetchCategoryList } from '@/lib/helper-fetch';
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { FiSearch } from 'react-icons/fi';
import { TiTick } from 'react-icons/ti';
import { useFilterContext } from './FilterContext';


type fetchFilterCompProps = {
    title: string;
    list: fetchCategoryList[];
    selectedItem: string;
    selected: string,
}

const FetchFilterComp = ({ title, list, selected, selectedItem }: fetchFilterCompProps) => {
    const {handleFilterChange}=useFilterContext()
    const [searchQuery, setSearchQuery] = useState('');
    const [visibleItems, setVisibleItems] = useState(10); // Number of items to initially display
    const itemsPerPage = 10; // Number of items to load when scrolling to the bottom
    const scrollThreshold = 200; // Number of pixels from the bottom to trigger loading more items 

    const filterList = useCallback(
        (list: fetchCategoryList[], searchValue: string): fetchCategoryList[] => {
            return list.filter((item) =>
                item['name'].toLowerCase().includes(searchValue.toLowerCase()))
        },
        []
    );

    const filteredList = useMemo(() => {
        return filterList(list, searchQuery);
    }, [list, searchQuery, filterList]);

    // Function to load more items when the user scrolls to the bottom
    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        if (scrollTop + windowHeight >= documentHeight - scrollThreshold) {
            setVisibleItems((prevVisibleItems) => prevVisibleItems + itemsPerPage);
        }
    };

    // Add the scroll event listener when the component mounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Reset visible items when the search query or list changes
    useEffect(() => {
        setVisibleItems(10);
    }, [searchQuery, list]);


    return (
        <div>
            <section className="border-b border-black/10 mb-3 px-4 pb-5">
                <div className="py-3 uppercase font-bold text-xl text-blue-500">
                    {title}
                </div>
                <div className="max-h-[165px] overflow-y-auto pr-1">
                    {/* FilterSearch */}
                    <div className="mb-3 sticky top-0 z-10 bg-white">
                        <input
                            type="text"
                            placeholder="Search....."
                            className="w-full pt-2 pr-3 pb-2 pl-9 rounded border-2 border-indigo-500 "
                            value={searchQuery}
                            id={title}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <FiSearch className="absolute top-3 left-3" color='#0041b9' />
                    </div>
                    <ul>
                        {
                            filteredList.slice(0, visibleItems)?.map(item => <li key={item.id} className="flex items-center gap-3 mb-3 relative">
                                <input
                                    type="radio"
                                    name={title?.toLowerCase()}
                                    value={item.link?.toLowerCase()}
                                    checked={item.link?.toLowerCase() === selectedItem}
                                    onChange={() => handleFilterChange(selected, item.link?.toLowerCase())}
                                    className="hidden"
                                    id={item.link?.toLowerCase() + title}
                                />
                                <label htmlFor={item.link?.toLowerCase() + title} className="flex items-center gap-3 mb-3 cursor-pointer">
                                    <span
                                        className={`w-5 h-5 inline-block border-2 rounded-full ${item.link?.toLowerCase() === selectedItem ? 'bg-blue-500 border-blue-500' : 'border-gray-400'
                                            }`}
                                    >
                                        {item.link?.toLowerCase() === selectedItem && <span><TiTick color="white" /></span>}
                                    </span>
                                    {
                                        <span>{item.name}</span>
                                    }

                                </label>
                            </li>)
                        }
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default FetchFilterComp