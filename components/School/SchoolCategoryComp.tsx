import React, { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi';
import { TiTick } from 'react-icons/ti';
import { convertWord } from '../CollegeDetails/CollegeDetails';
import Skeleton from 'react-loading-skeleton';

type SchoolCategoryType = {
  title: string,
  list: string[];
  onFilterChange: (selected: string, value: string) => void;
  selected: string
  checked: string
  isLoading: boolean
}

const SchoolCategoryComp = ({ title, list, onFilterChange, selected, checked, isLoading }: SchoolCategoryType) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredList, setFilteredList] = useState<string[]>(list);

  const filterList = (list: any[], searchValue: string): any[] => {
    return list.filter((item: string) =>
      item.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  useEffect(() => {
    const sList = filterList(list, searchQuery)
    setFilteredList(sList);
  }, [searchQuery, list]);

  return (
    <section className="border-b border-black/10 mb-3 px-4 pb-5">
      <div className="py-3 uppercase font-medium">{isLoading ? <Skeleton width={'6rem'} /> : title}</div>
      <div className="max-h-[165px] overflow-y-auto pr-1">
        <div className="mb-3 sticky top-0 z-10 bg-white">
          {
            isLoading ? <Skeleton height={'2.5rem'} /> : <input
              type="text"
              placeholder="Search....."
              className="w-full pt-2 pr-3 pb-2 pl-9 rounded border border-black"
              value={searchQuery}
              id={title}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          }

          <FiSearch className="absolute top-3 left-3" />
        </div>
        <ul>
          {
            filteredList.map(item =>
              <li key={item} className="flex items-center gap-3 mb-3 relative">
                {
                  isLoading ? <Skeleton circle width={'1.5rem'} height={'1.5rem'} /> : <input
                    type="radio"
                    name={item.toLowerCase()}
                    value={item}
                    checked={item.toLowerCase() === checked.toLowerCase()}
                    onChange={() => onFilterChange(selected, item.toLowerCase())}
                    className="hidden"
                    id={item.toLowerCase() + title}
                  />
                }
                {
                  isLoading ? <Skeleton width={'10rem'} /> : <label htmlFor={item.toLowerCase() + title} className="flex items-center gap-3 mb-3 cursor-pointer">
                    <span
                      className={`w-5 h-5 inline-block border-2 rounded-full ${item.toLowerCase() === checked.toLowerCase() ? 'bg-blue-500 border-blue-500' : 'border-gray-400'
                        }`}
                    >
                      {item.toLowerCase() === checked.toLowerCase() && <span><TiTick color="white" /></span>}
                    </span>
                    {
                      <span>{convertWord(item.toLowerCase())}</span>
                    }
                  </label>
                }
              </li>)
          }
        </ul>
      </div>
    </section>
  )
}

export default SchoolCategoryComp