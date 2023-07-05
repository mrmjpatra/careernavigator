import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi';
import { TiTick } from 'react-icons/ti';
import Skeleton from 'react-loading-skeleton';

type FilterSectionProps = {
    title: string;
    list: Array<any>;
    onFilterChange: (selected: string, value: string) => void;
    selectedItem: string;
    selected: string,
    name?: string,
    isLoading: boolean
};


const FilteredList: FC<FilterSectionProps> = ({ title,
    onFilterChange, selectedItem, selected, list, name, isLoading }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [filteredList, setFilteredList] = useState(list);

    const filterList = (list: any[], searchValue: string, searchProperty?: string): any[] => {
        if (searchProperty) {
            return list.filter((item) =>
                item[searchProperty].toLowerCase().includes(searchValue.toLowerCase())
            );
        }
        else {
            return list.filter((item: string) =>
                item.toLowerCase().includes(searchValue.toLowerCase())
            );
        }
    };
    useEffect(() => {
        const sList = filterList(list, searchQuery, name)
        setFilteredList(sList);
    }, [list, searchQuery, name]);

    return (
        <div>
            <section className="border-b border-black/10 mb-3 px-4 pb-5">
                <div className="py-3 uppercase font-medium">{isLoading ? <Skeleton width={'6rem'} /> : title} </div>
                <div className="max-h-[165px] overflow-y-auto pr-1">
                    {/* FilterSearch */}
                    <div className="mb-3 sticky top-0 z-10 bg-white">
                        {
                            isLoading ? <Skeleton height={'2.5rem'} /> : (<input
                                type="text"
                                placeholder="Search....."
                                className="w-full pt-2 pr-3 pb-2 pl-9 rounded border border-black"
                                value={searchQuery}
                                id={title}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />)
                        }

                        <FiSearch className="absolute top-3 left-3" />
                    </div>
                    {/* FilterList */}
                    {
                        name ? (<ul>
                            {filteredList?.map((item) => (
                                <li key={item.id} className="flex items-center gap-3 mb-3 relative">
                                    {
                                        isLoading ? <Skeleton circle width={'1.5rem'} height={'1.5rem'} /> : <input
                                            type="radio"
                                            name={title.toLowerCase()}
                                            value={item.value.toLowerCase()}
                                            checked={item.value.toLowerCase() === selectedItem}
                                            onChange={() => onFilterChange(selected, item.value.toLowerCase())}
                                            className="hidden"
                                            id={item.value.toLowerCase() + title}
                                        />
                                    }

                                    {
                                        isLoading ? <Skeleton width={'10rem'} /> :
                                            <label htmlFor={item.value.toLowerCase() + title} className="flex items-center gap-3 mb-3 cursor-pointer">
                                                <span
                                                    className={`w-5 h-5 inline-block border-2 rounded-full ${item.value.toLowerCase() === selectedItem ? 'bg-blue-500 border-blue-500' : 'border-gray-400'
                                                        }`}
                                                >
                                                    {item.value.toLowerCase() === selectedItem && <span><TiTick color="white" /></span>}
                                                </span>
                                                {
                                                    <span>{item.name}</span>
                                                }

                                            </label>
                                    }

                                </li>
                            ))}
                        </ul>) :
                            (
                                <ul>
                                    {
                                        filteredList?.map((list: string) => (
                                            <li key={list} className='flex items-center gap-3 mb-3 relative'>
                                                {
                                                    isLoading ? <Skeleton circle width={'1.5rem'} height={'1.5rem'} /> : <input
                                                        type="radio"
                                                        name="stream"
                                                        value={list.toLowerCase()}
                                                        checked={list.toLowerCase() === selectedItem}
                                                        onChange={() => onFilterChange(selected, list.toLowerCase())}
                                                        className="hidden"
                                                        id={list.toLowerCase() + title}
                                                    />
                                                }
                                                {
                                                    isLoading ? <Skeleton width={'10rem'} /> : <label
                                                        htmlFor={list.toLowerCase() + title}
                                                        className="flex items-center gap-3 mb-3 cursor-pointer"
                                                    >
                                                        <span
                                                            className={`w-5 h-5 inline-block border-2 rounded-full ${list.toLowerCase() === selectedItem ? 'bg-blue-500 border-blue-500' : 'border-gray-400'
                                                                }`}
                                                        >
                                                            {list.toLowerCase() === selectedItem && (
                                                                <span  ><TiTick color='white' /></span>

                                                            )}
                                                        </span>
                                                        <span>{list.toUpperCase()}</span>
                                                    </label>
                                                }


                                            </li>
                                        ))
                                    }
                                </ul>
                            )
                    }
                </div>
            </section>
        </div>
    )
}

export default FilteredList