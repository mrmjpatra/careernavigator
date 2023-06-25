import { v4 as uuid } from 'uuid';
export type NoticeType = {
    id: string,
    title: string,
    content: string,
    link: string,
    date: Date
}
export const NoticeList: NoticeType[] = [
    {
        id: uuid(),
        title: 'OJEE',
        content: 'kfalsdjflkadjs',
        link: '/',
        date: new Date('2023-06-25')
    },
    {
        id: uuid(),
        title: 'MCA',
        content: 'kfalsdjflkadjs',
        link: '/',
        date: new Date('2023-06-24')
    },
    {
        id: uuid(),
        title: 'MBA',
        content: 'kfalsdjflkadjs',
        link: '/',
        date: new Date('2023-06-23')
    },
    {
        id: uuid(),
        title: 'JEE',
        content: 'kfalsdjflkadjs',
        link: '/',
        date: new Date('2023-06-22')
    },
    {
        id: uuid(),
        title: 'OUAT',
        content: 'kfalsdjflkadjs',
        link: '/',
        date: new Date('2023-06-21')
    },
    {
        id: uuid(),
        title: 'NEET',
        content: 'kfalsdjflkadjs',
        link: '/',
        date: new Date('2023-05-29')
    },
]