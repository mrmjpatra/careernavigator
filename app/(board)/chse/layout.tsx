import { Metadata } from "next";
import { ReactNode } from "react";

const baseUrl = 'https://careernavigator.vercel.app'

export const metadata: Metadata = {
    title: "CBSE",
    description: "The Central Board of Secondary Education (CBSE) is one of the most prestigious and preferred educational boards in India. CBSE Board aims to provide holistic and healthy education to all its learners so that students can get adequate space to develop mentally and physically. CBSE Board is known for its comprehensive syllabus and well-structured exam pattern, which helps students to get a detailed idea about the entire curriculum. There are around 20,102 schools under the board which follow the NCERT curriculum.",
    keywords: ['Carrer Navigator', 'Best Colleges', 'Exams', 'Best Coachings', 'Best School', 'Choose Carrer', "top colleges", 'university top', 'college university', 'university colleges', 'colleges university', 'popular colleges', 'career navigator', 'university career', 'global colleges', 'career university', 'navigation career', 'iit top colleges', 'university navigator', 'university popular', 'navigator career'],
    creator: 'Mrutyunjaya Patra',
    publisher: 'Mrutyunjaya Patra',
    authors: [{ name: 'mrmjpatra' }, { name: 'mrmjpatra', url: baseUrl }],
    colorScheme: 'light',
    openGraph: {
        title: 'Carrer Navigator',
        description: 'Choose your best Carrer. We guide you to choose best path with best College. Based on your rank and score, we can show you the best college.You gurantee you to get 100% seat on your wishlist collge.',
        url: baseUrl,
        siteName: 'Carrer Navigator',
        images: [
            {
                url: `${baseUrl}/opengraph-image?60c1579eb90e4b11`,
                width: 800,
                height: 600,
            },
        ],
        locale: 'en-US',
        type: 'website',

    },
    icons: {
        icon: [{ url: '/icon.png' }, new URL('/icon.png', baseUrl)],
        shortcut: ['/shortcut-icon.png'],
        apple: [
            { url: '/apple-icon.png' },
            { url: '/apple-icon-x3.png', sizes: '180x180', type: 'image/png' },
        ],
        other: [
            {
                rel: 'apple-touch-icon-precomposed',
                url: '/apple-touch-icon-precomposed.png',
            },
        ],
    },
    twitter: {
        card: 'app',
        title: 'Carrer Navigator',
        description: 'Choose your best Carrer. We guide you to choose best path with best College.',
        siteId: '1467726470533754880',
        creator: '@nextjs',
        creatorId: '1467726470533754880',
        images: {
            url: `${baseUrl}/opengraph-image?60c1579eb90e4b11`,
            alt: 'Carrer Navigator',
        },
        app: {
            name: 'twitter_app',
            id: {
                iphone: 'twitter_app://iphone',
                ipad: 'twitter_app://ipad',
                googleplay: 'twitter_app://googleplay',
            },
            url: {
                iphone: 'https://iphone_url',
                ipad: 'https://ipad_url',
            },
        },
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 3,
    },
    appleWebApp: {
        title: 'Carrer Navigator',
        statusBarStyle: 'black-translucent',
        startupImage: [
            '/assets/startup/apple-touch-startup-image-768x1004.png',
            {
                url: '/assets/startup/apple-touch-startup-image-1536x2008.png',
                media: '(device-width: 768px) and (device-height: 1024px)',
            },
        ],
    },
};



const CBSELayout = ({ children, class11, class12 }: { children: ReactNode, class11: ReactNode, class12: ReactNode }) => {
    return (
        <>
            {children}
            {class11}
            {class12}
        </>
    )
}

export default CBSELayout;