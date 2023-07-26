import { v4 as uuid } from 'uuid'

type tableContentType = {
    id: string,
    title: string,
    value: string
}

export const tableContent: tableContentType[] = [
    {
        id: uuid(),
        title: 'Abbreviation',
        value: 'CBSE'
    },
    {
        id: uuid(),
        title: 'CBSE Full Form',
        value: 'Central Board of Secondary Education'
    },
    {
        id: uuid(),
        title: 'Type',
        value: 'Governmental Board of Education'
    },
    {
        id: uuid(),
        title: 'Founded',
        value: '3rd November 1962'
    },
    {
        id: uuid(),
        title: 'Headquarters',
        value: 'New Delhi, India'
    },
    {
        id: uuid(),
        title: 'Chairperson',
        value: 'Mr. Manoj Ahuja'
    },
    {
        id: uuid(),
        title: 'Phone No.',
        value: '011 2250 9256'
    },
    {
        id: uuid(),
        title: 'Official languages',
        value: 'Hindi, English'
    },
    {
        id: uuid(),
        title: 'Parent organisation',
        value: 'Ministry of Human Resource Development'
    },
    {
        id: uuid(),
        title: 'Official Website',
        value: 'www.cbse.nic.in'
    },
    {
        id: uuid(),
        title: 'Tag Line',
        value: '“Committed To Equity And Excellence In Education”'
    },

]