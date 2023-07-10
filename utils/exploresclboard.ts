import { v4 as uuid } from 'uuid'
export const exploreschoolboard = [
    {
        id: uuid(),
        title: 'CBSE',
        href: { pathname: '/schools', query: { data: 'cbse' } }
    },
    {
        id: uuid(),
        title: 'CHSE',
        href: { pathname: '/schools', query: { data: 'chse' } }
    },
    {
        id: uuid(),
        title: 'Class 11th',
        href: '/schools',
    },
    {
        id: uuid(),
        title: 'Class 12th',
        href: '/school',
    },
    {
        id: uuid(),
        title: 'Study Material',
        href: '/school',

    },
    {
        id: uuid(),
        title: 'Previous Year Papers',
        href: '/school',
    },
    {
        id: uuid(),
        title: 'Syllabus',
        href: '/school',
    },
    {
        id: uuid(),
        title: 'Coaching',
        href: '/coachings',
    },
]