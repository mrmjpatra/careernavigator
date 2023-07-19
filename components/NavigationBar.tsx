'use client'
import { CategoryItem, MenuItem, navmenulist } from "@/utils/navmenulist"
import Image from "next/image"
import collegedekhologo from '@/public/assets/collegedekhologo.svg'
import styles from '@/styles/navigationbar.module.scss'
import { createElement, useEffect, useRef, useState } from "react"
import { HiOutlineBars3BottomRight } from 'react-icons/hi2'
import { FaXmark } from 'react-icons/fa6';
import { IoChevronBackOutline } from 'react-icons/io5'
import Link from "next/link"
const NavigationBar = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.body.addEventListener("click", handleClickOutside);

        return () => {
            document.body.removeEventListener("click", handleClickOutside);
        };
    }, []);


    return (
        <nav className="bg-[#F2F6F9] py-2 navbar sticky top-0 z-20 " ref={menuRef}>
            <div className="sm:w-[640px] md:w-[768px] lg:w-[1200px] max-w-[1300px] mx-auto flex  justify-between md:justify-start">
                {/* logo */}
                <Link href={'/'} >
                    <Image src={collegedekhologo} width={100} alt="logo" style={{ backgroundColor: 'red' }} />
                </Link>
                {/* menu */}
                {/* Mobile View */}
                <div className="relative w-full md:hidden">
                    <div className="cursor-pointer flex md:hidden justify-end">
                        <HiOutlineBars3BottomRight
                            size={'3rem'}
                            onClick={(event) => {
                                event.nativeEvent.stopPropagation();
                                setOpen(true);
                            }}
                            className={`${open ? 'hidden' : 'block'} transition-all duration-500 ease-linear`}
                        />
                        <FaXmark
                            size={'3rem'}
                            onClick={(event) => {
                                event.nativeEvent.stopPropagation();
                                setOpen(false);
                            }}
                            className={`${!open ? 'hidden' : 'block'} transition-all duration-500 ease-linear`}
                        />
                    </div>
                    <div className={`${open ? 'translate-x-[0px]' : 'translate-x-[340px]'}  fixed right-0 top-[8%] w-[340px] pb-3 z-10 rounded bg-white transition-all duration-500 ease-in-out`}>
                        <div className="p-5 bg-sky-600 text-white">
                            <h3>Hi Welcome to Carrer Navigator!</h3>
                        </div>
                        <ul>
                            {
                                navmenulist.map(menu =>
                                    // menu
                                    <li key={menu.id} className="px-5 cursor-pointer">

                                        {/* submenu */}
                                        <div>
                                            <MenuItemComponentMobile key={menu.id} {...menu} />
                                        </div>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>

                {/* Desktop VIew */}
                <div className="gap-2 relative w-3/4 hidden md:flex">
                    {
                        navmenulist.map(menu =>
                            <MenuItemComponent key={menu.id} {...menu} />
                        )
                    }
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar;

// Header Menu
const MenuItemComponent: React.FC<MenuItem> = ({ title, menu }) => {
    const [isHovered, setIsHovered] = useState(false);
    const len = menu.length;
    return (
        <>
            <div className="p-0 w-full relative group " onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <h2 className="font-bold p-3 cursor-pointer ">{title}</h2>
                <div className="relative w-[100%]">
                    {
                        len !== 0 &&
                        <div className={`${isHovered ? 'visible' : 'hidden'} w-52  px-5 py-4  absolute  left-0 right-0 -bottom-[520px] top-0 z-10 transition-all duration-500 ease-in rounded-md shadow-md bg-blue-500 text-white`}>
                            {
                                menu.map(category => {
                                    return (
                                        <Dropdown key={category.category} {...category} />
                                    )
                                })
                            }
                        </div>
                    }
                </div>
                <div className="hidden md:block group-hover:bg-gradient-to-r from-[#ff0844]  to-[#ff8b67] md:w-24 h-1 absolute bottom-0 z-10 left-0 transition-all duration-700 ease-in-out rounded-sm scale-0 group-hover:scale-75 mb-2">
                </div>
            </div>
        </>
    );
};

const Dropdown: React.FC<CategoryItem> = ({ category, scategory }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div key={category} className="mb-2 group/item" onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)} >
            <h3 className="font-bold cursor-pointer">{category}</h3>

            <div className={`${isHovered ? 'scale-100' : 'scale-0'}  absolute z-10 left-[90%] top-0  px-5 py-4 bg-slate-50 t text-black grid grid-cols-3 w-[768px] h-[520px] transition-all duration-200 ease-in-out`}>
                {scategory.map((subcategory) => (
                    <div key={subcategory.id} className="ml-2">
                        <Link href={subcategory.link??'/'} className="m-0 font-bold">{subcategory.title}</Link>
                        <ul className="m-0 pl-2">
                            {subcategory.contents.map((content) =>{
                                return(
                                    (
                                        <li key={content.id} className="list-none mb-1">
                                            <Link href={content.link}>{content.title}</Link>
                                        </li>
                                    )
                                )
                            })}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

// Mobile View
const MenuItemComponentMobile: React.FC<MenuItem> = ({ title, menu, icon }) => {
    const [isHovered, setIsHovered] = useState(false);
    const len = menu.length;
    return (
        <>
            <div className="p-0 w-full relative group"
                onMouseLeave={() => setIsHovered(false)}>
                <div className="text-left font-medium border-b-[1px] border-blue-600 py-3">
                    <div className="flex items-center gap-x-2 relative" onClick={() => setIsHovered(true)}>
                        <div className="bg-blue-600 text-white rounded-xl p-2 text-2xl">
                            {createElement(icon)}
                        </div>
                        {title}
                        <div className="">
                            <span className="text-2xl text-blue-600 absolute right-[10%] top-[15%]"> <IoChevronBackOutline className="rotate-180"/></span>
                        </div>
                    </div>
                </div>
                {
                    len !== 0 &&
                    <div className={`${isHovered ? 'translate-x-[0px]' : 'translate-x-[340px]'} fixed right-0 top-0 w-[340px] rounded bg-white transition-all duration-500 ease-in-out z-10`}>
                        <div className="flex items-center p-3 bg-blue-600 text-white" onClick={() => setIsHovered(false)}>
                            <IoChevronBackOutline size={'1.5rem'} />
                            <span>{title}</span>
                        </div>
                        <div className="px-4 py-2">
                            {
                                menu.map(category => {
                                    return (
                                        <DropDownMobile key={category.category} {...category} />
                                    )
                                })
                            }
                        </div>
                    </div>
                }
            </div>
        </>
    );
};
const DropDownMobile: React.FC<CategoryItem> = ({ category, scategory }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div key={category} onMouseLeave={() => setIsHovered(false)} >
            <div className="mb-2  border-b-[1px] border-blue-600" onClick={() => setIsHovered(true)}>
                <h3 className="font-bold cursor-pointer mb-2">{category}</h3>
            </div>
            <div className={`${isHovered ? 'translate-x-[0px]' : 'translate-x-[340px]'} fixed right-0 top-0 w-[340px] h-full overflow-y-scroll overflow-x-hidden bg-white transition-all duration-500 ease-in-out rounded z-10`}>
                <div className="flex items-center p-3 bg-blue-600 text-white" onClick={() => setIsHovered(false)}>
                    <IoChevronBackOutline size={'1.5rem'} />
                    <span>{category}</span>
                </div>
                <div className="px-4 py-2">
                    {scategory.map((subcategory) => (
                        <div key={subcategory.id} className="ml-2">
                            <h4 className="m-0 font-bold">{subcategory.title}</h4>
                            <ul className="m-0 pl-2">
                                {subcategory.contents.map((content) => (
                                    <li key={content.id} className="list-none mb-1">
                                        <Link href={content.link}>{content.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}