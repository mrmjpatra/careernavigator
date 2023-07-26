import { v4 as uuid } from 'uuid';
import { BsBook, BsDashSquare } from 'react-icons/bs';
import { LuSchool } from 'react-icons/lu';
import { IconType } from 'react-icons';
import { IoSchoolOutline } from 'react-icons/io5';
import { PiSquaresFour } from 'react-icons/pi'
import { FaScroll } from 'react-icons/fa';
import { getFormattedString } from './functions';


interface ContentItem {
    id: string;
    title: string;
    link: string | any;
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
    icon: IconType
    link: string | {
        pathname: string;
        query: {
            data: string;
        };
    };
    menu: CategoryItem[];
}


export const navmenulist: MenuItem[] = [
    {
        id: uuid(),
        title: 'Colleges',
        link: '/colleges',
        icon: LuSchool,
        menu: [
            //Enginnering
            {
                category: 'Engineering',
                scategory: [
                    {
                        id: uuid(),
                        title: 'Colleges By Degrees',
                        contents: [
                            {
                                id: uuid(),
                                title: 'BTech',
                                link: {
                                    pathname: '/colleges',
                                    query: {
                                        stream: 'engineering',
                                        degree: 'btech'
                                    }
                                }
                            },
                            {
                                id: uuid(),
                                title: 'MTech',
                                link: {
                                    pathname: '/colleges',
                                    query: {
                                        stream: 'engineering',
                                        degree: 'mtech'
                                    }
                                }
                            },
                            {
                                id: uuid(),
                                title: 'B.Arch',
                                link: {
                                    pathname: '/colleges',
                                    query: {
                                        stream: 'engineering',
                                        degree: 'barch'
                                    }
                                }
                            },
                            {
                                id: uuid(),
                                title: 'BTech + MTech',
                                link: {
                                    pathname: '/colleges',
                                    query: {
                                        stream: 'engineering',
                                        degree: 'btech-mtech'
                                    }
                                }
                            },
                            {
                                id: uuid(),
                                title: 'Diploma',
                                link: {
                                    pathname: '/colleges',
                                    query: {
                                        stream: 'engineering',
                                        degree: 'diploma'
                                    }
                                }
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
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'ITS Engineering College',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'Sanjay Ghodawat University',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'Amity University, Punjab',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'Global Research Institute of Management & Technology',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'Vivekananda Global University',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'Jaipur National University',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'GNA University',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'Jaypee University, Anoopshahr',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
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
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'IIT Delhi',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'IIT Madras',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'IIT Kanpur',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'IIT Roorkee',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'IIT Bombay',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
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
                                link: {
                                    pathname: '/colleges',
                                    query: {
                                        stream: 'engineering',
                                        state: 'Maharashtra'
                                    }
                                }
                            },
                            {
                                id: uuid(),
                                title: 'Tamil Nadu',
                                link: {
                                    pathname: '/colleges',
                                    query: {
                                        stream: 'engineering',
                                        state: 'Tamil Nadu'
                                    }
                                }
                            },
                            {
                                id: uuid(),
                                title: 'Uttar Pradesh',
                                link: {
                                    pathname: '/colleges',
                                    query: {
                                        stream: 'engineering',
                                        state: 'Uttar Pradesh'
                                    }
                                }
                            },
                            {
                                id: uuid(),
                                title: 'Karnataka',
                                link: {
                                    pathname: '/colleges',
                                    query: {
                                        stream: 'engineering',
                                        state: 'Karnataka'
                                    }
                                }
                            },
                            {
                                id: uuid(),
                                title: 'Rajasthan',
                                link: {
                                    pathname: '/colleges',
                                    query: {
                                        stream: 'engineering',
                                        city: 'Rajasthan'
                                    }
                                }
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
                                link: {
                                    pathname: '/colleges',
                                    query: {
                                        stream: 'management',
                                        degree: 'mba'
                                    }
                                }
                            },
                            {
                                id: uuid(),
                                title: 'BBA',
                                link: {
                                    pathname: '/colleges',
                                    query: {
                                        stream: 'management',
                                        degree: 'bba'
                                    }
                                }
                            },
                            {
                                id: uuid(),
                                title: 'Diploma',
                                link: {
                                    pathname: '/colleges',
                                    query: {
                                        stream: 'management',
                                        degree: 'diploma'
                                    }
                                }
                            },
                            {
                                id: uuid(),
                                title: 'PGDMA',
                                link: {
                                    pathname: '/colleges',
                                    query: {
                                        stream: 'management',
                                        degree: 'pgdma'
                                    }
                                }
                            },
                            {
                                id: uuid(),
                                title: 'BBM',
                                link: {
                                    pathname: '/colleges',
                                    query: {
                                        stream: 'management',
                                        degree: 'bbm'
                                    }
                                }
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
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'MIMA Institute of Management',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'Sanjay Ghodawat University',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'Jagannath University',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'Global Research Institute of Management & Technology',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'Vivekananda Global University',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'Jaipur National University',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'GNA University',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'Jaypee University, Anoopshahr',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
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
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'IIT Delhi',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'IIT Madras',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'IIT Kanpur',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'IIT Roorkee',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'IIT Bombay',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
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
                                link: {
                                    pathname: '/colleges',
                                    query: {
                                        stream: 'management',
                                        state: 'Maharashtra'
                                    }
                                }
                            },
                            {
                                id: uuid(),
                                title: 'Tamil Nadu',
                                link: {
                                    pathname: '/colleges',
                                    query: {
                                        stream: 'management',
                                        state: 'Tamil Nadu'
                                    }
                                }
                            },
                            {
                                id: uuid(),
                                title: 'Uttar Pradesh',
                                link: {
                                    pathname: '/colleges',
                                    query: {
                                        stream: 'management',
                                        state: 'Uttar Pradesh'
                                    }
                                }
                            },
                            {
                                id: uuid(),
                                title: 'Karnataka',
                                link: {
                                    pathname: '/colleges',
                                    query: {
                                        stream: 'management',
                                        state: 'Karnataka'
                                    }
                                }
                            },
                            {
                                id: uuid(),
                                title: 'Rajasthan',
                                link: {
                                    pathname: '/colleges',
                                    query: {
                                        stream: 'management',
                                        state: 'Rajasthan'
                                    }
                                }
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
                                link: {
                                    pathname: '/colleges',
                                    query: {
                                        stream: 'commerce-banking',
                                        degree: 'bcom'
                                    }
                                }
                            },
                            {
                                id: uuid(),
                                title: 'M.Com',
                                link: {
                                    pathname: '/colleges',
                                    query: {
                                        stream: 'commerce-banking',
                                        degree: 'mcom'
                                    }
                                }
                            },
                            {
                                id: uuid(),
                                title: 'B.Com + M.Com',
                                link: {
                                    pathname: '/colleges',
                                    query: {
                                        stream: 'commerce-banking',
                                        degree: 'bcom-mcom'
                                    }
                                }
                            },
                            {
                                id: uuid(),
                                title: 'BBM',
                                link: {
                                    pathname: '/colleges',
                                    query: {
                                        stream: 'commerce-banking',
                                        degree: 'bbm'
                                    }
                                }
                            },
                            {
                                id: uuid(),
                                title: 'Certificate',
                                link: {
                                    pathname: '/colleges',
                                    query: {
                                        stream: 'commerce-banking',
                                        degree: 'certificate'
                                    }
                                }
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
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'ITS Engineering College',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'Sanjay Ghodawat University',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'Amity University, Punjab',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'Global Research Institute of Management & Technology',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'Vivekananda Global University',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'Jaipur National University',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'GNA University',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'Jaypee University, Anoopshahr',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
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
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'IIT Delhi',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'IIT Madras',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'IIT Kanpur',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'IIT Roorkee',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'IIT Bombay',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
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
                                link: {
                                    pathname: '/colleges',
                                    query: {
                                        stream: 'commerce-banking',
                                        city: 'Maharashtra'
                                    }
                                }
                            },
                            {
                                id: uuid(),
                                title: 'Tamil Nadu',
                                link: {
                                    pathname: '/colleges',
                                    query: {
                                        stream: 'commerce-banking',
                                        city: 'Tamil Nadu'
                                    }
                                }
                            },
                            {
                                id: uuid(),
                                title: 'Uttar Pradesh',
                                link: {
                                    pathname: '/colleges',
                                    query: {
                                        stream: 'commerce-banking',
                                        city: 'Uttar Pradesh'
                                    }
                                }
                            },
                            {
                                id: uuid(),
                                title: 'Karnataka',
                                link: {
                                    pathname: '/colleges',
                                    query: {
                                        stream: 'commerce-banking',
                                        city: 'Karnataka'
                                    }
                                }
                            },
                            {
                                id: uuid(),
                                title: 'Rajasthan',
                                link: {
                                    pathname: '/colleges',
                                    query: {
                                        stream: 'commerce-banking',
                                        city: 'Rajasthan'
                                    }
                                }
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
                                link: {
                                    pathname: '/colleges',
                                    query: {
                                        stream: 'medical',
                                        degree: 'mbbs'
                                    }
                                }
                            },
                            {
                                id: uuid(),
                                title: 'MD (Doctor of Medicine)',
                                link: {
                                    pathname: '/colleges',
                                    query: {
                                        stream: 'medical',
                                        degree: 'md'
                                    }
                                }
                            },
                            {
                                id: uuid(),
                                title: 'MS (Master of Surgery)',
                                link: {
                                    pathname: '/colleges',
                                    query: {
                                        stream: 'medical',
                                        degree: 'ms'
                                    }
                                }
                            },
                            {
                                id: uuid(),
                                title: 'BAMS',
                                link: {
                                    pathname: '/colleges',
                                    query: {
                                        stream: 'medical',
                                        degree: 'bams'
                                    }
                                }
                            },
                            {
                                id: uuid(),
                                title: 'BHMS',
                                link: {
                                    pathname: '/colleges',
                                    query: {
                                        stream: 'medical',
                                        degree: 'bhms'
                                    }
                                }
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
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'ITS Engineering College',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'Sanjay Ghodawat University',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'Amity University, Punjab',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'Global Research Institute of Management & Technology',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'Vivekananda Global University',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'Jaipur National University',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'GNA University',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'Jaypee University, Anoopshahr',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
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
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'IIT Delhi',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'IIT Madras',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'IIT Kanpur',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'IIT Roorkee',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
                            },
                            {
                                id: uuid(),
                                title: 'IIT Bombay',
                                link: `/colleges/${getFormattedString('Sanskriti University'), '-'}`
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
                                link: {
                                    pathname: '/colleges',
                                    query: {
                                        stream: 'medical',
                                        city: 'Tamil Nadu'
                                    }
                                }
                            },
                            {
                                id: uuid(),
                                title: 'Tamil Nadu',
                                link: {
                                    pathname: '/colleges',
                                    query: {
                                        stream: 'medical',
                                        city: 'Tamil Nadu'
                                    }
                                }
                            },
                            {
                                id: uuid(),
                                title: 'Uttar Pradesh',
                                link: {
                                    pathname: '/colleges',
                                    query: {
                                        stream: 'medical',
                                        city: 'Uttar Pradeshu'
                                    }
                                }
                            },
                            {
                                id: uuid(),
                                title: 'Karnataka',
                                link: {
                                    pathname: '/colleges',
                                    query: {
                                        stream: 'medical',
                                        city: 'Karnataka'
                                    }
                                }
                            },
                            {
                                id: uuid(),
                                title: 'Rajasthan',
                                link: {
                                    pathname: '/colleges',
                                    query: {
                                        stream: 'medical',
                                        city: 'Rajasthan'
                                    }
                                }
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
        link: '/exam',
        icon: BsBook,
        menu: [
            //Enginnering
            {
                category: 'Enginnering',
                scategory: [
                    {
                        id: uuid(),
                        title: 'JEE Mains',
                        link: '/exam/jee-mains',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: {
                                    pathname: '/exam/jee-mains',
                                    query: {
                                        activeTab: '3'
                                    }
                                }
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: {
                                    pathname: '/exam/jee-mains',
                                    query: {
                                        activeTab: '7'
                                    }
                                }
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: {
                                    pathname: '/exam/jee-mains',
                                    query: {
                                        activeTab: '6'
                                    }
                                }
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: {
                                    pathname: '/exam/jee-mains',
                                    query: {
                                        activeTab: '8'
                                    }
                                }
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: {
                                    pathname: '/exam/jee-mains',
                                    query: {
                                        activeTab: '10'
                                    }
                                }
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'JEE Advance',
                        link: '/exam/jee-advance',
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
                        link: '/exam/bitsat',
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
                        link: '/exam/gate',
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
                        link: '/exam/wbjee',
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
                        link: '/exam/cat',
                        contents: [
                            {
                                id: uuid(),
                                title: 'Eligibility',
                                link: {
                                    pathname: '/exam/cat',
                                    query: {
                                        activeTab: '3'
                                    }
                                }
                            },
                            {
                                id: uuid(),
                                title: 'Syllabus',
                                link: {
                                    pathname: '/exam/cat',
                                    query: {
                                        activeTab: '7'
                                    }
                                }
                            },
                            {
                                id: uuid(),
                                title: 'Exam Pattern',
                                link: {
                                    pathname: '/exam/cat',
                                    query: {
                                        activeTab: '6'
                                    }
                                }
                            },
                            {
                                id: uuid(),
                                title: 'How to Prepare',
                                link: {
                                    pathname: '/exam/cat',
                                    query: {
                                        activeTab: '8'
                                    }
                                }
                            },
                            {
                                id: uuid(),
                                title: 'Previous Year Question Paper',
                                link: {
                                    pathname: '/exam/cat',
                                    query: {
                                        activeTab: '10'
                                    }
                                }
                            },
                        ]
                    },
                    {
                        id: uuid(),
                        title: 'XAT',
                        link: '/exam/xat',
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
                        link: '/exam/nmat',
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
                        link: '/exam/cmat',
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
                        link: '/exam/kiitee',
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
                        link: '/exam/mat',
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
                        link: '/exam/ibps-po',
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
                        link: '/exam/sbi-po',
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
                        link: '/exam/du-jat',
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
                        link: '/exam/cusat-cat',
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
                        link: '/exam/jmiee',
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
                        link: '/exam/neet',
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
                        link: '/exam/neet-pg',
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
                        link: '/exam/jipmer',
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
                        link: '/exam/aiims',
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
                        link: '/exam/aiims-pg',
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
                        link: '/exam/kiitee',
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
                        link: '/exam/cusat-cat',
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
                        link: '/exam/cucet',
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
                        link: '/exam/gsat',
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
                        link: '/exam/juet',
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
                        link: '/exam/upsee',
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
                        link: '/exam/lpunest',
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
                        link: '/exam/jmiee',
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
                        link: '/exam/ipu-cet',
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
                        link: '/exam/saat',
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
                        link: '/exam/ojee',
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
                        link: '/exam/kiitee',
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
                        link: '/exam/jnuee',
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
                        link: '/exam/upsee',
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
                        link: '/exam/vitmee',
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
                        link: '/exam/tissnet',
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
                        link: '/exam/cucet',
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
                        link: '/exam/juet',
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
                        link: '/exam/mdu-cee',
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
                        link: '/exam/bhu-uet',
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
                        link: '/exam/ts-eamcet',
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
                        link: '/exam/icar/aieea',
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
                        link: '/exam/bcece',
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
                        link: '/exam/saat',
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
                        link: '/exam/clat',
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
                        link: '/exam/lsat',
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
                        link: '/exam/ap-lawcet',
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
                        link: '/exam/ailet',
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
                        link: '/exam/set',
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
                        link: '/exam/vsat',
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
                        link: '/exam/buat',
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
                        link: '/exam/bcece',
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
                        link: '/exam/hpcet',
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
                        link: '/exam/ugc-net',
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
                        link: '/exam/duet',
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
                        link: '/exam/apset',
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
        title: 'Articles',
        link: '/articles',
        icon: IoSchoolOutline,
        menu: []
    },
    {
        id: uuid(),
        title: 'CBSE',
        link: '/cbse',
        icon: BsDashSquare,
        menu: []
    },
    {
        id: uuid(),
        title: 'CHSE',
        link: {
            pathname: '/schools',
            query: {
                data: 'chse'
            }
        },
        icon: FaScroll,
        menu: []
    },
    {
        id: uuid(),
        title: 'Contact',
        link: '/contact',
        icon: PiSquaresFour,
        menu: []
    },
]