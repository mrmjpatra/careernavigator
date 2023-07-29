import { ImageResponse } from 'next/server'
export const runtime = 'edge'

export const alt = 'CBSE|Carrer Navigator'
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'

export default async function Image({ params }: { params: { name: string } }) {

    return new ImageResponse(
        (
            <div tw="relative flex w-full h-full flex items-center justify-center">
                {/* Background */}
                <div tw="absolute flex inset-0">
                    <img
                        src={'https://careernavigator-4aolsaeap-mrmjpatra.vercel.app/opengraph-image?60c1579eb90e4b11'} alt="logo" tw="flex flex-1" />
                    {/* Overlay */}
                    <div tw="absolute flex inset-0 bg-black bg-opacity-50" />
                </div>
                <div tw="flex flex-col text-neutral-50">
                    {/* Title */}
                    <div tw="text-7xl font-bold text-center">CBSE | Carrer Navigator</div>
                    {/* Tags */}
                    <div tw="flex mt-6 flex-wrap items-center text-4xl text-neutral-200">
                        <div tw='pb-4'>The Central Board of Secondary Education (CBSE) is one of the most prestigious and preferred educational boards in India.</div>
                        <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300 " />
                        <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300" />
                        <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300" />
                    </div>
                </div>
            </div>
        ),
        size
    );
}
