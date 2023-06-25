import { v4 as uuid } from 'uuid';
import {BsBook,BsDashSquare} from 'react-icons/bs';
import {LuSchool} from 'react-icons/lu';
import { IconType } from 'react-icons';
import {IoSchoolOutline} from 'react-icons/io5';
import {PiSquaresFour} from 'react-icons/pi'
import {FaScroll} from 'react-icons/fa';


interface ContentItem {
    id: string;
    title: string;
    link: string;
}

interface SubCategoryItem {
    id: string;
    title: string;
    link?: string;
    contents: ContentItem[];
}

export interface CategoryItem {
    category: string;
    scategory: SubCategoryItem[];
}

export interface MenuItem {
    id: string;
    title: string;
    icon:IconType
    menu: CategoryItem[];
}


export const navmenulist: MenuItem[] = [
    {
        id: uuid(),
        title: 'Colleges',
        icon:LuSchool,
        menu: [
            //Enginnering
            {
                category: 'Enginnering',
                scategory: [
                    {
                        id: uuid(),
                        title: 'Colleges By Degrees',
                        contents: [
                            {
                                id: uuid(),
                                title: 'BTech',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'MTech',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'B.Arch',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'BTech + MTech',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Diploma',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'Popular Colleges',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Sanskriti University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'ITS Engineering College',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Sanjay Ghodawat University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Amity University, Punjab',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Global Research Institute of Management & Technology',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Vivekananda Global University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Jaipur National University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'GNA University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Jaypee University, Anoopshahr',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'Top Colleges',
                        contents: [
                            {
                                id: uuid(),
                                title: 'IIT Kharagpur',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Delhi',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Madras',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Kanpur',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Roorkee',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Bombay',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'Collges By Location',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Maharashtra',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Tamil Nadu',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Uttar Pradesh',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Karnataka',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Rajasthan',
                                link: ''
                            },
                        ]
                    },
                ]
            },
            //Management
            {
                category: 'Management',
                scategory: [
                    {
                        id: uuid(),
                        title: 'Colleges By Degrees',
                        contents: [
                            {
                                id: uuid(),
                                title: 'MBA',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'BBA',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Diploma',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'PGDMA',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'BBM',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'Popular Colleges',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Sanskriti University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'MIMA Institute of Management',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Sanjay Ghodawat University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Jagannath University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Global Research Institute of Management & Technology',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Vivekananda Global University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Jaipur National University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'GNA University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Jaypee University, Anoopshahr',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'Top Colleges',
                        contents: [
                            {
                                id: uuid(),
                                title: 'IIT Kharagpur',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Delhi',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Madras',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Kanpur',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Roorkee',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Bombay',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'Collges By Location',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Maharashtra',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Tamil Nadu',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Uttar Pradesh',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Karnataka',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Rajasthan',
                                link: ''
                            },
                        ]
                    },
                ]
            },
            //Commerce & Banking
            {
                category: 'Commerce & Banking',
                scategory: [
                    {
                        id: uuid(),
                        title: 'Colleges By Degrees',
                        contents: [
                            {
                                id: uuid(),
                                title: 'B.Com',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'M.Com',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'B.Com + M.Com',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'BBM',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Certificate',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'Popular Colleges',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Sanskriti University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'ITS Engineering College',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Sanjay Ghodawat University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Amity University, Punjab',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Global Research Institute of Management & Technology',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Vivekananda Global University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Jaipur National University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'GNA University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Jaypee University, Anoopshahr',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'Top Colleges',
                        contents: [
                            {
                                id: uuid(),
                                title: 'IIT Kharagpur',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Delhi',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Madras',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Kanpur',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Roorkee',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Bombay',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'Collges By Location',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Maharashtra',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Tamil Nadu',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Uttar Pradesh',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Karnataka',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Rajasthan',
                                link: ''
                            },
                        ]
                    },
                ]
            },
            //Medical
            {
                category: 'Medical',
                scategory: [
                    {
                        id: uuid(),
                        title: 'Colleges By Degrees',
                        contents: [
                            {
                                id: uuid(),
                                title: 'MBBS',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'MD (Doctor of Medicine)',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'MS (Master of Surgery)',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'BAMS',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'BHMS',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'Popular Colleges',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Sanskriti University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'ITS Engineering College',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Sanjay Ghodawat University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Amity University, Punjab',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Global Research Institute of Management & Technology',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Vivekananda Global University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Jaipur National University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'GNA University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Jaypee University, Anoopshahr',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'Top Colleges',
                        contents: [
                            {
                                id: uuid(),
                                title: 'IIT Kharagpur',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Delhi',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Madras',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Kanpur',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Roorkee',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Bombay',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'Collges By Location',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Maharashtra',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Tamil Nadu',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Uttar Pradesh',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Karnataka',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Rajasthan',
                                link: ''
                            },
                        ]
                    },
                ]
            },
            //Sciences
            {
                category: 'Sciences',
                scategory: [
                    {
                        id: uuid(),
                        title: 'Colleges By Degrees',
                        contents: [
                            {
                                id: uuid(),
                                title: 'B.Sc',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'M.Sc',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'B.Sc + M.Sc',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Diploma',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'MS (Master of Science)',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'Popular Colleges',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Sanskriti University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'ITS Engineering College',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Sanjay Ghodawat University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Amity University, Punjab',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Global Research Institute of Management & Technology',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Vivekananda Global University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Jaipur National University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'GNA University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Jaypee University, Anoopshahr',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'Top Colleges',
                        contents: [
                            {
                                id: uuid(),
                                title: 'IIT Kharagpur',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Delhi',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Madras',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Kanpur',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Roorkee',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Bombay',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'Collges By Location',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Maharashtra',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Tamil Nadu',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Uttar Pradesh',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Karnataka',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Rajasthan',
                                link: ''
                            },
                        ]
                    },
                ]
            },
            //Hotel Management
            {
                category: 'Hotel Management',
                scategory: [
                    {
                        id: uuid(),
                        title: 'Colleges By Degrees',
                        contents: [
                            {
                                id: uuid(),
                                title: 'BHMS',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Diploma',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'B.Sc',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Certificate',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'Popular Colleges',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Sanskriti University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'ITS Engineering College',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Sanjay Ghodawat University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Amity University, Punjab',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Global Research Institute of Management & Technology',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Vivekananda Global University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Jaipur National University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'GNA University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Jaypee University, Anoopshahr',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'Top Colleges',
                        contents: [
                            {
                                id: uuid(),
                                title: 'IIT Kharagpur',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Delhi',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Madras',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Kanpur',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Roorkee',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Bombay',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'Collges By Location',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Maharashtra',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Tamil Nadu',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Uttar Pradesh',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Karnataka',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Rajasthan',
                                link: ''
                            },
                        ]
                    },
                ]
            },
            //Information Technoloy
            {
                category: 'Information Technoloy',
                scategory: [
                    {
                        id: uuid(),
                        title: 'Colleges By Degrees',
                        contents: [
                            {
                                id: uuid(),
                                title: 'BCA',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'MCA',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'B.Sc',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'BCA + MTech',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Diploma',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'Popular Colleges',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Sanskriti University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'ITS Engineering College',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Sanjay Ghodawat University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Amity University, Punjab',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Global Research Institute of Management & Technology',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Vivekananda Global University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Jaipur National University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'GNA University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Jaypee University, Anoopshahr',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'Top Colleges',
                        contents: [
                            {
                                id: uuid(),
                                title: 'IIT Kharagpur',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Delhi',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Madras',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Kanpur',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Roorkee',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Bombay',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'Collges By Location',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Maharashtra',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Tamil Nadu',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Uttar Pradesh',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Karnataka',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Rajasthan',
                                link: ''
                            },
                        ]
                    },
                ]
            },
            //Arts & Humanities
            {
                category: 'Arts & Humanities',
                scategory: [
                    {
                        id: uuid(),
                        title: 'Colleges By Degrees',
                        contents: [
                            {
                                id: uuid(),
                                title: 'BA',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'MA',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'PGDMA',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'BBM',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Diploma',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'Popular Colleges',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Sanskriti University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'ITS Engineering College',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Sanjay Ghodawat University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Amity University, Punjab',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Global Research Institute of Management & Technology',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Vivekananda Global University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Jaipur National University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'GNA University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Jaypee University, Anoopshahr',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'Top Colleges',
                        contents: [
                            {
                                id: uuid(),
                                title: 'IIT Kharagpur',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Delhi',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Madras',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Kanpur',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Roorkee',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Bombay',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'Collges By Location',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Maharashtra',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Tamil Nadu',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Uttar Pradesh',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Karnataka',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Rajasthan',
                                link: ''
                            },
                        ]
                    },
                ]
            },
            //Nursing
            {
                category: 'Nursing',
                scategory: [
                    {
                        id: uuid(),
                        title: 'Colleges By Degrees',
                        contents: [
                            {
                                id: uuid(),
                                title: 'G.N.M.',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'A.N.M.',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'B.Sc',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'M.Sc',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Diploma',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'Popular Colleges',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Sanskriti University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'ITS Engineering College',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Sanjay Ghodawat University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Amity University, Punjab',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Global Research Institute of Management & Technology',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Vivekananda Global University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Jaipur National University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'GNA University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Jaypee University, Anoopshahr',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'Top Colleges',
                        contents: [
                            {
                                id: uuid(),
                                title: 'IIT Kharagpur',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Delhi',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Madras',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Kanpur',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Roorkee',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Bombay',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'Collges By Location',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Maharashtra',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Tamil Nadu',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Uttar Pradesh',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Karnataka',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Rajasthan',
                                link: ''
                            },
                        ]
                    },
                ]
            },

            // Agriculture
            {
                category: 'Agriculture',
                scategory: [
                    {
                        id: uuid(),
                        title: 'Colleges By Degrees',
                        contents: [
                            {
                                id: uuid(),
                                title: 'B.Sc',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'M.Sc',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Diploma',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'Popular Colleges',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Sanskriti University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'ITS Engineering College',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Sanjay Ghodawat University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Amity University, Punjab',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Global Research Institute of Management & Technology',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Vivekananda Global University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Jaipur National University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'GNA University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Jaypee University, Anoopshahr',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'Top Colleges',
                        contents: [
                            {
                                id: uuid(),
                                title: 'IIT Kharagpur',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Delhi',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Madras',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Kanpur',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Roorkee',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Bombay',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'Collges By Location',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Maharashtra',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Tamil Nadu',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Uttar Pradesh',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Karnataka',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Rajasthan',
                                link: ''
                            },
                        ]
                    },
                ]
            },
            //LAW
            {
                category: 'Law',
                scategory: [
                    {
                        id: uuid(),
                        title: 'Colleges By Degrees',
                        contents: [
                            {
                                id: uuid(),
                                title: 'LLB',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'BA + LLB',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'LLM',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'B.Com + LLB',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'BBA + LLB',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'Popular Colleges',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Sanskriti University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'ITS Engineering College',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Sanjay Ghodawat University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Amity University, Punjab',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Global Research Institute of Management & Technology',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Vivekananda Global University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Jaipur National University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'GNA University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Jaypee University, Anoopshahr',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'Top Colleges',
                        contents: [
                            {
                                id: uuid(),
                                title: 'IIT Kharagpur',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Delhi',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Madras',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Kanpur',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Roorkee',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Bombay',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'Collges By Location',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Maharashtra',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Tamil Nadu',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Uttar Pradesh',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Karnataka',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Rajasthan',
                                link: ''
                            },
                        ]
                    },
                ]
            },
            //Pharmacy
            {
                category: 'Pharmacy',
                scategory: [
                    {
                        id: uuid(),
                        title: 'Colleges By Degrees',
                        contents: [
                            {
                                id: uuid(),
                                title: 'B.Pharma',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'M.Pharma',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'B.Pharma+M.Pharma',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Pharm.D.',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'Popular Colleges',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Sanskriti University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'ITS Engineering College',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Sanjay Ghodawat University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Amity University, Punjab',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Global Research Institute of Management & Technology',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Vivekananda Global University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Jaipur National University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'GNA University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Jaypee University, Anoopshahr',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'Top Colleges',
                        contents: [
                            {
                                id: uuid(),
                                title: 'IIT Kharagpur',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Delhi',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Madras',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Kanpur',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Roorkee',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Bombay',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'Collges By Location',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Maharashtra',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Tamil Nadu',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Uttar Pradesh',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Karnataka',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Rajasthan',
                                link: ''
                            },
                        ]
                    },
                ]
            },
            //Education
            {
                category: 'Education',
                scategory: [
                    {
                        id: uuid(),
                        title: 'Colleges By Degrees',
                        contents: [
                            {
                                id: uuid(),
                                title: 'B.Ed',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'M.Ed',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'B.Ed. + M.Ed.',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'B.T.C.',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'Popular Colleges',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Sanskriti University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'ITS Engineering College',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Sanjay Ghodawat University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Amity University, Punjab',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Global Research Institute of Management & Technology',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Vivekananda Global University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Jaipur National University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'GNA University',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Jaypee University, Anoopshahr',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'Top Colleges',
                        contents: [
                            {
                                id: uuid(),
                                title: 'IIT Kharagpur',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Delhi',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Madras',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Kanpur',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Roorkee',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'IIT Bombay',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'Collges By Location',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Maharashtra',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Tamil Nadu',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Uttar Pradesh',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Karnataka',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Rajasthan',
                                link: ''
                            },
                        ]
                    },
                ]
            },
        ]
    },
    {
        id: uuid(),
        title: 'Exam',
        icon:BsBook,
        menu: [
            //Enginnering
            {
                category: 'Enginnering',
                scategory: [
                    {
                        id: uuid(),
                        title: 'JEE Mains',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'JEE Advance',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'BITSAT',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'GATE',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'WBJEE',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                ]
            },
            //Management
            {
                category: 'Management',
                scategory: [
                    {
                        id: uuid(),
                        title: 'CAT',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'XAT',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'NMAT',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'CMAT',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'KIITEE Management',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'MAT',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                ]
            },
            //Commerce & Banking
            {
                category: 'Commerce & Banking',
                scategory: [
                    {
                        id: uuid(),
                        title: 'IBPS PO',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'SBI PO',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'DU JAT',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'CUSAT CAT',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'JMIEE',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                ]
            },
            //Medical
            {
                category: 'Medical',
                scategory: [
                    {
                        id: uuid(),
                        title: 'NEET UG',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'NEET PG',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'JIPMER',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'AIIMS UG',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'AIIMS PG',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                ]
            },
            //Sciences
            {
                category: 'Sciences',
                scategory: [
                    {
                        id: uuid(),
                        title: 'KIITEE',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'CUSAT CAT',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'CUCET',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'GSAT',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'JUET',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                ]
            },
            //Hotel Management
            {
                category: 'Hotel Management',
                scategory: [
                    {
                        id: uuid(),
                        title: 'UPSEE',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'LPUNEST',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'JMIEE',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'IPU CET',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'SAAT',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                ]
            },
            //Information Technoloy
            {
                category: 'Information Technoloy',
                scategory: [
                    {
                        id: uuid(),
                        title: 'OJEE',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'KIITEE',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'JNUEE',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'UPSEE',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'VITMEE',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                ]
            },
            //Arts & Humanities
            {
                category: 'Arts & Humanities',
                scategory: [
                    {
                        id: uuid(),
                        title: 'TISSNET',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'CUCET',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'JUET',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'MDU CEE',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'BHU UET',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                ]
            },
            // Agriculture
            {
                category: 'Agriculture',
                scategory: [
                    {
                        id: uuid(),
                        title: 'TS EAMCET',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'ICAR AIEEA',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'BCECE',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'SAAT',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                ]
            },
            //LAW
            {
                category: 'Law',
                scategory: [
                    {
                        id: uuid(),
                        title: 'CLAT',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'LSAT',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'AP LAWCET',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'AILET',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'SET',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                ]
            },
            //Pharmacy
            {
                category: 'Pharmacy',
                scategory: [
                    {
                        id: uuid(),
                        title: 'VSAT',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'BUAT',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'BCECE',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'HPCET',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                ]
            },
            //Education
            {
                category: 'Education',
                scategory: [
                    {
                        id: uuid(),
                        title: 'UGC NET',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'DUET',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'APSET',
                        link: '',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: ''
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: ''
                            },
                        ]
                    },
                ]
            },
        ]
    },
    {
        id: uuid(),
        title: 'Carrers',
        icon:IoSchoolOutline,
        menu: []
    },
    {
        id: uuid(),
        title: 'CBSE',
        icon:BsDashSquare,
        menu: []
    },
    {
        id: uuid(),
        title: 'State Board',
        icon:FaScroll,
        menu: []
    },
    {
        id: uuid(),
        title: 'More',
        icon:PiSquaresFour,
        menu: []
    },
]