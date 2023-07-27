import { convertWord } from '@/utils/functions';
import React, { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi';
import { TiTick } from 'react-icons/ti';
import { useFilterContext } from './CoachingFilterContext';


type SchoolCategoryType = {
  title: string,
  list: string[];
  selected: string
  checked: string
}

const CoachingCategoryComp = ({ title, list, selected, checked }: SchoolCategoryType) => {
  const { handleFilterChange } = useFilterContext()
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredList, setFilteredList] = useState<string[]>(list);
  const [visibleItems, setVisibleItems] = useState(10); // Number of items to initially display
  const itemsPerPage = 10; // Number of items to load when scrolling to the bottom
  const scrollThreshold = 200; // Number of pixels from the bottom to trigger loading more items 


  const filterList = (list: any[], searchValue: string): any[] => {
    return list.filter((item: string) =>
      item.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  useEffect(() => {
    const sList = filterList(list, searchQuery)
    setFilteredList(sList);
  }, [searchQuery, list]);


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
    <section className="border-b border-black/10 mb-3 px-4 pb-5">
      <div className="py-3 uppercase font-bold text-xl text-blue-500">{convertWord(title.toLowerCase())}</div>
      <div className="max-h-[165px] overflow-y-auto pr-1">
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
            filteredList.slice(0, visibleItems)?.map(item =>
              <li key={item} className="flex items-center gap-3 mb-3 relative">
                <input
                  type="radio"
                  name={item.toLowerCase()}
                  value={item}
                  checked={item.toLowerCase() === checked.toLowerCase()}
                  onChange={() => handleFilterChange(selected, item.toLowerCase())}
                  className="hidden"
                  id={item.toLowerCase() + title}
                />
                <label htmlFor={item.toLowerCase() + title} className="flex items-center gap-3 mb-3 cursor-pointer">
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
              </li>)
          }
        </ul>
      </div>
    </section>
  )
}

export default CoachingCategoryComp